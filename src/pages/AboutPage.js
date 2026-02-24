import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Award, Timer, BadgeCheck, ChevronRight, Target, Zap, FileText, ShieldCheck } from 'lucide-react';

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

export default function AboutPage() {
    const navigate = useNavigate();

    return (
        <>
            <PageHero
                eyebrow="ABOUT ULTRARADX HEALTHCARE"
                title="Expert Radiology."
                highlight="Exceptional Care."
                sub="We are a team of fellowship-trained radiologists committed to accuracy, speed, and partnership with healthcare institutions across the region."
            />

            {/* Our Story */}
            <section className="py-5 section-padding bg-white">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <span className="credentials-eyebrow mb-4 d-inline-block">OUR STORY</span>
                                <h2 className="display-5 fw-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
                                    Born from a Need for <span className="text-gradient">Better Radiology</span>
                                </h2>
                                <p className="text-muted lh-lg mb-4">
                                    UltraRadX Healthcare was founded by a group of fellowship-trained radiologists who recognized a critical gap in the Indian teleradiology market: institutions needed not just fast reports, but <strong>accurate, subspecialty-level reads</strong> they could trust — delivered around the clock.
                                </p>
                                <p className="text-muted lh-lg mb-4">
                                    We set out to build a practice that combines world-class subspecialty expertise with the digital infrastructure to serve any hospital, clinic, or imaging center — wherever they are, whenever they need us.
                                </p>
                                <p className="text-muted lh-lg">
                                    Today, we serve multi-specialty hospitals, diagnostic centres, emergency units, and telemedicine platforms with the same commitment: <em>accuracy first, speed always, partnership forever</em>.
                                </p>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                                <img src="images/Mri.jpg" alt="Modern MRI facility" className="img-fluid rounded-4 shadow-2xl w-100" style={{ objectFit: 'cover', height: '420px' }} />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Vision & Mission */}
            <section className="py-5 section-padding" style={{ background: '#f4f9fd' }}>
                <Container>
                    <div className="text-center mb-5">
                        <span className="credentials-eyebrow">VISION & MISSION</span>
                        <h2 className="display-5 fw-bold mt-3" style={{ color: '#0a1628' }}>Guided by <span className="text-gradient">Purpose</span></h2>
                    </div>
                    <Row className="g-4">
                        {[
                            {
                                icon: <Target size={32} />,
                                label: 'OUR VISION',
                                title: 'Radiology Without Boundaries',
                                desc: 'To become the most trusted subspecialty teleradiology partner for healthcare institutions across India and beyond — enabling access to expert diagnostic interpretation regardless of geography or time zone.',
                                bg: 'linear-gradient(135deg,#e8f4ff,#d0eaff)', color: '#004a99'
                            },
                            {
                                icon: <Zap size={32} />,
                                label: 'OUR MISSION',
                                title: 'Accurate. Fast. Always Available.',
                                desc: 'To deliver fellowship-trained, subspecialty-level radiology reporting with guaranteed turnaround times, transparent communication, and unwavering commitment to diagnostic excellence — 24 hours a day, every day.',
                                bg: 'linear-gradient(135deg,#d0f0e8,#b5e8d0)', color: '#007a4d'
                            },
                            {
                                icon: <ShieldCheck size={32} />,
                                label: 'OUR PROMISE',
                                title: 'Your Partner, Not Just a Vendor',
                                desc: 'We measure our success by the confidence clinicians have in our reports. Every interpretation is peer-reviewed, every turnaround time is tracked, and every client relationship is built on transparency and accountability.',
                                bg: 'linear-gradient(135deg,#fff0d0,#ffe4a0)', color: '#c07000'
                            },
                        ].map((v, i) => (
                            <Col lg={4} key={i}>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -8 }} className="cred-card h-100">
                                    <div className="cred-icon-wrap" style={{ background: v.bg, color: v.color }}>{v.icon}</div>
                                    <div className="tat-badge-label mt-3" style={{ color: v.color, opacity: 1 }}>{v.label}</div>
                                    <h4 className="cred-title mt-1">{v.title}</h4>
                                    <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{v.desc}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Credentials */}
            <section className="credentials-section py-5 section-padding">
                <Container>
                    <div className="text-center mb-5">
                        <span className="credentials-eyebrow">WHY TRUST US</span>
                        <h2 className="display-5 fw-bold mt-3" style={{ color: '#0a1628' }}>Expertise You Can <span className="text-gradient">Rely On</span></h2>
                    </div>
                    <Row className="g-4">
                        {[
                            { icon: <GraduationCap size={30} />, bg: 'linear-gradient(135deg,#e8f4ff,#d0eaff)', color: '#004a99', title: 'Radiologist Qualifications', items: ['MD (Radiodiagnosis)', 'DNB Certified', 'Fellowship Trained', 'Subspecialty Expertise'] },
                            { icon: <Award size={30} />, bg: 'linear-gradient(135deg,#fff0d0,#ffe4a0)', color: '#c07000', title: 'Combined Experience', stat: '15+', statLabel: 'Years of combined clinical & teleradiology practice across CT, MRI, X-Ray, and Ultrasound.' },
                            { icon: <Timer size={30} />, bg: 'linear-gradient(135deg,#d0f0ff,#b5e8f8)', color: '#007bbd', title: 'TAT Commitment', items: ['🚨 Emergency: <30 Minutes', '⚡ Urgent: <2 Hours', '📋 Routine: <12 Hours', '🕐 24/7 Coverage'] },
                            { icon: <BadgeCheck size={30} />, bg: 'linear-gradient(135deg,#d4f1e8,#b8ead8)', color: '#007a4d', title: 'Compliance & Security', items: ['✅ HIPAA-Compliant', '✅ GDPR-Ready', '🔐 End-to-End Encryption', '🛡 Secure DICOM Transfer'] },
                        ].map((c, i) => (
                            <Col lg={3} sm={6} key={i}>
                                <motion.div className="cred-card h-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}>
                                    <div className="cred-icon-wrap" style={{ background: c.bg, color: c.color }}>{c.icon}</div>
                                    <h4 className="cred-title">{c.title}</h4>
                                    {c.items ? (
                                        <ul className="cred-list">{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                                    ) : (
                                        <><div className="cred-stat">{c.stat}</div><p className="cred-stat-label">{c.statLabel}</p></>
                                    )}
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5">
                        <button onClick={() => navigate('/contact')} className="sample-report-btn d-inline-flex align-items-center gap-2">
                            <FileText size={18} /> Request a Sample Anonymized Report <ChevronRight size={16} />
                        </button>
                    </div>
                </Container>
            </section>

            {/* Core Values */}
            <section className="py-5 section-padding" style={{ background: 'linear-gradient(135deg,#0a1628,#003366)' }}>
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold text-white">Our Core Values</h2>
                    </div>
                    <Row className="g-4">
                        {[
                            { title: 'Accuracy Before Speed', desc: 'Every report must meet the highest diagnostic standard before it reaches a clinician.' },
                            { title: 'Integrity in Reporting', desc: 'Transparent, unbiased interpretations — with documented quality tracking.' },
                            { title: 'Patient-Centered Approach', desc: 'Every scan represents a patient. We interpret with that responsibility in mind.' },
                            { title: 'Technological Excellence', desc: 'AI-assisted workflows and secure DICOM connectivity for modern radiology.' },
                            { title: 'Collaborative Partnerships', desc: 'We integrate with your workflow, not around it — a true extension of your team.' },
                        ].map((v, i) => (
                            <Col md={4} key={i}>
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="institution-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div className="institution-icon" style={{ background: 'rgba(0,174,255,0.15)', color: '#00aeff' }}>
                                        <span style={{ fontSize: '1.4rem' }}>0{i + 1}</span>
                                    </div>
                                    <h5 className="institution-title" style={{ color: '#fff' }}>{v.title}</h5>
                                    <p className="institution-desc" style={{ color: 'rgba(255,255,255,0.6)' }}>{v.desc}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}
