import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>

        <Switch>
          {/* switch will render the component for which the route path matches first */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post/:id" component={Post} />

          <Route path="/profile">
            <Profile login={login} />
          </Route>

          {/* use useHistory for this alternative protective route inside Profile component */}
          {/* <Route path="/profile">
            {login ? <Profile /> : <Redirect to="/" />}
          </Route> */}

          {/* by not giving path name, that component will be render for every other onknown path. Also make sure it is the last place in Route component */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
