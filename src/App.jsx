import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs';
import Watches from './pages/Watches';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutUs />}/>
         <Route path="/" element={<Watches />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
