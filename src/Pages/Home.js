import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import TopCover from '../Components/TopCover/TopCover';
import AboutMe from './AboutMe';
import ContractMe from './ContractMe';
import MyWorks from './MyWorks';


const Home = () => {
    return (
        <div>
            <TopCover />
            <AboutMe />
            <MyWorks />
            <ContractMe />
        </div>
    );
};

export default Home;