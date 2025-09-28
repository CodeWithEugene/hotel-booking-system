
import React from 'react';

const ContactPageView: React.FC = () => {
    return (
        <div className="bg-zenith-cream py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-zenith-dark mb-4">Contact Us</h1>
                    <p className="text-lg text-zenith-light-dark max-w-2xl mx-auto">
                        We would love to hear from you. Whether you have a question about our services or need assistance with your booking, feel free to get in touch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-serif text-zenith-dark mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-zenith-light-dark mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-zenith-light-dark mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-zenith-light-dark mb-2">Subject</label>
                                <input type="text" name="subject" id="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent" placeholder="Reservation Inquiry" />
                            </div>
                            <div>
                                 <label htmlFor="message" className="block text-sm font-bold text-zenith-light-dark mb-2">Message</label>
                                 <textarea name="message" id="message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent" placeholder="Your question or comment..."></textarea>
                            </div>
                             <div className="text-left">
                                <button type="submit" className="bg-zenith-gold text-white font-bold p-3 rounded-lg w-full md:w-auto px-10 hover:bg-zenith-gold-dark transition-colors shadow-md transform hover:scale-105">Send Message</button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Details & Map */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-serif text-zenith-dark mb-4">Our Address</h3>
                            <p className="text-zenith-light-dark mb-2">123 Luxury Lane, Metropolis, 10101</p>
                            <p className="text-zenith-light-dark mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p className="text-zenith-light-dark"><strong>Email:</strong> contact@zenithhotel.com</p>
                        </div>
                         <div className="rounded-xl shadow-lg overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.219524032128!2d-73.987853684593!3d40.757974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6452691%3A0x1d365f5a5448358!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678886553974!5m2!1sen!2sus" 
                                width="100%" 
                                height="250" 
                                style={{ border: 0 }}
                                className="filter grayscale(1) contrast(1.2) opacity-90"
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hotel Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageView;