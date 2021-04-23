import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage'
import SignUpFormPage from './components/SignUpFormPage'
import {useDispatch} from 'react-redux';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route>
        <h1>Hello from App</h1>
        </Route>
      </Switch>

      )}
    </>
  );
}

export default App;
