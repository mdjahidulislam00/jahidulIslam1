import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope} from "react-icons/fa";
import contractSecPic from '../../images/profile.png'

const ContractMeSec = () => {
    return (
        <div>
            <div class="contractMe-section mt-0.5 bg-slate-900">
            <div class="contractSection-header pt-5 pb-10 flex flex-row items-center justify-center space-x-2">
                <div class="left-line h-[2px] w-10  bg-rose-600 rounded-lg"></div>
                <div class="text-xl text-rose-400 block font-semibold">Contract with me</div>
                <div class="right-line h-[2px] w-10  bg-rose-600 rounded-lg"></div>
            </div>
            <div class="container basis-2/5 mx-auto flex flex-col lg:flex-row ">
                <div class="socialLink-section sm:basis-full">
                    <div class="container sm:p-10 lg:text-center">
                        <img class="bg-cover bg-origin-border rounded-lg border-4 border-gray-800" src={contractSecPic} alt=""/>
                        <h2 class="text-white text-3xl font-bold mt-5">Jahidul Islam</h2>
                        <span class="text-gray-200 text-sm">Jr web Developer</span>
                        <p class="text-lg text-white font-semibold mt-8">Find with me..</p>
                        <div class="socialMedia-section mt-4 flex flex-row md:justify-end lg:justify-center gap-8">
                            <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-md cursor-pointer shadow-gray-700 text-gray-400 flex justify-center items-center hover:text-rose-500 hover:scale-125 duration-300 "><FaFacebook/></div>
                            <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-700 text-gray-400 flex justify-center items-center hover:text-rose-500 hover:scale-125 duration-300 "><FaInstagram/></div>
                            <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-700 text-gray-400 flex justify-center items-center hover:text-rose-500 hover:scale-125 duration-300"><FaTwitter/></div>
                            <div class="text-2xl bg-black w-12 h-12 rounded-md shadow-lg cursor-pointer shadow-gray-700 text-gray-400 flex justify-center items-center hover:text-rose-500 hover:scale-125 duration-300"><FaEnvelope/></div>
                        </div>
                    </div>
                </div>
                <div class="messaging-section basis-3/5 bg-gray-800 md:pb-2  lg:mb-2 rounded-md overflow-hidden"> 
                    <div class="contractSection-header mt-1 px-10 py-5 flex flex-row items-center justify-center space-x-2">
                        <div class="left-line h-[2px] w-10  bg-rose-600 rounded-lg"></div>
                        <div class="text-xl text-rose-400 block font-semibold">Message to me</div>
                        <div class="right-line h-[2px] w-10  bg-rose-600 rounded-lg"></div>
                    </div>
                    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 space-y-5 mx-10 items-center">
                        <div class="nameSection">
                            <span class="text-lg text-white font-semibold">Your Name</span> <br/>
                            <input class="w-80 lg:w-96 mt-2 p-2 rounded bg-slate-700 text-white caret-pink-500" type=" text" placeholder="Your full Name"/>
                        </div>
                        <div class="PhoneSection">
                            <span class="text-lg text-white font-semibold">Your Phone</span> <br/>
                            <input class=" w-80 lg:w-96 mt-2 p-2 rounded bg-slate-700 text-white" type=" number" placeholder="number"/>
                        </div>
                        <div class="emailSection">
                            <span class="text-lg text-white font-semibold">Your Email</span> <br/>
                            <input class="w-80 lg:w-96 mt-2 p-2 rounded bg-slate-700 text-white" type=" email" placeholder="Your Email"/>
                        </div>
                        <div class="subjectSection ">
                            <span class="text-lg text-white font-semibold">Your subject</span> <br/>
                            <input class="w-80 lg:w-96 mt-2 p-2 rounded bg-slate-700 text-white" type=" text" placeholder="Your Email"/>
                        </div>
                        <div class="textAreaSection ">
                            <span class="text-lg text-white font-semibold">Your Message</span> <br/>
                            <textarea class="rounded-md mt-2 bg-slate-700 text-white p-5 w-96 " name="your message" id="" cols="40" rows='2' ></textarea>
                        </div>
                        <br/>
                        <div class="buttonSection ">
                            <button class="bg-rose-400 text-white text-lg font-semibold rounded-md text-center sm:px-24 lg:px-5 md:py-10 lg:py-3 hover:bg-rose-500 mb-3 md:mb-0 lg:hover:px-32 duration-700">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContractMeSec;