import logo from './logo.svg';
import './App.css';
import Ragistration from "./Components/Ragistration"
import Login from './Components/Loginpage';
import Home from "./Components/Home"
import Menu from "./Components/Menu";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Success from './Components/Success';
import Orders from './Components/Order';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/Login' exact element={<Login/>}/> 
        <Route path='/signup' exact element={<Ragistration/>}/> 
        <Route path='/' exact element={<Home/>}/> 
        <Route path='/Menu' exact element={<Menu/>}/> 
        <Route path='/Cart' exact element={<Cart/>}/> 
        <Route path='/Success' exact element={<Success/>}/> 
        <Route path='/Order' exact element={<Orders/>}/> 
        <Route path='/Profile' exact element={<Profile/>}/> 
        

      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
