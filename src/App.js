import './App.scss';
import NavBar from './components/NavBar/NavBar';
// import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage"

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      <RegistrationPage></RegistrationPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
