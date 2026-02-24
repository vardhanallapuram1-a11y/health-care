import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Activity, Award, Globe, ChevronRight } from 'lucide-react';

const PageHero = ({ eyebrow, title, highlight, sub }) => (
    <section style={{ background: 'linear-gradient(135deg,#0a1628 0%,#003366 100%)', paddingTop: '120px', paddingBottom: '60px' }}>
        <Container className="text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="tat-eyebrow mb-4 d-inline-block">{eyebrow}</span>
                <h1 className="display-4 fw-bold text-white mt-3 mb-3">{title} <span style={{ color: '#00aeff' }}>{highlight}</span></h1>
                <p className="text-white opacity-75 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>{sub}</p>
            </motion.div>
        </Container>
    </section>
);

const whyItems = [
    {
        icon: <Award size={28} />, color: '#004a99', bg: 'linear-gradient(135deg,#e8f4ff,#d0eaff)',
        title: 'Fellowship-Trained Subspecialists',
        desc: 'Our radiologists hold MD, DNB, and fellowship qualifications with deep subspecialty expertise. You get the same level of interpretation you would from a senior consultant — remotely, reliably.',
        points: ['MD Radiodiagnosis & DNB Certified', 'Fellowship in neuro, body & MSK', 'Ongoing CME and subspecialty training', 'Peer-reviewed reporting process'],
    },
    {
        icon: <ShieldCheck size={28} />, color: '#007a4d', bg: 'linear-gradient(135deg,#d4f1e8,#b8ead8)',
        title: 'Guaranteed Turnaround Times',
        desc: 'TAT commitments are not aspirational — they are SLA-backed. Emergency reads in 20–30 minutes. Urgent in 1–2 hours. Routine in 6–12 hours. Every time.',
        points: ['Emergency STAT: 20–30 minutes', 'Urgent cases: 1–2 hours', 'Routine studies: 6–12 hours', '24/7 radiologist availability'],
    },
    {
        icon: <Activity size={28} />, color: '#c07000', bg: 'linear-gradient(135deg,#fff0d0,#ffe4a0)',
        title: 'Quality-First Reporting',
        desc: 'We do not sacrifice accuracy for speed. Every report is structured, peer-reviewed, and tracked through our discrepancy management system — giving you a measurable quality guarantee.',
        points: ['Structured, clinician-friendly reports', 'Random peer-review audits', 'Discrepancy tracking & feedback', 'Monthly QA reports to institutions'],
    },
    {
        icon: <Globe size={28} />, color: '#007bbd', bg: 'linear-gradient(135deg,#d0f0ff,#b5e8f8)',
        title: 'HIPAA & GDPR Compliant Infrastructure',
        desc: 'We take patient data security with absolute seriousness. All image data is transmitted via secure DICOM channels, stored with end-to-end encryption, and handled in full compliance with HIPAA and GDPR.',
        points: ['HIPAA-compliant data handling', 'GDPR-ready for international clients', 'End-to-end encrypted DICOM transfer', 'No unauthorized data sharing'],
    },
    {
        icon: <ShieldCheck size={28} />, color: '#6d28d9', bg: 'linear-gradient(135deg,#ede9ff,#ddd5ff)',
        title: 'Seamless Integration with Your Workflow',
        desc: 'We work within your existing RIS/PACS infrastructure. Our onboarding team ensures fast technical integration, minimal disruption, and zero learning curve for your staff.',
        points: ['Compatible with major RIS/PACS systems', 'HL7 & DICOM connectivity', 'Dedicated onboarding support', 'Reports delivered in your preferred format'],
    },
    {
        icon: <Activity size={28} />, color: '#04786e', bg: 'linear-gradient(135deg,#ccfbf1,#99f6e4)',
        title: 'Scalable for Any Volume',
        desc: 'Whether you send 5 studies a day or 500, our workflow scales with your demand. We handle overflow reporting, nighthawk coverage, and full-service partnerships.',
        points: ['Scales from 5 to 500+ studies/day', 'Overflow & nighthawk coverage', 'Flexible engagement models', 'Dedicated radiologist pools available'],
    },
];

export default function WhyUsPage() {
    const navigate = useNavigate();

    return (
        <>
            <PageHero
                eyebrow="WHY CHOOSE ULTRARADX"
                title="The Teleradiology Partner"
                highlight="You Actually Trust."
                sub="Speed, accuracy, and subspecialty expertise — with zero compromise. Here's what makes UltraRadX the preferred partner for hospitals and imaging centres."
            />

            {/* Why Us Grid */}
            <section className="py-5 section-padding bg-white">
                <Container>
                    <Row className="g-4">
                        {whyItems.map((w, i) => (
                            <Col lg={6} key={i}>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.15 }} whileHover={{ y: -6 }}
                                    className="h-100 p-4 rounded-4 border" style={{ borderColor: 'rgba(0,74,153,0.08)', background: '#fff', boxShadow: '0 4px 20px rgba(0,74,153,0.05)' }}>
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div style={{ width: 56, height: 56, minWidth: 56, borderRadius: 14, background: w.bg, color: w.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {w.icon}
                                        </div>
                                        <h4 className="fw-bold mb-0 pt-1" style={{ color: '#0a1628', fontSize: '1.1rem' }}>{w.title}</h4>
                                    </div>
                                    <p className="text-muted mb-3" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{w.desc}</p>
                                    <ul className="list-unstyled mb-0">
                                        {w.points.map((p, j) => (
                                            <li key={j} className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '0.87rem', color: '#475569' }}>
                                                <ChevronRight size={14} style={{ color: w.color, flexShrink: 0 }} /> {p}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Image Mosaic */}
            <section className="py-5 section-padding" style={{ background: '#f4f9fd' }}>
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <div className="why-img-mosaic">
                                <div className="why-img-row-top">
                                    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="why-img-cell why-img-cell-lg">
                                        <img src="images/Mri.jpg" alt="Modern MRI machine in clinical facility" className="why-img" />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="why-img-cell why-img-cell-sm">
                                        <img src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=85&w=400" alt="Radiologist reviewing imaging at workstation" className="why-img" />
                                    </motion.div>
                                </div>
                                <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.25 }} className="why-img-cell why-img-cell-wide">
                                    <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=85&w=800" alt="Modern radiology department panoramic view" className="why-img" />
                                </motion.div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <span className="credentials-eyebrow mb-4 d-inline-block">OUR TECHNOLOGY</span>
                                <h2 className="display-5 fw-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
                                    Built for the <span className="text-gradient">Future of Radiology</span>
                                </h2>
                                <p className="text-muted lh-lg mb-4">
                                    Our digital infrastructure is purpose-built for teleradiology at scale. Secure DICOM transmission, AI-assisted triage, and cloud-based report delivery ensure that every study is handled efficiently and safely.
                                </p>
                                {[
                                    'Secure DICOM & HL7 connectivity',
                                    'AI-assisted abnormality flagging',
                                    'Cloud-based PACS with global access',
                                    'Encrypted report delivery (PDF/HL7)',
                                    'Real-time worklist management',
                                    'Detailed audit trail for every report',
                                ].map((point, i) => (
                                    <div key={i} className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: '0.93rem', color: '#334155' }}>
                                        <ShieldCheck size={16} className="text-success flex-shrink-0" /> {point}
                                    </div>
                                ))}
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-5 section-padding text-center" style={{ background: 'linear-gradient(135deg,#004a99,#0077cc)' }}>
                <Container>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="display-6 fw-bold text-white mb-3">See the UltraRadX Difference</h2>
                        <p className="text-white opacity-75 mb-4 mx-auto" style={{ maxWidth: '500px' }}>
                            Request a sample anonymized report or speak with our team to start your partnership today.
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <button onClick={() => navigate('/contact')} className="btn-premium py-3 px-5 border-0 d-inline-flex align-items-center gap-2">
                                Get in Touch <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
}
