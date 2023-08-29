import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
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





function ThemedRoute({ children }) {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/news" element={<News />} />
          <Route path="/fuelprice" element={<FuelPrice />} />
          <Route path="/postoffice3" element={<PostOffice3 />} />
          <Route path="/postoffice1" element={<PostOffice1 />} />
          <Route path="/postoffice2" element={<PostOffice2 />} />
          <Route path='/loginpage' element={<ThemedRoute><LoginPage /></ThemedRoute>} />
          <Route path='/home' element={isAuth ? <ThemedRoute><HomePage /></ThemedRoute> : <Navigate to="/loginpage"/>} />
          <Route path='/profile/:userId' element={isAuth ? <ThemedRoute><ProfilePage /></ThemedRoute> : <Navigate to="/loginpage"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


