import React, { useState, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForms';
import { currentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {


    const avatarRef = useRef('');

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }


    return (
        <PopupWithForm
            title='Обновить аватар'
            name='popup_upload-avatar'
            formName='upload'
            buttonText='Сохранить'
            popupContent='popup__container_upload-avatar'
            buttonClose='popup__button-close_upload-avatar'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="url" ref={avatarRef} name="avatar" id="avatar" className="popup__input popup__input_type-link"
                placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="avatar-error"></span>


        </PopupWithForm>
    )
}

export default EditAvatarPopup;
