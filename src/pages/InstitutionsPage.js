import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldCheck, Globe, Award, Clock, GraduationCap, ChevronRight } from 'lucide-react';

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

const institutions = [
    {
        icon: <Activity size={28} />, color: '#004a99', bg: 'linear-gradient(135deg,#e8f4ff,#d0eaff)',
        name: 'Multi-Specialty Hospitals',
        tagline: 'Backbone Teleradiology Partner',
        desc: 'Large hospital networks often generate high volumes of imaging studies requiring subspecialty interpretation. We provide the consistent, 24/7 reporting backbone that busy multi-specialty hospitals rely on.',
        offerings: ['Routine & emergency STAT coverage', '24/7 radiologist availability', 'Dedicated reporting queues per hospital', 'Monthly performance & QA reports'],
    },
    {
        icon: <Globe size={28} />, color: '#007a4d', bg: 'linear-gradient(135deg,#d4f1e8,#b8ead8)',
        name: 'Diagnostic & Imaging Centers',
        tagline: 'Scalable Reporting. Consistent Quality.',
        desc: 'Standalone and chain imaging centres need reliable reporting without the overhead of in-house radiologists. We offer scalable, cost-effective solutions that grow with your volume.',
        offerings: ['Scalable to any daily volume', 'Subspecialty reads across all modalities', 'PACS/RIS integration support', 'Structured reports in preferred format'],
    },
    {
        icon: <Clock size={28} />, color: '#b91c1c', bg: 'linear-gradient(135deg,#ffe4e4,#ffd0d0)',
        name: 'Emergency & Trauma Care Units',
        tagline: 'Critical Read. Under 30 Minutes.',
        desc: 'Emergency departments and trauma centres cannot wait. Our STAT reporting pipeline is purpose-built for the most critical clinical scenarios — with immediate radiologist assignment and direct communication.',
        offerings: ['Stroke alert CT/MRI protocol reads', 'Trauma polytrauma imaging', 'ICU critical chest & abdomen STAT', 'Direct radiologist hotline available'],
    },
    {
        icon: <ShieldCheck size={28} />, color: '#007bbd', bg: 'linear-gradient(135deg,#d0f0ff,#b5e8f8)',
        name: 'Telemedicine & Virtual Care Providers',
        tagline: 'Remote-First. Digitally Seamless.',
        desc: 'Telemedicine platforms and virtual care providers operate entirely in the digital domain. Our cloud-based reporting integrates natively with virtual health workflows, delivering reports where and when they are needed.',
        offerings: ['API-based report delivery', 'Cloud-native DICOM integration', 'Patient data fully de-identified', 'HIPAA & GDPR compliance guaranteed'],
    },
    {
        icon: <Award size={28} />, color: '#c07000', bg: 'linear-gradient(135deg,#fff0d0,#ffe4a0)',
        name: 'Specialty & Super-Specialty Clinics',
        tagline: 'Subspecialty Expertise. When It Matters.',
        desc: 'Neurology, oncology, orthopaedic, and cardiac clinics require subspecialty-level radiology reads — not just general reports. Our fellowship-trained radiologists bring the depth these clinics demand.',
        offerings: ['Neuro MRI for neurology clinics', 'Oncology imaging with structured follow-up', 'MSK reporting for orthopaedic centres', 'Cardiac CT & MRI support'],
    },
    {
        icon: <GraduationCap size={28} />, color: '#6d28d9', bg: 'linear-gradient(135deg,#ede9ff,#ddd5ff)',
        name: 'Research & Academic Medical Institutions',
        tagline: 'Rigorous Reads for Rigorous Research.',
        desc: 'Academic institutions and research bodies require structured, protocol-driven imaging interpretations for clinical trials, academic studies, and research publications. We provide the structured reporting support your work demands.',
        offerings: ['Protocol-driven structured reporting', 'Double-read and second opinion support', 'Quantitative imaging measurements', 'IRB-compliant de-identified reporting'],
    },
];

export default function InstitutionsPage() {
    const navigate = useNavigate();

    return (
        <>
            <PageHero
                eyebrow="INSTITUTIONS WE SERVE"
                title="Your Partner in"
                highlight="Better Radiology."
                sub="UltraRadX serves a diverse range of healthcare institutions — delivering tailored teleradiology solutions for every setting, every volume, and every urgency level."
            />

            {/* Institutions Detail Cards */}
            <section className="py-5 section-padding bg-white">
                <Container>
                    <Row className="g-4">
                        {institutions.map((inst, i) => (
                            <Col lg={6} key={i}>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.15 }} whileHover={{ y: -6 }}
                                    className="h-100 p-4 rounded-4 border" style={{ borderColor: 'rgba(0,74,153,0.08)', background: '#fff', boxShadow: '0 4px 20px rgba(0,74,153,0.05)' }}>
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div style={{ width: 60, height: 60, minWidth: 60, borderRadius: 16, background: inst.bg, color: inst.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {inst.icon}
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-0" style={{ color: '#0a1628', fontSize: '1.1rem' }}>{inst.name}</h4>
                                            <div style={{ fontSize: '0.75rem', color: inst.color, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{inst.tagline}</div>
                                        </div>
                                    </div>
                                    <p className="text-muted mb-3" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{inst.desc}</p>
                                    <ul className="list-unstyled mb-0">
                                        {inst.offerings.map((o, j) => (
                                            <li key={j} className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '0.87rem', color: '#475569' }}>
                                                <ChevronRight size={14} style={{ color: inst.color, flexShrink: 0 }} /> {o}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Partnership CTA */}
            <section className="py-5 section-padding bg-medical-gradient overflow-hidden position-relative">
                <div className="floating-icon" style={{ top: '15%', left: '8%' }}><Activity size={80} /></div>
                <div className="floating-icon" style={{ bottom: '20%', right: '12%', animationDelay: '2s' }}><ShieldCheck size={60} /></div>
                <Container className="py-md-4 position-relative" style={{ zIndex: 2 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-700 mx-auto text-center">
                        <div className="about-badge mb-3 scale-up shadow-sm">COLLABORATION</div>
                        <h2 className="display-6 fw-bold mb-4 text-dark">
                            Partner With <span className="text-primary-light">UltraRadX Healthcare</span>
                        </h2>
                        <div className="partnership-card p-4 p-md-5 shadow-2xl border-0 overflow-hidden">
                            <div className="position-absolute top-0 start-0 w-100 h-1 bg-medical-gradient-alt shadow-sm"></div>
                            <div className="mb-4">
                                <Activity size={32} className="text-primary mb-3 opacity-75" />
                                <p className="lead text-dark fw-bold mb-4 lh-base fs-4 px-lg-3">
                                    "If you are seeking a dependable radiology partner that enhances efficiency, reduces reporting backlog, and strengthens diagnostic reliability — we are ready to collaborate."
                                </p>
                                <div className="section-accent-line mx-auto mb-3" style={{ width: '60px', opacity: 0.5 }}></div>
                                <p className="text-muted lh-lg mb-4 px-lg-4">
                                    Let us support your institution with scalable, expert-driven radiology services designed for the future of healthcare. We offer flexible engagement models — from overflow cover to full radiology partnerships.
                                </p>
                            </div>
                            <button onClick={() => navigate('/contact')} className="btn-premium py-3 px-5 border-0 d-inline-flex align-items-center gap-2">
                                Start Collaboration <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
}
