import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import workPhoto from '../images/contractme pic.jpg'

const MyWorks = () => {
    return (
            <div>
                <div className="myWork-section bg-gray-900 mt-0.5">
                <div className="myWorkSection-header pt-5 pb-10 flex flex-row items-center justify-center space-x-2">
                    <div className="left-line h-[2px] w-20  bg-rose-600 rounded-lg"></div>
                    <div className="text-xl text-rose-400 block font-semibold">My works</div>
                    <div className="right-line h-[2px] w-20  bg-rose-600 rounded-lg"></div>
                </div>
                <div className="myWorkSection-content pb-10">
                    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                        <div className="myWorkCart rounded-md bg-gray-800 shadow-xl border-2 border-gray-700 shadow-gray-700 p-3 hover:scale-105 hover:bg-gray-900 duration-700">
                            <div className="cart-image bg-cover rounded-lg p-1 hover:bg-content">
                                <img className="rounded-md" src={workPhoto} alt="" />
                            </div>
                            <div className="cartDetails  pt-5 pb-1 px-2 flex flex-row justify-between ">
                                <h2 className="text-xl text-rose-400 font-bold">Portfolio Website</h2>
                                <button className="bg-rose-400 w-40 lg:w-32 lg:h-10 rounded text-white hover:bg-rose-500 shadow-md shadow-rose-500">Visit Now <i className="pl-2 fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="myWorkCart rounded-md bg-gray-800 shadow-2xl border-2 border-gray-700 shadow-gray-600 p-3 hover:scale-105 hover:bg-gray-900 duration-700">
                            <div className="cart-image bg-cover rounded-lg p-1 hover:bg-content"><img className="rounded-md" src={workPhoto} alt=""/></div>
                            <div className="cartDetails  pt-5 pb-1 px-2 flex flex-row justify-between ">
                                <h2 className="text-xl text-rose-400 font-bold">Portfolio Website</h2>
                                <button className="bg-rose-400 w-40 lg:w-32 lg:h-10  rounded text-white hover:bg-rose-500 shadow-md shadow-rose-500">Visit Now <i className="pl-2 fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="myWorkCart rounded-md bg-gray-800 shadow-2xl border-2 border-gray-700 shadow-gray-600 p-3 hover:scale-105 hover:bg-gray-900 duration-700">
                            <div className="cart-image bg-cover rounded-lg p-1 hover:bg-content"><img className="rounded-md" src={workPhoto} alt=""/></div>
                            <div className="cartDetails  pt-5 pb-1 px-2 flex flex-row justify-between ">
                                <h2 className="text-xl text-rose-400 font-bold">Portfolio Website</h2>
                                <button className="bg-rose-400 w-40 lg:w-32 lg:h-10 rounded text-white hover:bg-rose-500 shadow-md shadow-rose-500">Visit Now <i className="pl-2 fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="myWorkCart rounded-md bg-gray-800 shadow-2xl border-2 border-gray-700 shadow-gray-600 p-3 hover:scale-105 hover:bg-gray-900 duration-700">
                            <div className="cart-image bg-cover rounded-lg p-1 hover:bg-content"><img className="rounded-md" src={workPhoto} alt=""/></div>
                            <div className="cartDetails  pt-5 pb-1 px-2 flex flex-row justify-between ">
                                <h2 className="text-xl text-rose-400 font-bold">Portfolio Website</h2>
                                <button className="bg-rose-400 w-40 lg:w-32 lg:h-10 rounded text-white hover:bg-rose-500 shadow-md shadow-rose-500">Visit Now <i className="pl-2 fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="myWorkCart rounded-md bg-gray-800 shadow-2xl border-2 border-gray-700 shadow-gray-600 p-3 hover:scale-105 hover:bg-gray-900 duration-700">
                            <div className="cart-image bg-cover rounded-lg p-1 hover:bg-content"><img className="rounded-md" src={workPhoto}alt=""/></div>
                            <div className="cartDetails  pt-5 pb-1 px-2 flex flex-row justify-between ">
                                <h2 className="text-xl text-rose-400 font-bold">Portfolio Website</h2>
                                <button className="bg-rose-400 w-40 lg:w-32 lg:h-10 rounded text-white hover:bg-rose-500 shadow-md shadow-rose-500">Visit Now <i className="pl-2 fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="myWorkCart rounded-md bg-gray-800 shadow-2xl border-2 border-gray-700 shadow-gray-600 p-3 hover:scale-105 hover:bg-gray-900 duration-700">
                            <div className="cart-image bg-cover rounded-lg p-1 hover:bg-content"><img className="rounded-md" src={workPhoto}alt=""/></div>
                            <div className="cartDetails  pt-5 pb-1 px-2 flex flex-row justify-between ">
                                <h2 className="text-xl text-rose-400 font-bold">Portfolio Website</h2>
                                <button className="bg-rose-400 w-40 lg:w-32 lg:h-10 rounded text-white hover:bg-rose-500 shadow-md shadow-rose-500">Visit Now <i className="pl-2 fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default MyWorks;