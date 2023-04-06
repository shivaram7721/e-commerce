import './App.css';
import {Routes ,Route} from 'react-router-dom'
import { NavBar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { Cart } from './components/cart/cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
