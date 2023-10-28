import React, { useState } from 'react';
import PopupWithForm from './PopupWithForms';
import { currentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(currentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }



    return (
        <PopupWithForm
            title='Редактировать профиль'
            name='popup_edit'
            buttonText='Сохранить'
            formName='about'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="text" name="name" id="name" className="popup__input popup__input_type_name" required minLength="2"
                maxLength="40" placeholder="Имя" value={name || ''} onChange={handleChangeName}
            />

            <span className="popup__error" id="name-error">
            </span>

            <input type="text" name="info" id="info" className="popup__input popup__input_type_info" required minLength="2"
                maxLength="200" placeholder="Вид деятельности" value={description || ''} onChange={handleChangeDescription} />
            <span className="popup__error" id="info-error">
            </span>

        </PopupWithForm>

    )
}

export default EditProfilePopup