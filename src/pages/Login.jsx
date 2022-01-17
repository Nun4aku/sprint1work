import React, {useState, useMemo, useEffect, useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context/index';

function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return(
        <>
            <h1>Форма входа</h1>
            <form onSubmit = { login }>
                <MyInput text='text' placeholder='Login'/>
                <MyInput text='password' placeholder='Password'/>
                <MyButton>Login</MyButton>
            </form>
        </>
    )
}

export default Login;