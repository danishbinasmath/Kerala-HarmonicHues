import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import Asap from './components/Asap';
import Quote from './components/Quote';
import News from './components/News';
import FuelPrice from './components/FuelPrice';
import PostOffice1 from './components/PostOffice1'
import PostOffice2 from './components/PostOffice2'
import PostOffice3 from './components/PostOffice3'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/asap" element={<Asap />} />
          <Route path="/quote" element={<Quote />} /> 
          <Route path="/news" element={<News />} />
          <Route path="/fuelprice" element={<FuelPrice />} />
          <Route path="/postoffice3" element={<PostOffice3 />} />
          <Route path="/postoffice1" element={<PostOffice1 />} />
          <Route path="/postoffice2" element={<PostOffice2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
