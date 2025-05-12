import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/main/Main.jsx';
import Pets from './pages/pets/Pets.jsx';
import Help from './pages/help/Help.jsx';
import NotFound from './pages/not-found/NotFound.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import ThemeSync from './theme/ThemeSync.jsx';
import MiniGame from './pages/help/WaysToHelpUs/MiniGame.jsx';

function App() {
  const location = useLocation();

  const routesWithNavigation = ['/', '/pets', '/help'];
  const isNavigationVisible = routesWithNavigation.includes(location.pathname);

  return (
    <ThemeSync>
      {isNavigationVisible && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/help" element={<Help />} />
        <Route path="/ways-to-help-us" element={<Help />} />
        <Route path="/mini-game" element={<MiniGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isNavigationVisible && <Footer />}
    </ThemeSync>
  );
}

export default App;
