import React, { useState, useEffect } from 'react';
import {
  Navbar, Nav, Container, Row, Col,
  Button, Form, Card
} from 'react-bootstrap';
import {
  Phone, Mail, MapPin,
  ChevronRight, Activity, ShieldCheck,
  Clock, Award, Globe, Facebook, Twitter, Linkedin, Instagram,
  Target, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './components/Logo';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Header */}
      <Navbar
        expand="lg"
        fixed="top"
        expanded={navExpanded}
        onToggle={(val) => setNavExpanded(val)}
        className={`navbar-premium ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center" onClick={() => setNavExpanded(false)}>
            <Logo className="h-12 md-h-16" variant="logo2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="mx-2 fw-bold" onClick={() => setNavExpanded(false)}>Home</Nav.Link>
              <Nav.Link href="#about" className="mx-2 fw-bold" onClick={() => setNavExpanded(false)}>About Us</Nav.Link>
              <Nav.Link href="#services" className="mx-2 fw-bold" onClick={() => setNavExpanded(false)}>Services</Nav.Link>
              <Nav.Link href="#why-us" className="mx-2 fw-bold" onClick={() => setNavExpanded(false)}>Why Choose Us</Nav.Link>
              <Nav.Link href="#contact" className="mx-2 fw-bold" onClick={() => setNavExpanded(false)}>Contact</Nav.Link>
              <Button className="btn-premium ms-lg-4 shadow-sm border-0" onClick={() => setNavExpanded(false)}>
                Get an Estimate
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section bg-pearl section-padding">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0 mobile-text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="hero-badge mx-auto mx-lg-0">
                    <Activity size={18} className="me-2" />
                    UltraRadX Healthcare
                  </div>
                  <h1 className="display-4 mb-4 fw-bold text-dark">
                    Precision Imaging. <br />
                    <span className="text-gradient">Trusted Expertise.</span> <br />
                    Seamless Connectivity.
                  </h1>
                  <p className="lead text-muted mb-5 pe-lg-5">
                    We provide high-quality, timely, and accurate teleradiology reporting services to hospitals, imaging centers, and clinics worldwide. Our board-certified radiologists deliver fast turnaround times with a strong commitment to diagnostic excellence and patient care.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                    <Button className="btn-premium py-3 px-5 shadow-lg border-0" href="#services">
                      Explore Services <ChevronRight size={18} className="ms-2" />
                    </Button>
                    <Button variant="outline-primary" className="rounded-pill py-3 px-5 border-2 shadow-sm fw-bold" href="#about">
                      Who We Are
                    </Button>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="position-relative"
                >
                  <div className="rounded-5 overflow-hidden shadow-2xl border border-5 border-white">
                    <img
                      src="images/x-ray.jpg"
                      alt="Professional Spine MRI Scan"
                      className="img-fluid w-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Floating Elements - Hidden on small mobile */}
                  <div
                    className="position-absolute bottom-0 start-0 translate-middle-x bg-white p-4 rounded-4 shadow-lg d-none d-lg-flex align-items-center gap-3 ms-5"
                    style={{ marginBottom: '-20px' }}
                  >
                    <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-primary">
                      <Globe size={28} />
                    </div>
                    <div>
                      <h4 className="mb-0 fw-bold">100+</h4>
                      <small className="text-muted text-uppercase fw-bold">Global Sites</small>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* About Us Section - Premium Redesign */}
        <section id="about" className="about-section-premium position-relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="about-bg-blob about-bg-blob-1"></div>
          <div className="about-bg-blob about-bg-blob-2"></div>

          <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
            <Row className="align-items-center g-5">

              {/* LEFT — Text Content */}
              <Col lg={6} className="mobile-text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Section eyebrow */}
                  <div className="about-eyebrow mx-auto mx-lg-0">
                    <span className="about-eyebrow-dot"></span>
                    WHO WE ARE
                  </div>

                  <h2 className="about-heading mt-3 mb-4">
                    Your Reliable <br />
                    <span className="about-heading-accent">Radiology Partner</span>
                  </h2>

                  <p className="about-lead mb-3">
                    <strong>UltraRadX Healthcare</strong> is a next-generation diagnostic radiology solutions
                    provider committed to delivering accurate, timely, and technology-enabled imaging
                    interpretations for healthcare institutions worldwide.
                  </p>
                  <p className="about-body mb-4">
                    We combine clinical excellence with digital efficiency to ensure healthcare providers
                    receive reliable radiology support whenever they need it — connecting hospitals,
                    diagnostic centers, and clinics with a network of senior radiologists across every time zone.
                  </p>

                  {/* Mini stats row */}
                  <div className="about-stats-row mb-4">
                    {[
                      { value: '99.8%', label: 'Accuracy Rate' },
                      { value: '100k+', label: 'Cases / Year' },
                      { value: '24/7', label: 'Expert Support' },
                      { value: '100+', label: 'Global Sites' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="about-stat-chip"
                      >
                        <span className="about-stat-val">{stat.value}</span>
                        <span className="about-stat-lbl">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Goal callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="about-goal-card"
                  >
                    <div className="about-goal-icon">
                      <Activity size={20} />
                    </div>
                    <div>
                      <p className="about-goal-title mb-1">Our Goal is Simple</p>
                      <p className="about-goal-text mb-0">
                        Enhance patient care by delivering dependable radiology insights with speed and precision.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </Col>

              {/* RIGHT — 3-Image Mosaic Panel */}
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="about-mosaic-panel"
                >
                  {/* Dot grid accent */}
                  <div className="about-dot-grid"></div>

                  <div className="about-mosaic-grid">
                    {/* LEFT — tall image */}
                    <div className="about-mosaic-tall">
                      <img
                        src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=85&w=500"
                        alt="CT scan room with advanced imaging equipment"
                        className="about-mosaic-img"
                      />
                    </div>

                    {/* RIGHT — two stacked images */}
                    <div className="about-mosaic-stack">
                      <div className="about-mosaic-sm">
                        <img
                          src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=85&w=400"
                          alt="Radiologist analyzing MRI scan on monitor"
                          className="about-mosaic-img"
                        />
                      </div>
                      <div className="about-mosaic-sm">
                        <img
                          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=85&w=400"
                          alt="Modern hospital radiology department"
                          className="about-mosaic-img"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating accuracy card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="about-float-card about-mosaic-float-bottom"
                  >
                    <div className="about-float-icon-wrap">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <div className="about-float-val">99.8%</div>
                      <div className="about-float-lbl">Accuracy Rate</div>
                    </div>
                  </motion.div>

                  {/* Floating global card */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65 }}
                    className="about-float-card about-mosaic-float-top"
                  >
                    <div className="about-float-icon-wrap about-float-icon-teal">
                      <Clock size={22} />
                    </div>
                    <div>
                      <div className="about-float-val">24/7</div>
                      <div className="about-float-lbl">Expert Support</div>
                    </div>
                  </motion.div>

                  {/* Ring accent */}
                  <div className="about-ring-accent"></div>
                </motion.div>
              </Col>

            </Row>
          </Container>
        </section>
        {/* Vision & Mission Section - Premium Light */}
        <section id="vision-mission" className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f8f0ff 100%)' }}>
          {/* Decorative blobs */}
          <div className="position-absolute" style={{ top: '-80px', right: '5%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(0,174,255,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
          <div className="position-absolute" style={{ bottom: '-60px', left: '5%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(130,195,201,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(25px)' }}></div>

          <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-5"
            >
              <span className="fw-bold text-uppercase" style={{ color: '#00aeff', letterSpacing: '4px', fontSize: '0.8rem' }}>• OUR PURPOSE •</span>
              <h2 className="display-4 fw-bold mt-3" style={{ color: '#0a1628' }}>Vision <span style={{ background: 'linear-gradient(90deg, #004a99, #00aeff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>&</span> Mission</h2>
            </motion.div>

            <Row className="g-0 align-items-stretch">
              {/* Vision — Left Panel */}
              <Col lg={5}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-100 p-4 p-lg-5"
                  style={{ background: 'linear-gradient(145deg, #ffffff, #f5faff)', borderRadius: '28px 0 0 28px', border: '1px solid rgba(0,74,153,0.08)', borderRight: 'none' }}
                >
                  {/* Icon */}
                  <div className="mb-4" style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #e8f4ff, #d0eaff)', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,74,153,0.12)' }}>
                    <Target size={36} style={{ color: '#004a99' }} />
                  </div>
                  <h3 className="fw-bold mb-3" style={{ fontSize: '1.9rem', color: '#0a1628' }}>Our Vision</h3>
                  <div style={{ width: '40px', height: '4px', background: 'linear-gradient(90deg, #004a99, #00aeff)', borderRadius: '4px', marginBottom: '1.5rem' }}></div>
                  <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.9' }}>
                    To become a globally trusted radiology partner known for clinical accuracy, operational efficiency, and technology-driven solutions that <strong style={{ color: '#004a99' }}>transform patient care</strong>.
                  </p>
                </motion.div>
              </Col>

              {/* Divider */}
              <Col lg={2} className="d-none d-lg-flex align-items-center justify-content-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="d-flex flex-column align-items-center gap-2"
                >
                  <div style={{ width: '2px', height: '80px', background: 'linear-gradient(to bottom, transparent, #00aeff)' }}></div>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #004a99, #00aeff)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,174,255,0.3)' }}>
                    <span className="text-white fw-bold" style={{ fontSize: '0.7rem', lineHeight: 1, textAlign: 'center' }}>URX</span>
                  </div>
                  <div style={{ width: '2px', height: '80px', background: 'linear-gradient(to bottom, #00aeff, transparent)' }}></div>
                </motion.div>
              </Col>

              {/* Mission — Right Panel */}
              <Col lg={5}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="h-100 p-4 p-lg-5"
                  style={{ background: 'linear-gradient(145deg, #f5faff, #eaf4fb)', borderRadius: '0 28px 28px 0', border: '1px solid rgba(0,174,255,0.1)', borderLeft: 'none' }}
                >
                  {/* Icon */}
                  <div className="mb-4" style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #d0f0ff, #b5e8f8)', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,174,255,0.15)' }}>
                    <Zap size={36} style={{ color: '#00aeff' }} />
                  </div>
                  <h3 className="fw-bold mb-3" style={{ fontSize: '1.9rem', color: '#0a1628' }}>Our Mission</h3>
                  <div style={{ width: '40px', height: '4px', background: 'linear-gradient(90deg, #00aeff, #82c3c9)', borderRadius: '4px', marginBottom: '1.5rem' }}></div>
                  <div className="vstack gap-3">
                    {[
                      { text: "Deliver high-quality diagnostic reporting", icon: <Activity size={16} /> },
                      { text: "Support providers with 24/7 radiology access", icon: <Clock size={16} /> },
                      { text: "Reduce TAT without compromising accuracy", icon: <Award size={16} /> },
                      { text: "Integrate seamlessly into hospital systems", icon: <Globe size={16} /> },
                      { text: "Uphold highest standards of compliance", icon: <ShieldCheck size={16} /> }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.07 }}
                        className="d-flex align-items-center gap-3 p-2 rounded-3"
                        style={{ transition: 'background 0.2s', cursor: 'default' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,74,153,0.05)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ width: '32px', height: '32px', minWidth: '32px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,74,153,0.1)', color: '#004a99' }}>
                          {item.icon}
                        </div>
                        <span style={{ color: '#2d3748', fontSize: '1rem', fontWeight: 500 }}>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Section - Premium Teal Background */}
        <section id="services" className="py-5 section-padding bg-teal-soft">
          <Container className="py-md-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-5 pb-3"
            >
              <h2 className="display-4 fw-bold mb-3">Comprehensive Radiology Services</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                UltraRadX Healthcare offers a complete suite of remote and on-site diagnostic reporting solutions tailored to meet the needs of modern healthcare systems.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                {
                  title: '1. Teleradiology Reporting',
                  desc: 'Remote diagnostic reporting for CT (Neuro, Chest, Trauma, Angio), MRI (Brain, Musculoskeletal, Cardiac), Digital X-Ray, and Ultrasound.',
                  icon: <Globe />
                },
                {
                  title: '2. Emergency & Night Support',
                  desc: 'Round-the-clock emergency radiology services, including STAT case reporting and night shift coverage for hospitals.',
                  icon: <Clock />
                },
                {
                  title: '3. Preliminary & Final Reporting',
                  desc: 'Flexible options including preliminary reads for urgent cases and final verified reports by certified radiologists.',
                  icon: <Activity />
                },
                {
                  title: '4. Specialist Consultation',
                  desc: 'Subspecialty radiology opinions and second-opinion services for complex cases (Oncology, Neurology, Cardiology).',
                  icon: <Award />
                },
                {
                  title: '5. Workflow Integration',
                  desc: 'Seamless PACS integration, RIS compatibility, and secure DICOM transfer solutions tailored to your facility.',
                  icon: <ShieldCheck />
                },
                {
                  title: '6. TAT Commitment',
                  desc: 'Strict performance protocols ensuring rapid reporting for emergency cases and consistent routine scan delivery.',
                  icon: <Activity />
                },
                {
                  title: '7. Quality & Compliance',
                  desc: 'Rigorous multi-level case reviews, peer review systems, and secure data handling protocols for total confidentiality.',
                  icon: <ShieldCheck />
                }
              ].map((service, idx) => (
                <Col md={idx === 6 ? 12 : 4} lg={idx === 6 ? 4 : 4} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="medical-card h-100 shadow-sm border-0"
                  >
                    <div className="card-icon mb-4">
                      {service.icon}
                    </div>
                    <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                    <p className="small text-muted mb-0">
                      {service.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-5 section-padding overflow-hidden bg-mint-soft">
          <Container className="py-md-5">
            <Row className="align-items-center g-5">
              <Col lg={6} className="order-2 order-lg-1 mobile-text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="display-5 mb-5 fw-bold text-dark">Why Choose <span className="text-primary">UltraRadX</span>?</h2>
                </motion.div>
                <div className="row g-5">
                  {[
                    { title: 'Certified Expertise', desc: 'Panel of certified and experienced radiologists.', icon: <Award size={28} /> },
                    { title: '24/7 Operations', desc: 'Continuous availability for all cases.', icon: <Clock size={28} /> },
                    { title: 'Reliable TAT', desc: 'Performance metrics aligned with urgency.', icon: <Activity size={28} /> },
                    { title: 'Secure Data', desc: 'Advanced encryption and strict protocols.', icon: <ShieldCheck size={28} /> },
                    { title: 'Flexible Engagement', desc: 'Volume-based or customized agreements.', icon: <Globe size={28} /> },
                    { title: 'Dedicated Support', desc: 'Assigned managers for coordination.', icon: <Award size={28} /> }
                  ].map((item, idx) => (
                    <Col sm={6} key={idx}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="d-flex align-items-start gap-3 mb-4"
                      >
                        <div className="text-primary mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="h5 fw-bold mb-2 text-dark">{item.title}</h4>
                          <p className="small text-muted mb-0 lh-base">{item.desc}</p>
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                </div>
              </Col>
              <Col lg={6} className="order-1 order-lg-2">
                <div className="why-img-mosaic">
                  {/* Top row: two images side by side */}
                  <div className="why-img-row-top">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="why-img-cell why-img-cell-lg"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=500"
                        alt="Radiologist at workstation reviewing imaging results"
                        className="why-img"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                      className="why-img-cell why-img-cell-sm"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=85&w=400"
                        alt="Advanced MRI machine in a modern facility"
                        className="why-img"
                      />
                    </motion.div>
                  </div>
                  {/* Bottom: wide panoramic image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="why-img-cell why-img-cell-wide"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=85&w=800"
                      alt="Modern radiology department panoramic view"
                      className="why-img"
                    />
                    {/* 24/7 floating badge */}
                    <div className="why-badge-overlay">
                      <Clock size={16} className="me-2" />
                      <span>24/7 Expert Support</span>
                    </div>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Technology Infrastructure */}
        <section id="technology" className="py-5 section-padding bg-medical-gray">
          <Container className="py-md-5">
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="about-badge mb-4">TECHNOLOGY</div>
                  <h2 className="display-5 fw-bold mb-4">Our Technology Infrastructure</h2>
                  <p className="text-muted lh-lg mb-4">
                    UltraRadX Healthcare operates on a secure, scalable digital infrastructure designed for consistent performance across geographies.
                  </p>
                  <ul className="list-unstyled">
                    {[
                      'Encrypted data transmission',
                      'High-resolution viewing platforms',
                      'Cloud-enabled case management',
                      'Real-time case tracking',
                      'Seamless clinician communication'
                    ].map((item, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-3 mb-3">
                        <div className="bg-primary bg-opacity-10 p-1 rounded-circle text-primary">
                          <ChevronRight size={16} />
                        </div>
                        <span className="fw-bold text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-5 shadow-lg text-center"
                >
                  <Activity size={60} className="text-primary mb-4" />
                  <h3 className="fw-bold mb-3">Scalable & Secure</h3>
                  <p className="text-muted">Built for the future of radiology with advanced encryption and real-time connectivity.</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Industries We Serve */}
        <section className="py-5 section-padding bg-white">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold">Institutions We Serve</h2>
              <div className="section-accent-line mx-auto"></div>
            </div>
            <Row className="g-4 text-center">
              {[
                'Multi-Specialty Hospitals',
                'Diagnostic & Imaging Centers',
                'Emergency Care Units',
                'Telemedicine Providers',
                'Specialty Clinics',
                'Research & Academic Institutions'
              ].map((item, idx) => (
                <Col md={4} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-4 bg-ice h-100 border border-light"
                  >
                    <h5 className="fw-bold mb-0 text-dark">{item}</h5>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-5 section-padding bg-primary text-white text-center">
          <Container>
            <h2 className="display-5 fw-bold mb-5">Our Core Values</h2>
            <Row className="g-4">
              {[
                { title: 'Accuracy Before Speed', icon: <Award /> },
                { title: 'Integrity in Reporting', icon: <ShieldCheck /> },
                { title: 'Patient-Centered Approach', icon: <Activity /> },
                { title: 'Technological Excellence', icon: <Globe /> },
                { title: 'Collaborative Partnerships', icon: <Activity /> }
              ].map((val, idx) => (
                <Col key={idx} className="col-6 col-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="mb-3">
                      {React.cloneElement(val.icon, { size: 40 })}
                    </div>
                    <h5 className="fw-bold">{val.title}</h5>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Partnership / CTA Section - Compact Refinement */}
        <section id="partnership" className="py-5 section-padding bg-medical-gradient overflow-hidden">
          {/* Decorative Floating Icons */}
          <div className="floating-icon" style={{ top: '15%', left: '8%' }}><Activity size={80} /></div>
          <div className="floating-icon" style={{ bottom: '20%', right: '12%', animationDelay: '2s' }}><ShieldCheck size={60} /></div>
          <div className="floating-icon" style={{ top: '45%', right: '18%', opacity: 0.05, animationDelay: '4s' }}><Globe size={40} /></div>

          <Container className="py-md-4 position-relative" style={{ zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-700 mx-auto text-center"
            >
              <div className="about-badge mb-3 scale-up shadow-sm">COLLABORATION</div>
              <h2 className="display-6 fw-bold mb-4 text-dark">
                Partner With <span className="text-primary-light">UltraRadX Healthcare</span>
              </h2>

              <div className="partnership-card p-4 p-md-5 shadow-2xl border-0 overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-1 bg-medical-gradient-alt shadow-sm"></div>

                <div className="mb-4">
                  <Activity size={32} className="text-primary mb-3 opacity-75" />
                  <p className="lead text-dark fw-bold mb-4 lh-base fs-4 px-lg-3">
                    "If you are seeking a dependable radiology partner that enhances efficiency, reduces
                    reporting backlog, and strengthens diagnostic reliability — we are ready to
                    collaborate."
                  </p>
                  <div className="section-accent-line mx-auto mb-3" style={{ width: '60px', opacity: 0.5 }}></div>
                  <p className="text-muted lh-lg mb-0 px-lg-4">
                    Let us support your institution with scalable, expert-driven radiology services designed for
                    the future of healthcare.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    href="#contact"
                    className="btn-premium px-4 py-2 shadow-lg rounded-pill border-0 transition"
                    style={{ background: 'var(--medical-gradient)' }}
                  >
                    Start Collaboration
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section - Responsive Overhaul */}
        <section id="contact" className="py-5 section-padding position-relative bg-ice">
          <Container className="py-md-5 position-relative" style={{ zIndex: 1 }}>
            <Row className="g-5 align-items-center">
              <Col lg={5} className="mobile-text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="display-4 fw-bold mb-4 text-dark">Get In <span className="text-primary">Touch</span></h2>
                  <p className="lead text-muted mb-5">
                    Ready to collaborate on improving your clinical operations? We're just a message away.
                  </p>

                  <div className="vstack gap-5">
                    {[
                      { icon: <Phone size={24} />, label: 'Call Us', value: '+15 737979646' },
                      { icon: <Mail size={24} />, label: 'Email Us', value: 'ultraradx19@gmail.com' },
                    ].map((item, idx) => (
                      <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-center gap-4" key={idx}>
                        <div className="text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-uppercase small fw-bold text-muted mb-1" style={{ letterSpacing: '1px' }}>{item.label}</div>
                          <div className="h5 fw-bold mb-0 text-dark">{item.value}</div>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-center gap-4">
                      <div className="text-primary">
                        <MapPin size={24} />
                      </div>
                      <div className="text-center text-lg-start">
                        <div className="text-uppercase small fw-bold text-muted mb-1" style={{ letterSpacing: '1px' }}>Address</div>
                        <div className="h5 fw-bold mb-0 text-dark" style={{ lineHeight: '1.6' }}>
                          Flat No G-04, Orchid estate Gold Homes,<br />
                          Greater Noida West Sec 1, Bisrakh, 201306
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>

              <Col lg={{ span: 6, offset: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 rounded-4 shadow-2xl p-4 p-md-5 bg-white">
                    <Form className="row g-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-caps">First Name</Form.Label>
                          <Form.Control type="text" className="premium-input shadow-none" placeholder="Jane" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-caps">Last Name</Form.Label>
                          <Form.Control type="text" className="premium-input shadow-none" placeholder="Doe" />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="form-label-caps">Email Address</Form.Label>
                          <Form.Control type="email" className="premium-input shadow-none" placeholder="jane@example.com" />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="form-label-caps">Message</Form.Label>
                          <Form.Control as="textarea" rows={4} className="premium-input shadow-none" placeholder="How can we help?" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="pt-2">
                        <Button className="btn-premium w-100 py-3 border-0 shadow-lg rounded-3 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                          Send Message
                        </Button>
                      </Col>
                    </Form>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      {/* Footer - Premium Overhaul */}
      <footer className="footer-premium py-5 bg-white border-top border-light overflow-hidden position-relative">
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="g-5 justify-content-between mb-5">
            <Col lg={4} className="mobile-text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
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
                    <Nav.Link href="#about" className="footer-link p-0">About Us</Nav.Link>
                    <Nav.Link href="#services" className="footer-link p-0">Services</Nav.Link>
                    <Nav.Link href="#why-us" className="footer-link p-0">Why Choose Us</Nav.Link>
                    <Nav.Link href="#contact" className="footer-link p-0">Contact</Nav.Link>
                  </Nav>
                </Col>
                <Col md={4} className="mobile-text-center">
                  <h6 className="footer-heading mb-4 text-white">Services</h6>
                  <Nav className="flex-column gap-3">
                    <Nav.Link href="#services" className="footer-link p-0 d-flex align-items-center gap-2">
                      <Activity size={14} className="text-primary-light" /> Teleradiology
                    </Nav.Link>
                    <Nav.Link href="#services" className="footer-link p-0 d-flex align-items-center gap-2">
                      <ShieldCheck size={14} className="text-primary-light" /> Emergency Support
                    </Nav.Link>
                    <Nav.Link href="#services" className="footer-link p-0 d-flex align-items-center gap-2">
                      <Globe size={14} className="text-primary-light" /> Specialist Consultation
                    </Nav.Link>
                    <Nav.Link href="#services" className="footer-link p-0 d-flex align-items-center gap-2">
                      <Award size={14} className="text-primary-light" /> Quality Assurance
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col md={4} className="mobile-text-center">
                  <h6 className="footer-heading mb-4 text-white">Follow Us</h6>
                  <p className="small text-muted mb-4 d-none d-lg-block">Connect with us on our social platforms for the latest updates.</p>
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
              <a href="#" className="small text-muted text-decoration-none hover-primary transition">Privacy Policy</a>
              <a href="#" className="small text-muted text-decoration-none hover-primary transition">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </div >
  );
}

export default App;
