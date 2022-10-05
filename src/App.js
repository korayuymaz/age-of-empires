import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Unit from './components/Unit';
import Units from './components/Units';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='units' element={<Units />} />
      <Route path='unit/:id' element={<Unit />} />
    </Routes>
  );
}

export default App;
