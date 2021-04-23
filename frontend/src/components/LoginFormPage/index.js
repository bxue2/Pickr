import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css'

const LoginFormPage = () => {
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const sessionUser = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.loginUser({credential, password}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    if(sessionUser){
        return (
            <Redirect to="/"/>
        )
    }

    return (
        <div className="input-form">
            <form onSubmit={submitHandler}>
                <ul>
                    {errors.map( (error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Username/Email:
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginFormPage;
