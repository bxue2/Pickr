import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginFormPage = () => {
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className="input-form">
            <form onSubmit={submitHandler}>
                <label for="credential">Username/Email: </label>
                <input
                    type="text"
                    id="credential"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
                <label for="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginFormPage;
