import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
