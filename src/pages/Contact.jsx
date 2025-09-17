import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';


const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-4" data-aos="fade-down">Contact Me</h2>
                <p className="text-center text-muted mb-5" data-aos="fade-up">
                    I'd love to hear from you! Fill out the form below and I'll get back to you soon.
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form
                            action="https://formspree.io/f/your-form-id" // Replace with your Formspree or Netlify form endpoint
                            method="POST"
                            data-aos="fade-up"
                        >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                <input type="email" className="form-control" id="email" name="_replyto" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                <textarea className="form-control" id="message" rows="5" name="message" required></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-4">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
