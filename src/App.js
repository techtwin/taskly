import * as ROUTES from "./routes";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Home, Dashboard } from "./pages";
import { checkLogin, getAllUsers } from "./redux/user";
import Loading from "./Components/Loading";

function App() {
  const currentUser = useSelector(({ currentUser }) => currentUser.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  "currentUser:", currentUser;

  useEffect(() => {
    dispatch(getAllUsers());
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(checkLogin(token));
    } else {
      history.push("/");
      <Loading />;
    }
  }, [dispatch]);

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
