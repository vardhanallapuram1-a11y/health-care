import React, { useState, useEffect } from 'react';
import {
  Navbar, Nav, Container, Row, Col,
  Button, Form, Card
} from 'react-bootstrap';
import {
  Phone, Mail, MapPin,
  ChevronRight, Activity, ShieldCheck,
  Clock, Award, Globe, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './components/Logo';

function App() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`navbar-custom ${scrolled ? 'navbar-scrolled' : 'py-3'}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Logo className="h-12 md-h-16" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="mx-2 fw-bold">Home</Nav.Link>
              <Nav.Link href="#about" className="mx-2 fw-bold">About Us</Nav.Link>
              <Nav.Link href="#services" className="mx-2 fw-bold">Services</Nav.Link>
              <Nav.Link href="#why-us" className="mx-2 fw-bold">Why Choose Us</Nav.Link>
              <Nav.Link href="#contact" className="mx-2 fw-bold">Contact</Nav.Link>
              <Button className="btn-premium ms-lg-4 shadow-sm border-0">
                Get an Estimate
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section bg-white section-padding">
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
                    Leading Teleradiology Network
                  </div>
                  <h1 className="display-3 mb-4 fw-bold text-dark">
                    Dedicated Team of <br />
                    <span className="text-gradient">Radiologists</span>
                  </h1>
                  <p className="lead text-muted mb-5 pe-lg-5">
                    Advancing accessibility and affordability of radiology services internationally.
                    Managing over 100,000 cases annually with precision and speed.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                    <Button className="btn-premium py-3 px-5 shadow-lg border-0">
                      Explore Services <ChevronRight size={18} className="ms-2" />
                    </Button>
                    <Button variant="outline-primary" className="rounded-pill py-3 px-5 border-2 shadow-sm fw-bold">
                      About Us
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
                      src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
                      alt="Modern Radiology Equipment"
                      className="img-fluid w-100"
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

        {/* About Us Section - Premium Overhaul */}
        <section id="about" className="py-5 bg-white position-relative overflow-hidden">
          <div className="about-watermark">ABOUT</div>
          <Container className="py-5">
            <Row className="align-items-center g-5">
              <Col lg={6} className="mobile-text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="about-badge mx-auto mx-lg-0">WHO WE ARE</div>
                  <div className="section-accent-line mx-auto mx-lg-0"></div>
                  <h2 className="display-4 fw-bold mb-4 text-dark">
                    Advancing Radiology <br />
                    <span className="text-primary text-gradient">Globally</span>
                  </h2>
                  <div className="vstack gap-4 pe-lg-5">
                    <p className="lead text-muted lh-lg fs-5">
                      <span className="fw-bold text-dark">RADGRAM Healthcare</span> is committed to advancing the accessibility and affordability of
                      radiology services internationally.
                    </p>
                    <p className="text-muted lh-lg">
                      Operating across borders, we oversee the management of over <span className="text-primary fw-bold">100,000 cases annually</span>
                      and maintain a network of more than 100 imaging sites globally.
                    </p>
                    <p className="text-muted lh-lg">
                      Our platform offers a unique opportunity for key players within the industry to elevate
                      their operations and foster meaningful collaborations.
                    </p>
                  </div>
                  <div className="mt-5 d-flex justify-content-center justify-content-lg-start">
                    <Button variant="outline-primary" className="rounded-pill py-3 px-5 border-2 shadow-sm fw-bold">
                      Our Mission
                    </Button>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="about-image-stack px-lg-5"
                >
                  <div className="about-decoration-dots"></div>
                  <div className="about-blob-mask shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                      alt="Professional Radiologist"
                      className="img-fluid"
                    />
                  </div>
                  {/* Floating Stat */}
                  <div className="position-absolute top-50 start-0 translate-middle bg-white p-4 rounded-4 shadow-lg border border-light d-none d-lg-block" style={{ zIndex: 10 }}>
                    <div className="text-primary h2 fw-bold mb-0">99.8%</div>
                    <div className="text-muted small fw-bold text-uppercase">Accuracy Rate</div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
          {/* Decorative background shapes */}
          <div className="position-absolute top-0 start-0 translate-middle bg-primary bg-opacity-5 rounded-circle" style={{ width: '400px', height: '400px', zIndex: -1 }}></div>
        </section>

        {/* Services Section - Subtle Teal Background */}
        <section id="services" className="py-5 section-padding" style={{ backgroundColor: 'var(--accent-teal-light)' }}>
          <Container className="py-md-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-5 pb-3"
            >
              <h2 className="display-4 fw-bold mb-3">Our Premium Services</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Expert radiological analysis delivered with speed and unmatched accuracy.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                {
                  title: 'Preliminary Analysis',
                  desc: 'Comprehensive initial reports for routine caseload management.',
                  icon: <Activity />
                },
                {
                  title: 'Emergency Review',
                  desc: 'Critical case resolution by our specialist doctors with aggressive turnaround times.',
                  icon: <Clock />
                },
                {
                  title: 'Second Opinion',
                  desc: 'Highly specialized reviews for complex diagnostic challenges.',
                  icon: <Award />
                }
              ].map((service, idx) => (
                <Col md={4} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="medical-card h-100"
                  >
                    <div className="card-icon">
                      {service.icon}
                    </div>
                    <h3 className="h4 mb-3">{service.title}</h3>
                    <p className="text-muted pe-lg-3">
                      {service.desc}
                    </p>
                    <div className="mt-4 text-primary fw-bold cursor-pointer">
                      Learn more <ChevronRight size={16} />
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-5 section-padding overflow-hidden bg-white">
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
                    { title: 'Best Price', desc: 'Optimized costs for all scale.', icon: <Award size={28} /> },
                    { title: 'Clinical Quality', desc: 'Internally reviewed excellence.', icon: <ShieldCheck size={28} /> },
                    { title: 'On-Time', desc: 'Precision delivery guarantee.', icon: <Clock size={28} /> },
                    { title: '24/7 Support', desc: 'Round the clock availability.', icon: <Globe size={28} /> }
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
              <Col lg={6} className="order-1 order-lg-2 text-center">
                <Row className="g-4 justify-content-center">
                  <Col xs={6}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ height: '140px' }}
                    >
                      <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" className="w-100 h-100 object-fit-cover" alt="Medical Lab" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="stat-box primary"
                    >
                      <h3 className="stat-number">100k+</h3>
                      <p className="stat-label mb-0">Cases / Year</p>
                    </motion.div>
                  </Col>
                  <Col xs={6} className="mt-5">
                    <motion.div
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="stat-box info mb-4"
                    >
                      <h3 className="stat-number">24/7</h3>
                      <p className="stat-label mb-0">Expert Help</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="rounded-4 overflow-hidden shadow-sm" style={{ height: '140px' }}
                    >
                      <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400" className="w-100 h-100 object-fit-cover" alt="Doctor" />
                    </motion.div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Section - Responsive Overhaul */}
        <section id="contact" className="py-5 section-padding position-relative">
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
        <div className="footer-watermark">RADGRAM</div>
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="g-5 justify-content-between mb-5">
            <Col lg={4} className="mobile-text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 d-flex justify-content-center justify-content-lg-start">
                  <Logo className="h-12" />
                </div>
                <p className="text-muted fs-6 lh-lg pe-lg-4">
                  Advancing accessibility and affordability of radiology services internationally.
                  Join our global network of excellence to elevate your radio-diagnostic operations with precision technology.
                </p>
              </motion.div>
            </Col>
            <Col lg={7}>
              <Row className="g-4">
                <Col md={4} className="mobile-text-center">
                  <h6 className="footer-heading mb-4 text-dark">Company</h6>
                  <Nav className="flex-column gap-3">
                    <Nav.Link href="#about" className="footer-link p-0">About Us</Nav.Link>
                    <Nav.Link href="#services" className="footer-link p-0">Services</Nav.Link>
                    <Nav.Link href="#why-us" className="footer-link p-0">Why Choose Us</Nav.Link>
                    <Nav.Link href="#contact" className="footer-link p-0">Contact</Nav.Link>
                  </Nav>
                </Col>
                <Col md={4} className="mobile-text-center">
                  <h6 className="footer-heading mb-4 text-dark">Services</h6>
                  <Nav className="flex-column gap-3">
                    <Nav.Link href="#" className="footer-link p-0">Teleradiology</Nav.Link>
                    <Nav.Link href="#" className="footer-link p-0">Audit Services</Nav.Link>
                    <Nav.Link href="#" className="footer-link p-0">Quality Support</Nav.Link>
                  </Nav>
                </Col>
                <Col md={4} className="mobile-text-center">
                  <h6 className="footer-heading mb-4 text-dark">Follow Us</h6>
                  <p className="small text-muted mb-4 d-none d-lg-block">Connect with us on our social platforms for the latest updates.</p>
                  <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                    <a href="#" className="footer-social-icon facebook"><Facebook size={18} /></a>
                    <a href="#" className="footer-social-icon twitter"><Twitter size={18} /></a>
                    <a href="#" className="footer-social-icon linkedin"><Linkedin size={18} /></a>
                    <a href="#" className="footer-social-icon instagram"><Instagram size={18} /></a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="pt-5 border-top border-light d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="small text-muted mb-0 order-2 order-md-1">
              © 2026 <span className="fw-bold text-dark">Radgram Healthcare</span>. All rights reserved.
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
