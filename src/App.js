import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Unit from './components/Unit';
import Units from './components/Units';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='unit/:id' element={<Unit />} />
      <Route path='units' element={<Units />} />
    </Routes>
  );
}

export default App;
