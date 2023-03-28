import React from "react";
import coverBackground from '../../images/profile.jpg';
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";
import myCv from '../../All-Files/jahidul islam cv.pdf'


const TopCover = () => {
  return (
    <div
      className="cover-1 bg-no-repeat bg-contain lg:bg-fixed lg:bg-cover relative h-[530px] lg:h-[700px]" style={{ 
        backgroundImage: `url(${coverBackground})` 
      }}>
      <div className="container mx-auto flex flex-col space-y-5 items-center absolute mt-40 lg:mt-80">
        <div className="coverDetails-section bg-cyan-20">
          <div className="container mx-auto flex flex-col  items-center justify-center">
            <h1 className="text-3xl text-center lg:text-5xl font-extrabold  text-rose-500">
              I'm a Professional Web Developer{" "}
            </h1>
            <p className="block text-center mx-10 lg:mx-40 text-sm lg:text-xl text-rose-400 justify-center font-bold pt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              provident necessitatibus quo deserunt delectus neque!
            </p>
            <div className="container mt-5 flex flex-row justify-center space-x-10 lg:space-x-10 text-rose-600 text-xl lg:text-3xl">
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center ring-2 ring-cyan-400 bg-slate-900  shadow-slate-800 rounded-full cursor-pointer hover:ring-rose-500 shadow-lg hover:text-4xl hover:scale-125 hover:transition hover:duration-700 ">
                <Link to="https://github.com/mdjahidulislam00" ><span className="shadow-lg shadow-slate-600 rounded-full"><FaGithub/></span></Link>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center ring-2 ring-cyan-400 bg-slate-900  shadow-lg shadow-slate-800 rounded-full cursor-pointer hover:ring-rose-500 hover:text-4xl hover:scale-125 hover:transition hover:duration-700 ">
                <Link to ='https://www.linkedin.com/in/jahidul-islam-885913224/'><span className="shadow-lg shadow-slate-600 rounded-full"><FaLinkedin/></span></Link>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center ring-2 ring-cyan-400 bg-slate-900 shadow-lg shadow-slate-800 rounded-full  cursor-pointer hover:ring-rose-500  hover:text-4xl hover:scale-125 hover:transition hover:duration-700">
                <Link to='https://twitter.com/Jahidul6767'> <span className="shadow-lg shadow-slate-600 rounded-full"><FaTwitter/></span></Link>
              </div>
            </div>
            <Link to={myCv} target="_blank"><button className="w-40 mt-5 px-6 py-3 text-rose-700 font-semibold border-2 border-rose-400 rounded cursor-pointer hover:w-[300px] hover:text-center hover:bg-rose-400 duration-700 hover:text-white">
              Download Cv
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCover;
