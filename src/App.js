import logo from './logo.svg';
import './App.css';

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
        </Routes>
    </Router>
  );
}

export default App;
