import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../images/profile.jpg';

const Footer = () => {
    return (
        <div>
            <div class="footer py-10 px-10 bg-slate-800">
            <div class="container mx-auto flex flex-row justify-between md:justify-center lg:justify-around md:space-x-10 space-y-8" >
                <div class="quickLink-section text-center">
                    <h2 class="text-2xl text-rose-400 p-2 border-b-2 border-rose-700">Quick Link</h2>
                    <ul class="text-gray-500 text-lg mt-2 space-y-2">
                        <li class="hover:text-rose-500 cursor-pointer"><Link to="/home">Home</Link></li>
                        <li class="hover:text-rose-500 cursor-pointer"><Link to="/about">About-Me</Link></li>
                        <li class="hover:text-rose-500 cursor-pointer"><Link to="/work">My Works</Link></li>
                        <li class="hover:text-rose-500 cursor-pointer"><Link to="/contract">Contract</Link></li>
                    </ul>
                </div>
                <div class="bioSection">
                    <div class="photoAndName-section flex flex-row gap-5 items-center">
                        <img class="w-16 h-16 rounded-full bg-cover" src={logo} alt=""/>
                        <span class="text-3xl font-semibold text-rose-400">Jahidul Islam</span>
                    </div>
                    {/* <div class="socialMedia-section mt-5 flex flex-row gap-8">
                        <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-800 text-gray-400 flex justify-center items-center hover:text-rose-500 "><FaFacebook/></div>
                        <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-800 text-gray-400 flex justify-center items-center hover:text-rose-500 "><FaInstagram/></div>
                        <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-800 text-gray-400 flex justify-center items-center hover:text-rose-500 "><FaTwitter/></div>
                        <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-800 text-gray-400 flex justify-center items-center hover:text-rose-500 "><FaGithub/></div>
                        <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-800 text-gray-400 flex justify-center items-center hover:text-rose-500 "><FaLinkedin/></div>
                    </div> */}
                </div>
            </div>
        </div>
        <hr/>
        <div class="copyRightMessage bg-slate-900">
            <h2 class="text-md text-center text-gray-500 p-5">© 2023. All rights reserved by Jahid Design</h2>
        </div>
        </div>
    );
};

export default Footer;