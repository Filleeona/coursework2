import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/main/Main.jsx';
import Pets from './pages/pets/Pets.jsx';
import Help from './pages/help/Help.jsx';
import NotFound from './pages/not-found/NotFound.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const location = useLocation();

  const routesWithNavigation = ['/', '/pets', '/help'];
  const isNavigationVisible = routesWithNavigation.includes(location.pathname);

  return (
    <>
      {isNavigationVisible && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isNavigationVisible && <Footer />}
    </>
  );
}

export default App;
