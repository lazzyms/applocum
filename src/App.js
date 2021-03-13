import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoggedIn, LoggedOut } from './components/layout'
import { Login, Register } from './components/pages'
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <LoggedIn content={<Login />} title="Applocum" />
  },
  {
    path: "/login",
    exact: true,
    main: () => <LoggedOut content={<Login />} title="Login" />
  },
  {
    path: "/register",
    exact: true,
    main: () => <LoggedOut content={<Register />} title="Register" />
  },

]
function App(props) {
  return (
    <Router basename="/">
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main history={props.history} />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
