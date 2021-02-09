import * as ROUTES from "./routes";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home, Dashboard } from "./pages";

function App() {
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser);
  console.log("currentUser:", currentUser);

  return (
    <div className="main">
      <Switch>
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
      {currentUser ? (
        <Redirect to={ROUTES.DASHBOARD} />
      ) : (
        <Redirect to={ROUTES.HOME} />
      )}
    </div>
  );
}

export default App;
