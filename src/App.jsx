import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import BookPage from "./components/BookPage/BookPage";
import Start from "./components/Start/Start";
import { Fragment } from "react";
function App() {
  return (
    <Switch>
      <Fragment>
    <div className="App">
      <NavBar/>
      <section className="content">
        <Route exact path="/" component={Home} />
        <Route path="/yourprofile" component={Profile} />
        <Route path="/login" component={Start} />
        <Route path="/settings" component={Settings} />
        <Route path="/bookpage/:id" component={BookPage} />
      </section>
      <Footer></Footer>
    </div>
    </Fragment>
    </Switch>
  );
}
export default App;
