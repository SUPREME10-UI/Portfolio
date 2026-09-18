import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoUrl = `mailto:ebenezeradjeiadjetey1@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Ebenezer,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <SectionHeader
                    title="Contact Me"
                />

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="mono">Let's build something together</h3>
                        <p>
                            I am currently looking for new opportunities and collaborations.
                            Whether you have an inquiry, project proposal, or just want to say hi,
                            I'd love to connect!
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><Mail size={20} /></div>
                                <div className="method-text">
                                    <span className="mono">Email</span>
                                    <a href="mailto:ebenezeradjeiadjetey1@gmail.com">
                                        ebenezeradjeiadjetey1@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><Phone size={20} /></div>
                                <div className="method-text">
                                    <span className="mono">Phone</span>
                                    <div className="phone-links">
                                        <a href="tel:+233591325347">+233 59 132 5347</a>
                                        <span className="phone-divider">/</span>
                                        <a href="tel:+233204754828">+233 20 475 4828</a>
                                    </div>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><MapPin size={20} /></div>
                                <div className="method-text">
                                    <span className="mono">Location</span>
                                    <span>Accra, Ghana</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submitted && (
                            <div className="contact-success-msg">
                                <CheckCircle2 size={18} />
                                <span>Opening your mail client to send email to Ebenezer...</span>
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="name" className="mono">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="mono">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="your.email@example.com" 
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="mono">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                placeholder="Project Proposal / Inquiry" 
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="mono">Message</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                placeholder="Tell me about your project..." 
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
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
