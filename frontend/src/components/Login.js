import React, { useState } from "react";

function Login({ onLogin }) {

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

        onLogin({
            email: login,
            password
        });

    }



    return (
        <>
            <div className="auth__container">

                <div className="auth__form-container">

                    <h3 className="auth__text">Вход</h3>
                    <form className="auth__form" name="loginform" onSubmit={handleSubmit}>

                        <input
                            type="email" name="name" id="login" className="auth__input popup__input_type_name" required minLength="2"
                            maxLength="40" placeholder="Email" onChange={handleChangeLogin}
                        />

                        <span className="popup__error" id="name-error">
                        </span>

                        <input type="password" name="loginpassword" id="loginpassword" className="auth__input popup__input_type_info" required minLength="2"
                            maxLength="200" placeholder="Пароль" onChange={handleChangePassword} />
                        <span className="popup__error" id="info-error">
                        </span>

                        <button className="auth__button" type="submit">Войти</button>
                    </form>
                    {/* END FORM */}

                </div>

            </div>
        </>
    )
}

export default Login;