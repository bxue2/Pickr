import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage'
import {useDispatch} from 'react-redux';
import * as sessionActions from './store/session'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() => setIsLoaded(true));
  }, []);

  return isLoaded && (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route>
       <h1>Hello from App</h1>
      </Route>
    </Switch>
  );
}

export default App;
