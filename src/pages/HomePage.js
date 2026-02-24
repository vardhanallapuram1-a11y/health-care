import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Phone, FileText, ChevronRight, Award, ShieldCheck,
    Activity, GraduationCap, Timer, BadgeCheck, Clock
} from 'lucide-react';

export default function HomePage() {
    const navigate = useNavigate();

    const stats = [
        { value: '15+', label: 'Years Combined Experience' },
        { value: '30 min', label: 'Emergency TAT' },
        { value: '24/7', label: 'Radiologist Coverage' },
        { value: 'HIPAA', label: 'Compliant & GDPR-Ready' },
    ];

    const trustItems = [
        { icon: <GraduationCap size={22} />, label: 'Qualifications', value: 'MD · DNB · Fellowship Trained' },
        { icon: <Award size={22} />, label: 'Combined Experience', value: '15+ Years in Radiology' },
        { icon: <Timer size={22} />, label: 'Emergency TAT', value: 'Reports within 30 Minutes' },
        { icon: <BadgeCheck size={22} />, label: 'Compliance', value: 'HIPAA-Compliant · GDPR-Ready' },
    ];

    return (
        <>
            {/* Hero */}
            <section id="home" className="hero-section bg-pearl section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0 mobile-text-center text-lg-start">
                            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <div className="hero-eyebrow mb-3">
                                    <ShieldCheck size={14} className="me-2" /> HIPAA-Compliant · GDPR-Ready Teleradiology
                                </div>
                                <h1 className="hero-headline mb-4">
                                    Subspecialty Radiology <span className="text-gradient">Reporting</span> — Wherever You Are
                                </h1>
                                <p className="hero-sub mb-4">
                                    Expert teleradiology services backed by fellowship-trained radiologists, 15+ years of combined experience, and guaranteed turnaround times from 30 minutes. Day or night, we read your scans.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                                    <motion.button
                                        onClick={() => navigate('/contact')}
                                        className="btn-premium py-3 px-5 shadow-lg border-0 d-inline-flex align-items-center gap-2"
                                        whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                                    >
                                        <Phone size={17} /> Request a Demo
                                    </motion.button>
                                    <motion.button
                                        onClick={() => navigate('/contact')}
                                        className="btn-outline-hero py-3 px-5 d-inline-flex align-items-center gap-2"
                                        whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                                    >
                                        <FileText size={17} /> Upload a Case
                                    </motion.button>
                                </div>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <button onClick={() => navigate('/contact')} className="hero-sample-link d-inline-flex align-items-center gap-2">
                                        <FileText size={15} /> View Sample Anonymized Report <ChevronRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
                                className="hero-img-wrap position-relative">
                                <img src="images/Mri.jpg" alt="Modern MRI scanner" className="img-fluid rounded-4 shadow-2xl w-100" style={{ objectFit: 'cover', maxHeight: '460px' }} />
                                <div className="hero-badge-float">
                                    <ShieldCheck size={18} className="me-2 text-success" />
                                    <span className="fw-bold small">HIPAA Verified</span>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Trust Strip */}
            <section className="trust-strip-section">
                <div className="container">
                    <div className="trust-strip-inner">
                        {trustItems.map((item, i) => (
                            <motion.div key={i} className="trust-strip-item" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                                <div className="trust-strip-icon">{item.icon}</div>
                                <div>
                                    <div className="trust-strip-label">{item.label}</div>
                                    <div className="trust-strip-value">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-5 section-padding" style={{ background: 'linear-gradient(135deg,#0a1628,#003366)' }}>
                <Container>
                    <Row className="g-4 text-center">
                        {stats.map((s, i) => (
                            <Col md={3} key={i}>
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#00aeff', fontFamily: 'Outfit,sans-serif' }}>{s.value}</div>
                                    <div className="text-white opacity-75 mt-1 small fw-semibold text-uppercase" style={{ letterSpacing: '1px' }}>{s.label}</div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Services Teaser */}
            <section className="py-5 section-padding bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <span className="credentials-eyebrow">WHAT WE OFFER</span>
                        <h2 className="display-5 fw-bold mt-3" style={{ color: '#0a1628' }}>
                            Our Core <span className="text-gradient">Services</span>
                        </h2>
                        <p className="text-muted mx-auto mt-3" style={{ maxWidth: '560px' }}>
                            From routine reporting to emergency STAT reads, we offer a full spectrum of teleradiology services.
                        </p>
                    </div>
                    <Row className="g-4 mb-5">
                        {[
                            { icon: <Activity size={28} />, title: 'CT Scan Reporting', desc: 'Fast, accurate body & neuro CT reads across all urgency levels.' },
                            { icon: <Clock size={28} />, title: 'MRI Interpretation', desc: 'Subspecialty MRI reporting — brain, spine, MSK, abdomen and more.' },
                            { icon: <ShieldCheck size={28} />, title: 'Emergency STAT', desc: 'Critical reads in under 30 minutes with direct radiologist contact.' },
                            { icon: <Award size={28} />, title: 'Quality Assurance', desc: 'Peer-reviewed reports with structured discrepancy tracking.' },
                        ].map((s, i) => (
                            <Col md={6} lg={3} key={i}>
                                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    whileHover={{ y: -6 }} className="institution-card h-100">
                                    <div className="institution-icon">{s.icon}</div>
                                    <h5 className="institution-title">{s.title}</h5>
                                    <p className="institution-desc">{s.desc}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center">
                        <button onClick={() => navigate('/services')} className="btn-premium py-3 px-5 border-0 d-inline-flex align-items-center gap-2">
                            View All Services <ChevronRight size={16} />
                        </button>
                    </div>
                </Container>
            </section>

            {/* CTA Banner */}
            <section className="py-5 section-padding text-center" style={{ background: 'linear-gradient(135deg,#004a99,#0077cc)' }}>
                <Container>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="display-6 fw-bold text-white mb-3">Ready to Partner with UltraRadX?</h2>
                        <p className="text-white opacity-75 mb-4 mx-auto" style={{ maxWidth: '520px' }}>
                            Join hospitals and imaging centers across the region who trust us for fast, accurate teleradiology.
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <button onClick={() => navigate('/contact')} className="btn-premium py-3 px-5 border-0 d-inline-flex align-items-center gap-2">
                                Get Started <ChevronRight size={16} />
                            </button>
                            <button onClick={() => navigate('/about')} className="btn-outline-hero py-3 px-5 d-inline-flex align-items-center gap-2" style={{ borderColor: '#fff', color: '#fff' }}>
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
}
