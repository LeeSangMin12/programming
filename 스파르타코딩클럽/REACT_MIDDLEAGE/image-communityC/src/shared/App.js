
import './App.css';
import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/configureStore';


import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Header from "../components/Header";
import {Grid} from "../elements";

import {useDispatch} from 'react-redux'
import {actionCreators as userActions} from '../redux/modules/user'

import {apiKey} from './firebase';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key)? true: false;

  // React.useEffect(() => {
  //   if(is_session){
  //     dispatch(userActions.loginCheckFB());
  //   }
  // }, []);
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup}/>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
