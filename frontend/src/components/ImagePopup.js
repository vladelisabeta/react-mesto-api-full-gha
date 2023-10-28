import React from "react";

function ImagePopup({ card, onClose }) {

    const popupStatusClassName = `popup popup_image ${card ? 'popup_opened' : ''}`

    return (
        <div className={popupStatusClassName}>
            <div className="popup__image-opened">
                <button type="button" className="popup__button-close popup__button-close_image" onClick={onClose}></button>
                <span className="popup__image-text">{card ? card.name : ''}</span>
                <img className="popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
            </div>

        </div>
    )

};

export default ImagePopup;