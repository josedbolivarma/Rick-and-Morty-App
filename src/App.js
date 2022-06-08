import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Navbar from './components/Nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Episodes from './Pages/Episodes/Episodes';
import Location from './Pages/Location/Location';
import CardDetails from './components/Cards/CardDetails';

 function App() {
  
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes/>} />
        <Route path='/location' element={<Location />} />
        <Route path='/episodes/:id' element={<CardDetails/>} />
        <Route path='/location/:id' element={<CardDetails />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
