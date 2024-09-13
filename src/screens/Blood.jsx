import React from "react";
import { useNavigate } from "react-router-dom";

function Blood() {

    const Navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-red-700 text-white">
                <div className="container mx-auto px-4 py-6 flex justify-between item-center">
                    <h1 className="text-3xl font-bold">BloodDonation</h1>
                    <nav>
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <a href="#about" className="hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#benefits" className="hover:underline">Why Donate?</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">Contact</a>
                            </li>
                            <button onClick={() => Navigate("/form") } className="bg-white text-red-600 px-6 py-3 font-bold rounded-full hover:bg-gray-100">
                            Donate Now
                        </button>
                            <button onClick={() => Navigate("/login") } className="bg-white text-red-600 px-6 py-3 font-bold rounded-full hover:bg-gray-100">
                            Logout
                        </button>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-red-500 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Save Lives. Donate Blood.</h2>
                    <p className="text-lg mb-8">One pint of blood can save up to three lives. Become a hero today by donating blood!</p>
                    <img className="mx-80" src="https://media4.giphy.com/media/QxLZGRUSYdcUnMUzLQ/giphy.gif?cid=6c09b952uv6hwhtnu328a3n6whlc694qlln1g4k3216155i9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" srcset="" />
                    <button onClick={() => Navigate("/form") } className="bg-white text-red-600 px-6 py-3 font-bold rounded-full hover:bg-gray-100">
                        Donate Now
                    </button>
                </div>
            </section>

            {/* Info Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center mb-8">Why Blood Donation Matters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-md">
                            <h4 className="text-xl font-bold mb-2">Every Drop Counts</h4>
                            <p>Your donation can help save someone in need, from accident victims to cancer patients.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-md">
                            <h4 className="text-xl font-bold mb-2">Quick and Safe</h4>
                            <p>The process is quick, easy, and completely safe. You can donate blood every 56 days.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-md">
                            <h4 className="text-xl font-bold mb-2">Be a Hero</h4>
                            <p>Donating blood makes you a hero. Help someone in need and make a big difference.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gray-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
                    <p className="mb-4">For more information or to schedule an appointment:</p>
                    <a
                        href="mailto:donate@blooddonation.org"
                        className="bg-red-600 text-white px-6 py-3 font-bold rounded-full hover:bg-red-500"
                    >
                        donate@blooddonation.org
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-red-600 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 BloodDonation. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Blood;
