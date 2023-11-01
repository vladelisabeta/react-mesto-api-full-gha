import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

    const currentUser = React.useContext(currentUserContext)

    const isOwn = card.owner._id === currentUser._id;

    // const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `card__heart ${isLiked && 'card__heart_active'}`
    );

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    // handleDeleteClick

    return (
        // разобраться с чайлд и кей айди
        <div className="card">
            {isOwn && <button type="button" className="card__trash" onClick={handleDeleteClick}></button>}
            <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
            <div className="card__heart-container">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
                    <span className="card__like-count">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )

}


export default Card;