const {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
} = require('http2').constants;

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

const Card = require('../models/card');

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  return Card.create({ name, link, owner: req.user._id })
    .then((r) => res.status(HTTP_STATUS_CREATED).send(r))
    .populate('owner')
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при создании карточки.'));
        return;
      }
      next(e);
    });
};

module.exports.getCards = (req, res, next) => Card.find({})
  .populate(['owner', 'likes'])
  .then((r) => res.status(HTTP_STATUS_OK).send(r))
  .catch(next);

module.exports.deleteCardById = (req, res, next) => {
  const { cardId } = req.params;
  return Card.findById(cardId)
    .then((r) => {
      if (r === null) {
        throw new NotFoundError('Карточка не найдена!');
      }
      if (`${r.owner}` !== req.user._id) {
        throw new ForbiddenError('Сожалеем, но Вы можете удалять только свои карточки!');
      }
      return Card.findByIdAndRemove(cardId);
    })
    .then((r) => {
      res.status(HTTP_STATUS_OK).send(r);
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Такой карточки не существует!'));
        return;
      }
      next(e);
    });
};

module.exports.likeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .populate(['owner', 'likes'])
  .then((r) => {
    if (r === null) {
      throw new NotFoundError('Карточка не найдена!');
    }
    return res.status(HTTP_STATUS_OK).send(r);
  })
  .catch((e) => {
    if (e.name === 'CastError') {
      next(new BadRequestError('Передан несуществующий _id карточки.'));
      return;
    }
    next(e);
  });

module.exports.dislikeCard = (req, res, next) => {
  const { cardId } = req.params;
  return Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .populate(['owner', 'likes'])
    .then((r) => {
      if (r === null) {
        throw new NotFoundError('Карточка не найдена!');
      }
      return res.status(HTTP_STATUS_OK).send(r);
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequestError('Передан несуществующий _id карточки.'));
        return;
      }
      next(e);
    });
};
