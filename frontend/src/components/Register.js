import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Register({ onUserRegister }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    function handleChangeLogin(e) {
        setLogin(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUserRegister({
            email: login,
            password
        });

    }


    return (
        <>
            <div className="auth__container">

                <div className="auth__form-container">

                    <h3 className="auth__text">Регистрация</h3>
                    <form className="auth__form" name="aaa" onSubmit={handleSubmit}>


                        <input
                            type="email" name="login" value={login || ''} id="signupemail" className="auth__input popup__input_type_name" required minLength="2"
                            maxLength="40" placeholder="Email" onChange={handleChangeLogin}
                        />

                        <span className="popup__error" id="name-error">
                        </span>

                        <input type="password" name="password" value={password || ''} id="signuppassword" className="auth__input popup__input_type_info" required minLength="2"
                            maxLength="200" placeholder="Пароль" onChange={handleChangePassword}
                        />
                        <span className="popup__error" id="info-error">
                        </span>

                        <button className="auth__button" type="submit">Зарегистрироваться</button>
                    </form>

                    <Link className="auth__login-move" to='/signin'>
                        Уже зарегистрированы? Войти
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Register;