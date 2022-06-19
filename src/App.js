import { Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dark from './Components/Dark';
import Error from './Components/Error';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Search from './Components/Search';
import Trailer from './Components/Trailer';


function App() {
  return (
    <div className="App">
    <Navigation/>
    <Search/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie" element={<Search/>} />
      <Route path="/movie/:id" element={<Trailer/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    <br/>
    <Link to={"/"}><Button variant="primary">home</Button></Link>
    <Link to={"/movie"}><Button variant="primary">movie</Button></Link>
    <br/>
    <Dark/>
    </div>
  );
}

export default App;
