import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import Asap from './components/Asap';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/asap" element={<Asap />} />
          <Route path="/quote" element={<Quote />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
