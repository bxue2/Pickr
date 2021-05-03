import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
// import LoginFormPage from './components/LoginFormModal'
// import SignUpFormPage from './components/SignUpFormPage'
import {useDispatch} from 'react-redux';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';
import UploadImagePage from './components/UploadImagePage';
import SinglePictureDisplay from './components/SinglePictureDisplay';
import ProfilePage from './components/ProfilePage';
import CreateAlbumPage from './components/CreateAlbumPage';
import AlbumDisplayPage from './components/AlbumDisplayPage';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';

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
          <Route path="/users/:userid">
            <ProfilePage />
          </Route>
          <Route path="/pictures/:pictureid">
            <SinglePictureDisplay />
          </Route>
          {/* <Route exact path="/signup">
            <SignUpFormPage />
          </Route> */}
          <Route exact path="/upload-image">
            <UploadImagePage />
          </Route>
          <Route exact path="/create-album">
            <CreateAlbumPage />
          </Route>
          <Route path="/albums/:albumid">
            <AlbumDisplayPage />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
