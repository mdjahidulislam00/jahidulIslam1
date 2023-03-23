import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AboutSectionImage from '../images/mywebsite-pic.png'

const AboutMe = () => {
    return (
        <div>
            <div className="about-section mx-auto mt-0 bg-slate-900 ">
            <div className="aboutSection-header mt-0 pt-5 pb-12 flex flex-row items-center justify-center space-x-2">
                <div className="left-line h-[2px] w-20 bg-gray-400 rounded-lg"></div>
                <div className="text-xl text-rose-400 block font-semibold">About me</div>
                <div className="right-line h-[2px] w-20 bg-gray-400 rounded-lg"></div>
            </div>
            <div className="aboutMeSection-content ">
                <div className="container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 px-10">
                    <div className="aboutImage-Section flex justify-center lg:basis-2/5">
                        <img className="rounded-lg object-cover  shadow-lg shadow-slate-600 " src={AboutSectionImage} alt=""/>
                    </div>
                    <div className="aboutText-section basis-full lg:basis-3/5">
                        <div className="container">
                            <h2 className="text-4xl text-rose-400 font-bold">Hello, <br/> Iam Jahidul Islam</h2>
                            <p className="text-lg lg:text-3xl text-gray-400 text-justify mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum ducimus voluptatibus quibusdam error corporis fugiat molestias ipsum libero, incidunt, consequuntur tempora explicabo provident sit? Molestiae ex omnis perspiciatis rem!</p>
                            <div className="about-details flex flex-col mt-10 gap-2">
                                <div className="single-Information bg-slate-600 rounded">
                                    <div className="overflow-hidden">
                                        <div className=" text-white">
                                          <dl>
                                            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                              <dt className="text-sm font-medium ">Full name</dt>
                                              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">Md. Jahidul Islam</dd>
                                            </div>
                                            <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium ">Address</dt>
                                                <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">Dhaka, Bangladesh</dd>
                                              </div>
                                            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium ">Study</dt>
                                                <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">European University of Bangladesh in CSE</dd>
                                            </div>
                                            <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                              <dt className="text-sm font-medium ">Email address</dt>
                                              <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">jahidj2255@gmail.com</dd>
                                            </div>
                                            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                              <dt className="text-sm font-medium ">Phone</dt>
                                              <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">01303744200</dd>
                                            </div>
                                          </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mySkills-section mt-16  py-10">
                    <div className="flex flex-row gap-5">
                        <h2 className="text-xl font-bold text-rose-400 ml-10">My Skills & Tools</h2>
                        <div className="right-line h-[2px] w-20 mt-4 bg-gray-400 rounded-lg grow mr-10"></div>
                    </div>
                    <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-10">
                        <div className="webDesign-Section  rounded-lg">
                            <h2 className="text-3xl text-center text-rose-400 font-semibold tracking-wide bg-slate-800 px-10 py-2 rounded-md">Languages</h2>
                            <ul className="text-md text-gray-300 tracking-wider mt-2 font-bold grid grid-cols-3 gap-3 mx-2" >
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> HTML5</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600 text-center"> CSS3</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> javascript</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> nodejs</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center">SQL</li>
                            </ul>
                        </div>
                        <div className="FameWork-Section  rounded-lg">
                            <h2 className="text-3xl text-center text-rose-400 font-semibold tracking-wide bg-slate-800 px-10 py-2 rounded-md">FrameWorks</h2>
                            <ul className="text-lg text-gray-300  mt-2 font-semibold grid grid-cols-3 gap-3 mx-2"  >
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> Bootstrap 5</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> TailwindCss</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> Material ui</li>
                            </ul>
                        </div>
                        <div className="library-Section  rounded-lg">
                            <h2 className="text-3xl text-center text-rose-400 font-semibold tracking-wide bg-slate-800 px-10 py-2 rounded-md">Library</h2>
                            <ul className="text-lg text-gray-300  mt-2 font-semibold grid grid-cols-3 gap-3 mx-2"  >
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> React js</li>
                            </ul>
                        </div>
                        <div className="Database-Section  rounded-lg">
                            <h2 className="text-3xl text-center text-rose-400 font-semibold tracking-wide bg-slate-800 px-10 py-2 rounded-md">Database</h2>
                            <ul className="text-lg text-gray-300  mt-2 font-semibold grid grid-cols-3 gap-3 mx-2"  >
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> MongoDb</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> SQL</li>
                            </ul>
                        </div>
                        <div className="code-Section  rounded-lg">
                            <h2 className="text-3xl text-center text-rose-400 font-semibold tracking-wide bg-slate-800 px-10 py-2 rounded-md">Code Related</h2>
                            <ul className="text-lg text-gray-300  mt-2 font-semibold grid grid-cols-3 gap-3 mx-2"  >
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> VS code</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> Git</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> npm</li>
                            </ul>
                        </div>
                        <div className="design-Section  rounded-lg">
                            <h2 className="text-3xl text-center text-rose-400 font-semibold tracking-wide bg-slate-800 px-10 py-2 rounded-md">Design</h2>
                            <ul className="text-lg text-gray-300  mt-2 font-semibold grid grid-cols-3 gap-3 mx-2"  >
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> Figma</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> Photoshop</li>
                                <li className="rounded ring-2 ring-rose-600 py-1 bg-gray-600  text-center"> illistrator</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;