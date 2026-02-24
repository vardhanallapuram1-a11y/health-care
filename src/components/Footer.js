import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Activity, ShieldCheck, Globe, Award, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="footer-premium py-5 bg-white border-top border-light overflow-hidden position-relative">
            <Container className="position-relative" style={{ zIndex: 1 }}>
                <Row className="g-5 justify-content-between mb-5">
                    <Col lg={4} className="mobile-text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <Logo className="h-12" variant="logo1" />
                            <p className="text-muted fs-6 lh-lg pe-lg-4">
                                Commitment to delivering accurate, timely, and technology-enabled imaging interpretations globally. UltraRadX Healthcare is your dependable partner for the future of radiology.
                            </p>
                        </motion.div>
                    </Col>
                    <Col lg={7}>
                        <Row className="g-4">
                            <Col md={4} className="mobile-text-center">
                                <h6 className="footer-heading mb-4 text-white">Company</h6>
                                <Nav className="flex-column gap-3">
                                    <Nav.Link as={NavLink} to="/about" className="footer-link p-0">About Us</Nav.Link>
                                    <Nav.Link as={NavLink} to="/services" className="footer-link p-0">Services</Nav.Link>
                                    <Nav.Link as={NavLink} to="/why-us" className="footer-link p-0">Why Choose Us</Nav.Link>
                                    <Nav.Link as={NavLink} to="/institutions" className="footer-link p-0">Institutions</Nav.Link>
                                    <Nav.Link as={NavLink} to="/contact" className="footer-link p-0">Contact</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={4} className="mobile-text-center">
                                <h6 className="footer-heading mb-4 text-white">Services</h6>
                                <Nav className="flex-column gap-3">
                                    <Nav.Link as={NavLink} to="/services" className="footer-link p-0 d-flex align-items-center gap-2">
                                        <Activity size={14} className="text-primary-light" /> Teleradiology
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/services" className="footer-link p-0 d-flex align-items-center gap-2">
                                        <ShieldCheck size={14} className="text-primary-light" /> Emergency Support
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/services" className="footer-link p-0 d-flex align-items-center gap-2">
                                        <Globe size={14} className="text-primary-light" /> Specialist Consultation
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/services" className="footer-link p-0 d-flex align-items-center gap-2">
                                        <Award size={14} className="text-primary-light" /> Quality Assurance
                                    </Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={4} className="mobile-text-center">
                                <h6 className="footer-heading mb-4 text-white">Follow Us</h6>
                                <p className="small text-muted mb-4 d-none d-lg-block">Connect with us for the latest updates.</p>
                                <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                                    <a href="#" className="footer-social-icon facebook" title="Facebook"><Facebook size={20} /></a>
                                    <a href="#" className="footer-social-icon x-social" title="X (Twitter)">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="footer-social-icon linkedin" title="LinkedIn"><Linkedin size={20} /></a>
                                    <a href="#" className="footer-social-icon instagram" title="Instagram"><Instagram size={20} /></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="pt-5 border-top border-light d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small text-white opacity-75 mb-0 order-2 order-md-1">
                        © 2026 <span className="fw-bold text-white">UltraRadX Healthcare</span>. All rights reserved.
                    </p>
                    <div className="d-flex gap-4 order-1 order-md-2">
                        <a href="#" className="small text-muted text-decoration-none transition">Privacy Policy</a>
                        <a href="#" className="small text-muted text-decoration-none transition">Terms of Service</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
