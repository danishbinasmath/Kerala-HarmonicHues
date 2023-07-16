import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import Asap from './components/Asap';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/asap" element={<Asap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
