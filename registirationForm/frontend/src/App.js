import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
