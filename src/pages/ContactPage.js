import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

const PageHero = () => (
    <section style={{ background: 'linear-gradient(135deg,#0a1628 0%,#003366 100%)', paddingTop: '120px', paddingBottom: '60px' }}>
        <Container className="text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="tat-eyebrow mb-4 d-inline-block">GET IN TOUCH</span>
                <h1 className="display-4 fw-bold text-white mt-3 mb-3">Let's <span style={{ color: '#00aeff' }}>Start a Conversation</span></h1>
                <p className="text-white opacity-75 mx-auto" style={{ maxWidth: '560px', fontSize: '1.1rem' }}>
                    Whether you're looking to partner, request a demo, or upload your first case — we're ready to talk.
                </p>
            </motion.div>
        </Container>
    </section>
);

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const contactDetails = [
        { icon: <Phone size={22} />, label: 'Call Us', value: '9582106859 / 8901222201', color: '#004a99', sub: 'Available 24/7' },
        { icon: <Mail size={22} />, label: 'Email Us', value: 'ultraradx19@gmail.com', color: '#007a4d', sub: 'We respond within 2 hours' },
        { icon: <MapPin size={22} />, label: 'Registered Office', value: 'Greater Noida, India', color: '#c07000', sub: 'India-based, globally serving' },
        { icon: <Clock size={22} />, label: 'Availability', value: '24 hours · 7 days · 365 days', color: '#007bbd', sub: 'No case left unread' },
    ];

    const faqs = [
        { q: 'How quickly can we get onboarded?', a: 'Most institutions are fully onboarded within 48–72 hours. Our team handles PACS/RIS integration, DICOM routing, and report delivery configuration end-to-end.' },
        { q: 'What modalities do you report?', a: 'We report CT, MRI, X-Ray, Ultrasound, and Doppler across all body systems. Subspecialty reads are available for neuro, MSK, body, cardiac, and paediatric imaging.' },
        { q: 'How is patient data protected?', a: 'All imaging data is transmitted via encrypted DICOM channels. We are fully HIPAA-compliant and GDPR-ready. No patient data is ever accessed for purposes outside the reporting workflow.' },
        { q: 'Do you offer a trial or sample report?', a: 'Yes. We can provide sample anonymized reports across multiple modalities on request. Contact us and we will arrange this within 24 hours.' },
        { q: 'What are your pricing models?', a: 'We offer per-study, monthly retainer, and full-service partnership pricing. Contact us with your expected daily volume and we will provide a tailored proposal.' },
    ];

    return (
        <>
            <PageHero />

            {/* Contact Info + Form */}
            <section className="py-5 section-padding bg-white">
                <Container>
                    <Row className="g-5 align-items-start">
                        {/* Left: contact details */}
                        <Col lg={5}>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <span className="credentials-eyebrow mb-4 d-inline-block">CONTACT DETAILS</span>
                                <h2 className="display-6 fw-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
                                    We're <span className="text-gradient">Always Here</span>
                                </h2>
                                <p className="text-muted lh-lg mb-5">
                                    Our team is reachable around the clock for new partnership enquiries, technical onboarding support, and urgent clinical queries.
                                </p>
                                <div className="vstack gap-4">
                                    {contactDetails.map((c, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                            className="d-flex align-items-start gap-3 p-3 rounded-4" style={{ background: '#f8fbff', border: '1px solid rgba(0,74,153,0.07)' }}>
                                            <div style={{ width: 48, height: 48, minWidth: 48, borderRadius: 12, background: `${c.color}15`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {c.icon}
                                            </div>
                                            <div>
                                                <div className="text-uppercase small fw-bold mb-1" style={{ letterSpacing: '1px', color: '#94a3b8' }}>{c.label}</div>
                                                <div className="fw-bold" style={{ color: '#0a1628', fontSize: '1rem' }}>{c.value}</div>
                                                <div className="small" style={{ color: c.color }}>{c.sub}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Trust badges */}
                                <div className="d-flex flex-wrap gap-3 mt-5">
                                    {['HIPAA Compliant', 'GDPR Ready', '24/7 Available', 'SLA Backed'].map((badge, i) => (
                                        <div key={i} className="d-flex align-items-center gap-1 px-3 py-2 rounded-pill" style={{ background: '#e8f4ff', color: '#004a99', fontSize: '0.8rem', fontWeight: 700 }}>
                                            <ShieldCheck size={13} /> {badge}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </Col>

                        {/* Right: form */}
                        <Col lg={{ span: 6, offset: 1 }}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                {submitted ? (
                                    <Card className="border-0 rounded-4 shadow-2xl p-5 bg-white text-center">
                                        <ShieldCheck size={60} className="text-success mx-auto mb-4" />
                                        <h3 className="fw-bold mb-2" style={{ color: '#0a1628' }}>Message Sent!</h3>
                                        <p className="text-muted">Thank you for reaching out. Our team will respond within 2 hours.</p>
                                    </Card>
                                ) : (
                                    <Card className="border-0 rounded-4 shadow-2xl p-4 p-md-5 bg-white">
                                        <h4 className="fw-bold mb-4" style={{ color: '#0a1628' }}>Send us a Message</h4>
                                        <Form className="row g-4" onSubmit={handleSubmit}>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="form-label-caps">First Name</Form.Label>
                                                    <Form.Control type="text" className="premium-input shadow-none" placeholder="Jane" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="form-label-caps">Last Name</Form.Label>
                                                    <Form.Control type="text" className="premium-input shadow-none" placeholder="Doe" required />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group>
                                                    <Form.Label className="form-label-caps">Email Address</Form.Label>
                                                    <Form.Control type="email" className="premium-input shadow-none" placeholder="jane@hospital.com" required />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group>
                                                    <Form.Label className="form-label-caps">Institution / Organisation</Form.Label>
                                                    <Form.Control type="text" className="premium-input shadow-none" placeholder="City General Hospital" />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group>
                                                    <Form.Label className="form-label-caps">Enquiry Type</Form.Label>
                                                    <Form.Select className="premium-input shadow-none">
                                                        <option>New Partnership</option>
                                                        <option>Request a Demo</option>
                                                        <option>Upload a Case</option>
                                                        <option>Sample Report Request</option>
                                                        <option>Technical Onboarding</option>
                                                        <option>Other</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group>
                                                    <Form.Label className="form-label-caps">Message</Form.Label>
                                                    <Form.Control as="textarea" rows={4} className="premium-input shadow-none" placeholder="Tell us about your institution's radiology needs..." required />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} className="pt-2">
                                                <button type="submit" className="btn-premium w-100 py-3 border-0 d-flex align-items-center justify-content-center gap-2 fw-bold" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>
                                                    Send Message <ChevronRight size={18} />
                                                </button>
                                            </Col>
                                        </Form>
                                    </Card>
                                )}
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 section-padding" style={{ background: '#f4f9fd' }}>
                <Container>
                    <div className="text-center mb-5">
                        <span className="credentials-eyebrow">FREQUENTLY ASKED</span>
                        <h2 className="display-5 fw-bold mt-3" style={{ color: '#0a1628' }}>Common <span className="text-gradient">Questions</span></h2>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            {faqs.map((faq, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="mb-3 p-4 rounded-4 bg-white" style={{ border: '1px solid rgba(0,74,153,0.07)', boxShadow: '0 2px 12px rgba(0,74,153,0.04)' }}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div style={{ width: 32, height: 32, minWidth: 32, borderRadius: 8, background: '#e8f4ff', color: '#004a99', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800 }}>
                                            Q{i + 1}
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-2" style={{ color: '#0a1628' }}>{faq.q}</h6>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{faq.a}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Bottom CTA strip */}
            <section className="py-4" style={{ background: 'linear-gradient(135deg,#004a99,#0077cc)' }}>
                <Container>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
                        <div>
                            <div className="fw-bold text-white fs-5">Ready to upload your first case?</div>
                            <div className="text-white opacity-75 small">We onboard new partners within 48–72 hours.</div>
                        </div>
                        <div className="d-flex gap-3 flex-wrap justify-content-center">
                            <a href="tel:9582106859" className="btn-premium py-2 px-4 border-0 d-inline-flex align-items-center gap-2" style={{ fontSize: '0.9rem' }}>
                                <Phone size={15} /> Call Now
                            </a>
                            <a href="mailto:ultraradx19@gmail.com" className="btn-outline-hero py-2 px-4 d-inline-flex align-items-center gap-2" style={{ borderColor: '#fff', color: '#fff', fontSize: '0.9rem' }}>
                                <Mail size={15} /> Email Us
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
