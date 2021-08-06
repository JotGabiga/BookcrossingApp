import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer></Footer>
    </div>
  );
}

export default App;
