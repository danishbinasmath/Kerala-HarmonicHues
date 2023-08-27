import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import Asap from './components/Asap';
import Quote from './components/Quote';
import News from './components/News';
import FuelPrice from './components/FuelPrice';
import PostOffice1 from './components/PostOffice1';
import PostOffice2 from './components/PostOffice2';
import PostOffice3 from './components/PostOffice3';
import HomePage from 'scenes/homePage';
import ProfilePage from 'scenes/profilePage';
import LoginPage from 'scenes/loginPage';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";




function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline/>
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
            <Route path='/loginpage' element={<LoginPage />} />
            <Route path='/home' element={isAuth ? <HomePage /> : <Navigate to="/loginpage"/>} />
            <Route path='/profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to="/loginpage"/>} />
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
