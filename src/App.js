import './App.css';
import {
Routes, Route
} from "react-router-dom";
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe';
import MyWorks from './Pages/MyWorks';
import ContractMe from './Pages/ContractMe';
import NotFround from './Pages/NotFround';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HireMe from './Pages/HireMe';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <AboutMe /> } />
        <Route path="/work" element={ <MyWorks /> } />
        <Route path="/contract" element={ <ContractMe /> } />
        <Route path="/hireMe" element={ <HireMe /> } />
        <Route path="*" element={ <NotFround /> } />
      </Routes>
    <Footer />
    </>
  );
} 

export default App;
