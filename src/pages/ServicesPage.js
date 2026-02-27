import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldCheck, Globe, Award, Clock, ChevronRight, FileText, Zap, Target, Moon } from 'lucide-react';

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

const services = [
    {
        icon: <Activity size={32} />, color: '#004a99', bg: 'linear-gradient(135deg,#e8f4ff,#d0eaff)',
        title: 'CT Scan Reporting',
        tagline: 'Fast & Subspecialty-Accurate',
        desc: 'We provide expert CT reporting across all body systems — head & neck, chest, abdomen, pelvis, spine, and musculoskeletal. Our fellowship-trained radiologists deliver precise interpretations with structured, clinician-friendly reports.',
        features: ['Routine, urgent & STAT CT reads', 'Body, neuro, thoracic subspecialty', 'Structured report with key findings', 'Comparison with prior studies on request'],
    },
    {
        icon: <Globe size={32} />, color: '#007a4d', bg: 'linear-gradient(135deg,#d4f1e8,#b8ead8)',
        title: 'MRI Interpretation',
        tagline: 'Subspecialty Depth. Every Read.',
        desc: 'MRI reporting demands subspecialty-level insight. We deliver detailed neuro, spine, MSK, abdominal, and cardiac MRI interpretations with the precision that complex cases require.',
        features: ['Brain & spinal cord MRI', 'Musculoskeletal MRI', 'Abdominal & pelvic MRI', 'Breast, cardiac & fetal MRI support'],
    },
    {
        icon: <Clock size={32} />, color: '#b91c1c', bg: 'linear-gradient(135deg,#ffe4e4,#ffd0d0)',
        title: 'Emergency STAT Reporting',
        tagline: 'Critical Cases. 20–30 Minute TAT.',
        desc: 'For stroke alerts, trauma, ICU STAT reads, and critical clinical findings, our radiologists are immediately available — 24 hours a day, 7 days a week, 365 days a year.',
        features: ['Stroke protocol CT/MRI reads', 'Trauma & polytrauma radiology', 'ICU chest and abdominal STAT', 'Direct radiologist contact available'],
    },
    {
        icon: <ShieldCheck size={32} />, color: '#007bbd', bg: 'linear-gradient(135deg,#d0f0ff,#b5e8f8)',
        title: 'X-Ray & Plain Film Reporting',
        tagline: 'High Volume. High Accuracy.',
        desc: 'We handle high-volume plain film reporting for chest, abdomen, orthopaedic, and paediatric X-rays with rapid turnaround and diagnostic reliability.',
        features: ['Chest X-ray for ICU & OPD', 'Orthopaedic & trauma films', 'Paediatric plain film reporting', 'Batch reporting for diagnostic centres'],
    },
    {
        icon: <Award size={32} />, color: '#c07000', bg: 'linear-gradient(135deg,#fff0d0,#ffe4a0)',
        title: 'Ultrasound & Doppler Reporting',
        tagline: 'Expert Sonographic Reads.',
        desc: 'We provide comprehensive ultrasound interpretation including abdominopelvic, obstetric, thyroid, small parts, and vascular Doppler studies.',
        features: ['Abdomen & pelvis ultrasound', 'Obstetric & gynae sonography', 'Thyroid & small parts scans', 'Doppler studies (DVT, arterial, venous)'],
    },
    {
        icon: <Target size={32} />, color: '#6d28d9', bg: 'linear-gradient(135deg,#ede9ff,#ddd5ff)',
        title: 'Specialist Second Opinion',
        tagline: 'Confident Decisions. Expert Review.',
        desc: 'For complex, ambiguous, or high-stakes cases, our subspecialty radiologists offer formal second opinion consultations — providing clinicians with an independent expert review.',
        features: ['Complex neuro & oncology cases', 'Pre-surgical imaging review', 'Interdisciplinary discussion support', 'Written specialist opinion reports'],
    },
    {
        icon: <Zap size={32} />, color: '#04786e', bg: 'linear-gradient(135deg,#ccfbf1,#99f6e4)',
        title: 'AI-Assisted Workflow Support',
        tagline: 'Smarter Radiology. Faster Throughput.',
        desc: 'We integrate AI triage tools to prioritize critical findings, flag abnormals, and accelerate worklist management — all with radiologist oversight and final sign-off.',
        features: ['AI triage & abnormality flagging', 'Automated worklist prioritization', 'Structured report generation support', 'Radiologist-verified final reports'],
    },
    {
        icon: <FileText size={32} />, color: '#0c4a6e', bg: 'linear-gradient(135deg,#e0f2fe,#bae6fd)',
        title: 'Quality Assurance & Audit',
        tagline: 'Peer Review you can measure.',
        desc: 'Every report enters our structured peer-review process. We track discrepancy rates, conduct random audits, and provide monthly QA reports to partner institutions.',
        features: ['Peer-reviewed reporting process', 'Discrepancy tracking & scoring', 'Monthly QA reports to institutions', 'Continuous radiologist feedback loop'],
    },
];

export default function ServicesPage() {
    const navigate = useNavigate();

    return (
        <>
            <PageHero
                eyebrow="OUR SERVICES"
                title="Full-Spectrum Teleradiology."
                highlight="Expert. Fast. Reliable."
                sub="From emergency STAT reads to routine reporting, we deliver fellowship-trained subspecialty radiology across all modalities — 24/7."
            />

            {/* Services Grid */}
            <section className="py-5 section-padding bg-white">
                <Container>
                    <Row className="g-4">
                        {services.map((s, i) => (
                            <Col lg={6} key={i}>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.15 }} whileHover={{ y: -6 }} className="h-100 p-4 rounded-4 border"
                                    style={{ borderColor: 'rgba(0,74,153,0.08)', background: '#fff', boxShadow: '0 4px 20px rgba(0,74,153,0.05)' }}>
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div style={{ width: 60, height: 60, minWidth: 60, borderRadius: 16, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,74,153,0.1)' }}>
                                            {s.icon}
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-0" style={{ color: '#0a1628', fontSize: '1.15rem' }}>{s.title}</h4>
                                            <div style={{ fontSize: '0.78rem', color: s.color, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{s.tagline}</div>
                                        </div>
                                    </div>
                                    <p className="text-muted mb-3" style={{ fontSize: '0.93rem', lineHeight: 1.7 }}>{s.desc}</p>
                                    <ul className="list-unstyled mb-0">
                                        {s.features.map((f, j) => (
                                            <li key={j} className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '0.88rem', color: '#475569' }}>
                                                <ChevronRight size={14} style={{ color: s.color, flexShrink: 0 }} /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Nighthawk Featured Section */}
            <section className="py-5 section-padding" style={{ background: '#f8fafc' }}>
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <span className="credentials-eyebrow mb-4 d-inline-block">SPECIALIZED COVERAGE</span>
                                <h2 className="display-5 fw-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
                                    Nighthawk <span className="text-gradient">Radiology Reporting</span>
                                </h2>
                                <p className="text-muted lh-lg mb-4">
                                    Nighthawk radiology refers to the model where radiologists interpret and analyse CT, MRI, X-ray & USG imaging during night-time through online teleradiology 24/7/365, making diagnostic findings quicker to obtain. Nighthawk reporting contributes significantly to reduce the turnaround time (TAT), which is very important in emergency/STAT situations.
                                </p>
                                <p className="text-muted lh-lg mb-4">
                                    The primary goal of Nighthawk radiology services is to offer radiology facilities after working hours, especially during nighttime. It would have been difficult to have nighttime radiologists on-site, which becomes difficult using conventional staffing.
                                </p>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <div className="p-3 rounded-4 bg-white shadow-sm border" style={{ maxWidth: '400px' }}>
                                        <div className="small fw-bold text-uppercase mb-2" style={{ color: '#004a99', letterSpacing: '1px' }}>Streamlined Integration</div>
                                        <p className="small text-muted mb-0">A variety of imaging modalities are covered under Nighthawk services. Multiple subspecialty experts streamline nighttime radiology even further.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="position-relative">
                                <img src="/images/care.jpeg" alt="Nighthawk Radiology Reporting" className="img-fluid rounded-4 shadow-2xl w-100" style={{ objectFit: 'cover', height: '480px' }} />
                                <div className="position-absolute bottom-0 end-0 m-4 p-3 bg-white rounded-3 shadow-lg border-start border-4 border-primary">
                                    <div className="d-flex align-items-center gap-2">
                                        <Moon size={20} className="text-primary" />
                                        <span className="fw-bold small">24/7 Night Support</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* TAT Section */}
            <section id="tat" className="tat-section py-5 section-padding">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-5">
                        <span className="tat-eyebrow">REPORTING TURNAROUND TIME</span>
                        <h2 className="display-5 fw-bold mt-3 mb-3" style={{ color: '#fff' }}>
                            Speed You Can <span style={{ color: '#00aeff' }}>Count On</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem' }}>
                            Every report — emergency or routine — delivered within a guaranteed window, SLA-backed.
                        </p>
                    </motion.div>
                    <Row className="g-4 justify-content-center">
                        <Col md={4}>
                            <motion.div className="tat-card tat-emergency" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -8 }}>
                                <div className="tat-icon-ring tat-ring-emergency"><Clock size={28} /></div>
                                <div className="tat-badge-label">EMERGENCY</div>
                                <div className="tat-time">20–30 <span>min</span></div>
                                <p className="tat-desc">Stroke, trauma, ICU & critical STAT cases — immediate radiologist assignment.</p>
                            </motion.div>
                        </Col>
                        <Col md={4}>
                            <motion.div className="tat-card tat-urgent" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -8 }}>
                                <div className="tat-icon-ring tat-ring-urgent"><Activity size={28} /></div>
                                <div className="tat-badge-label">URGENT</div>
                                <div className="tat-time">1–2 <span>hrs</span></div>
                                <p className="tat-desc">Semi-urgent inpatient and outpatient cases with same-session reporting accuracy.</p>
                            </motion.div>
                        </Col>
                        <Col md={4}>
                            <motion.div className="tat-card tat-routine" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ y: -8 }}>
                                <div className="tat-icon-ring tat-ring-routine"><ShieldCheck size={28} /></div>
                                <div className="tat-badge-label">ROUTINE</div>
                                <div className="tat-time">6–12 <span>hrs</span></div>
                                <p className="tat-desc">Thorough subspecialty reporting with peer-reviewed quality assurance for scheduled studies.</p>
                            </motion.div>
                        </Col>
                    </Row>
                    <motion.div className="tat-footer-note" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                        <ShieldCheck size={16} className="me-2" /> All TAT commitments are SLA-backed. 24/7 radiologist coverage.
                    </motion.div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-5 section-padding text-center bg-white">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="display-6 fw-bold mb-3" style={{ color: '#0a1628' }}>Ready to get started?</h2>
                        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>Contact us to discuss your institution's reporting needs and get a tailored proposal.</p>
                        <button onClick={() => navigate('/contact')} className="btn-premium py-3 px-5 border-0 d-inline-flex align-items-center gap-2">
                            Contact Us Today <ChevronRight size={16} />
                        </button>
                    </motion.div>
                </Container>
            </section>
        </>
    );
}
