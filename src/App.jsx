import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import Settings from "./components/Settings/Settings";
import BookPage from "./components/BookPage/BookPage"
function App() {
  return (
    <Switch>
    <div className="App">
      <NavBar/>
      <section className="content">
        <Route exact path="/" component={Home} />
        <Route path="/yourprofile" component={Profile} />
        <Route path="/registration" component={Registration} />
        <Route path="/settings" component={Settings} />
        <Route path="/bookpage/:id" component={BookPage} />
      </section>
      <Footer></Footer>
    </div>
    </Switch>
  );
}
export default App;
