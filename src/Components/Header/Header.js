import React from 'react';
import logo from '../../images/profile.jpg'
import { FaBars} from "react-icons/fa";

const Header = () => {
const mobileMenuBarHandel =() => {
    const element = document.querySelector('.mobileNav-section');
          element.classList.add()
          element.classList.toggle("hidden")
          console.log('clicked mobile menu button');
};
  return (
    <div>
        <div className="header sticky shadow-md  shadow-rose-400/70 bg-black">
            <div className="container mx-auto flex justify-between px-10 py-5">
                <div className="logo-section basic-1/5 flex justify-center items-center gap-5">
                    <img className="w-10 h-10 rounded-full" src={logo} alt=""/> 
                    <h2 className=" font-mono text-2xl font-bold tracking-wide text-rose-500 ">Jahidul Islam</h2>
                </div>
                <div className="mobileMenuBar flex items-center lg:hidden">
                    <button onClick={mobileMenuBarHandel} className=" text-rose-400 text-3xl"><FaBars/></button>
                </div>
                <nav className="hidden lg:flex navbar-section basic-4/5">
                    <ul className="flex flex-row space-x-10 text-md text-right text-white font-semibold subpixel-antialiased">
                        <li className="p-2 text-rose-400">Home</li>
                        <li className="cursor-pointer hover:text-rose-400 p-2 ">About Me</li>
                        <li className="cursor-pointer hover:text-rose-400 p-2 ">My work</li>
                        <li className=" cursor-pointer hover:text-rose-400 p-2 ">Contract</li>
                        <button className="px-5 py-2 border-2 border-rose-400 rounded hover:bg-rose-400 duration-300 hover:text-white">Hair me</button> 
                    </ul>
                </nav>         
            </div>
            <div className="mobileNav-section hidden mt-5 ">
                <div className="nav mx-auto border-b-2 border-rose-500">
                    <ul className="w-full text-md text-white text-center flex flex-col gap-2 divide-y-2 divide-rose-400">
                        <li className="text-rose-400 py-1">Home</li>
                        <li className="py-1">About me</li>
                        <li className=" py-1">My work </li>
                        <li className="py-2">Contract</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;