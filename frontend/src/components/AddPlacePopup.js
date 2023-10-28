import React, { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForms';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const placeNameRef = useRef('')
    const placeLinkRef = useRef('')


    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: placeNameRef.current.value,
            link: placeLinkRef.current.value
        })
    }


    useEffect(() => {
        placeNameRef.current.value = null;
        placeLinkRef.current.value = null;
    }, [isOpen])

    return (
        <PopupWithForm
            name='popup_cards'
            title='Новое место'
            buttonText='Создать'
            formName='cards'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" ref={placeNameRef} name="place" id="place" className="popup__input popup__input_type-place"
                placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__error" id="place-error">
            </span>
            <input type="url" ref={placeLinkRef} name="link" id="link" className="popup__input popup__input_type-link"
                placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="link-error">
            </span>

        </PopupWithForm>
    )
};

export default AddPlacePopup;

