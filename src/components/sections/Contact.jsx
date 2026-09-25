import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './Contact.css';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a FREE account
// 2. Add an Email Service (Gmail recommended) → copy the Service ID below
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_name}}
//    Copy the Template ID below
// 4. Go to Account → API Keys and copy your Public Key below
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';
const WEB3FORMS_KEY       = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');
    const [sentMethod, setSentMethod] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isEmailJsConfigured = 
        EMAILJS_SERVICE_ID && 
        EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
        EMAILJS_TEMPLATE_ID && 
        EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
        EMAILJS_PUBLIC_KEY && 
        EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    const isWeb3FormsConfigured = 
        WEB3FORMS_KEY && 
        WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const targetEmail = 'ebenezeradjeiadjetey1@gmail.com';
        const formattedSubject = formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`;
        const formattedBody = `From: ${formData.name.trim()} (${formData.email.trim()})\n\nMessage:\n${formData.message.trim()}`;

        // 1. Send via EmailJS if configured
        if (isEmailJsConfigured) {
            try {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name.trim(),
                        name: formData.name.trim(),
                        from_email: formData.email.trim(),
                        email: formData.email.trim(),
                        reply_to: formData.email.trim(),
                        subject: formattedSubject,
                        title: formattedSubject,
                        time: new Date().toLocaleString(),
                        message: formData.message.trim(),
                        to_name: 'Ebenezer'
                    },
                    EMAILJS_PUBLIC_KEY
                );
                setStatus('success');
                setSentMethod('direct');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 7000);
                return;
            } catch (err) {
                console.error('EmailJS error:', err);
                // Fall through to other delivery methods
            }
        }

        // 2. Send via Web3Forms if configured
        if (isWeb3FormsConfigured) {
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_KEY,
                        name: formData.name.trim(),
                        email: formData.email.trim(),
                        subject: formattedSubject,
                        message: formData.message.trim(),
                        from_name: formData.name.trim(),
                        replyto: formData.email.trim(),
                    })
                });
                const result = await response.json();
                if (result.success) {
                    setStatus('success');
                    setSentMethod('direct');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setTimeout(() => setStatus('idle'), 7000);
                    return;
                }
            } catch (err) {
                console.error('Web3Forms error:', err);
            }
        }

        // 3. Fallback: Open Gmail Web Composer & mailto so it sends 100% of the time
        try {
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;
            const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;
            
            const newWindow = window.open(gmailUrl, '_blank');
            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                window.location.href = mailtoUrl;
            }

            setStatus('success');
            setSentMethod('client');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 7000);
        } catch (err) {
            console.error('Submission error:', err);
            setErrorMsg('Unable to open mail service. Please send an email directly to ebenezeradjeiadjetey1@gmail.com');
            setStatus('error');
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <SectionHeader title="Contact Me" />

                <div className="contact-grid">
                    {/* ── Left: Info ── */}
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

                    {/* ── Right: Form ── */}
                    <form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        {/* Status banners */}
                        {status === 'success' && (
                            <div className="contact-success-msg">
                                <CheckCircle2 size={18} />
                                <span>
                                    {sentMethod === 'direct'
                                        ? "Message sent directly to Ebenezer! I'll get back to you soon 🎉"
                                        : "Message prepared! Please hit send in your email window to deliver to Ebenezer 🎉"}
                                </span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="contact-error-msg">
                                <AlertCircle size={18} />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name" className="mono">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="mono">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject" className="mono">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Proposal / Inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="mono">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        {/* Hidden field for template recipient name */}
                        <input type="hidden" name="to_name" value="Ebenezer" />

                        <Button
                            variant="primary"
                            size="lg"
                            className="submit-btn"
                            type="submit"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={18} className="spin-icon" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
