import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <SectionHeader
                    count={5}
                    subtitle="Get In Touch"
                    title="Contact Me"
                />

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="mono">Let's build something together</h3>
                        <p>
                            I'm currently looking for new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my
                            best to get back to you!
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><Mail size={20} /></div>
                                <div className="method-text">
                                    <span className="mono">Email</span>
                                    <a href="mailto:hello@kobby.dev">hello@kobby.dev</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><Phone size={20} /></div>
                                <div className="method-text">
                                    <span className="mono">Phone</span>
                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><MapPin size={20} /></div>
                                <div className="method-text">
                                    <span className="mono">Location</span>
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name" className="mono">Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="mono">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="mono">Subject</label>
                            <input type="text" id="subject" placeholder="Project Inquiry" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="mono">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                        </div>
                        <Button variant="primary" size="lg" className="submit-btn" type="submit">
                            Send Message <Send size={18} />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
