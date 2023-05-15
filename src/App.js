
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
