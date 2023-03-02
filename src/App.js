import './App.css';
import AboutMe from './Components/About-Me/AboutMe';
import ContractMeSec from './Components/ContractMe/ContractMeSec';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MyWorkSec from './Components/MyWork/MyWorkSec';
import TopCover from './Components/TopCover/TopCover';

function App() {
  return (
    <div>
      <Header></Header>
      <TopCover></TopCover>
      <AboutMe></AboutMe>
      <MyWorkSec></MyWorkSec>
      <ContractMeSec></ContractMeSec>
      <Footer></Footer>
    </div>
  );
}

export default App;
