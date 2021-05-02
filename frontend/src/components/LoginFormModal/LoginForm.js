import React, {useState} from 'react';
import { useDispatch } from 'react-redux';  //useSelector
// import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    // const sessionUser = useSelector(state => state.session.user)
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

    // if(sessionUser){
    //     return (
    //         <Redirect to="/"/>
    //     )
    // }

    return (
        <div className="input-form">
            <h2>Sign into Pickr:</h2>
            <form onSubmit={submitHandler}>
                <ul>
                    {errors.map( (error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='input-form-field'>
                    <label>
                        Username/Email:
                        <input
                            className='input-form-field_input'
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='input-form-field'>
                    <label>
                        Password:
                        <input
                            className='input-form-field_input'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;
