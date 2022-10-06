// import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>

  );
}

export default App;
