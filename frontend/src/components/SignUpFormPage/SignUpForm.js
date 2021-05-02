
import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user)

    if(sessionUser){
        return (
            <Redirect to="/"/>
        )
    }

    const submitHandler = (e) => {
       e.preventDefault();
        setErrors([]);
        if(password !== confirmPass){
            return setErrors(["Passwords do not match"]);
        }
        else{
            return dispatch(sessionActions.signUpUser({username, email, password}))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
              });
        }
    }

    return(
        <div className="sign-up-form">
            <form onSubmit={submitHandler}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                        />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
