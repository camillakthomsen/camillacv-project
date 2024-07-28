import './App.css';
import { NavBar } from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { PageLayout } from './Components/PageLayout';
import { Home } from './Components/Home';
import { setBaseUrl } from './Services/api';
import { Jobs } from './Components/Jobs';
import { Uddannelse } from './Components/Uddannelse';
import { Personlig } from './Components/Personlig';
import { Kontakt } from './Components/Kontakt';
import { Karakter } from './Components/Karakter';
import { Portfolie } from './Components/Portfolie';

function App() {
  setBaseUrl('http://localhost:4001');

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<PageLayout/>}/>
        <Route path="/home" element={<Home/>}/>        
        <Route path="/uddannelse" element={<Uddannelse/>}/>
        <Route path="/karakter" element={<Karakter/>}/>
        <Route path="/portfolie" element={<Portfolie/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/personlig" element={<Personlig/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
      </Routes>
    </div>
  );
}

export default App;
