import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const LandingPage: React.FC = () => {
        return (
                <div className="bg-gray-50">
                        {/* Hero */}
                        <section className="bg-gradient-to-r from-blue-600 to-purple-500 py-16">
                                <div className="max-w-7xl mx-auto px-4">
                                        <div className="flex flex-col md:flex-row md:items-center">
                                                <div className="md:w-1/2 mb-10 md:mb-0">
                                                        <h1 className="text-4xl font-bold text-white mb-4">
                                                                Your Health<span className="text-blue-300">Matters</span>
                                                        </h1>
                                                        <p className="text-white leading-relaxed">
                                                                At HealthPlus, we care about your wellbeing. Our team of professionals are dedicated to
                                                                providing the highest level of care and attention to ensure that you lead a healthy and
                                                                fulfilling life.
                                                        </p>
                                                        <div className="mt-6">
                                                                <button className="bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                                                                        Learn More
                                                                </button>
                                                        </div>
                                                </div>
                                                <div className="md:w-1/2">
                                                        <img src="/assets/images/hero.png" alt="Hero" />
                                                </div>
                                        </div>
                                </div>
                        </section>

                        
                </div>
        );
}
export default LandingPage;



