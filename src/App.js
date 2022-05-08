import './App.css';
import Home from './compomemts/Home';
import NavBar from './compomemts/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Currencies from './compomemts/Currencies';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/currencies' element={<Currencies/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
