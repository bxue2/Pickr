import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
// import LoginFormPage from './components/LoginFormModal'
import SignUpFormPage from './components/SignUpFormPage'
import {useDispatch} from 'react-redux';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';
import UploadImagePage from './components/UploadImagePage';
import SinglePicturePage from './components/SinglePicturePage';

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
        {/* <Route path="/login">
          <LoginFormPage />
        </Route> */}
        <Route exact path="/pictures">
          Pictures
        </Route>
        <Route path="/pictures/:pictureid">
          <SinglePicturePage />
        </Route>
        <Route exact path="/signup">
          <SignUpFormPage />
        </Route>
        <Route exact path="/upload-image">
          <UploadImagePage />
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
