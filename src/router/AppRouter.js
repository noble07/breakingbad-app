import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { firebase } from 'firebase/firebase-cofing'

import MenuApp from 'components/MenuApp'
import Home from "pages/Home";
import CustomLists from "pages/CustomLists";
import { useDispatch, useSelector } from "react-redux";
import { login } from "actions/auth";
import { startLoadingList } from "actions/list";

const AppRouter = () => {

  const dispatch = useDispatch();
  const {logged} = useSelector(state => state.auth)

  useEffect(() => {
      
    firebase.auth().onAuthStateChanged( (user) => {

      if ( user?.uid ) {
          dispatch( login( user.uid, user.displayName ) );
          dispatch( startLoadingList( user.uid ) )
      } 

    });
      
  }, [ dispatch ])


  return (
    
    <Router>
      <MenuApp />
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <PrivateRoute
            exact
            path="/lists"
            component={CustomLists}
            isAuthenticated={ logged }
          />
          
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
