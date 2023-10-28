import React from 'react';
import Card from "./Card";
import { currentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onCardLike,
    onCardDelete,
    cards,
}) {

    // контекст 
    const currentUser = React.useContext(currentUserContext)

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__image-container" onClick={onEditAvatar}><img src={currentUser.avatar} alt="Аватар профиля"
                        className="profile__avatar" /></div>
                    <div className="profile__edit-container">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__info">{currentUser.about}</p>
                    <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
                </section>

                <section className="place-grid">
                    {cards.map(card => {
                        return (
                            <Card
                                card={card}
                                key={card._id}
                                onCardClick={onCardClick}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                            >

                            </Card>

                        )
                    })}

                </section>
            </main>
        </>
    )
};

export default Main;

