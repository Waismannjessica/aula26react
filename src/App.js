import logo from './logo.svg';
import './App.css';
import { RouteApp } from './route';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import NavBar from './componentes/ComponenteNavbar';

function App() {
  return (
  <>
    
    <RouteApp />
    <ToastContainer />
  </>
  );
}

export default App;
