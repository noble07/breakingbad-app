import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MenuApp from 'components/MenuApp'
import Home from "pages/Home";
import CustomLists from "pages/CustomLists";

const AppRouter = () => {
  return (
    <Router>
      <MenuApp />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lists" component={CustomLists} />
          
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
