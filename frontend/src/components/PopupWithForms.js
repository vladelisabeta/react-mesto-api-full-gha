import React from "react";

function PopupWithForm({
    name,
    title,
    formName,
    buttonText,
    children,
    popupContent,
    buttonClose,
    isOpen,
    onClose,
    onSubmit
}) {


    // проверяю имя попапа и устанавливаю открытие
    const popupStatusClassName = `popup ${name} ${isOpen ? 'popup_opened' : ''}`

    return (
        <div className={popupStatusClassName}>
            <div className="popup__box">
                <button className={`popup__button-close ${buttonClose}`} type="button" onClick={onClose} />
                <div className={`popup__container ${popupContent}`}>
                    <h3 className="popup__text">{title}</h3>
                    {/* FORM HERE здесь был noValidate*/}
                    <form className="popup__form" name={`${formName}`} onSubmit={onSubmit}>
                        {children}
                        <button className="popup__save" type="submit">{buttonText}</button>
                    </form>
                    {/* END FORM */}
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm;