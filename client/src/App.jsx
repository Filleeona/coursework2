import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import Pets from "./pages/pets/Pets.jsx";
import Help from "./pages/help/Help.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
