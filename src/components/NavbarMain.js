import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function NavbarMain() {
    const [scrolled, setScrolled] = useState(false);
    const [navExpanded, setNavExpanded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const close = () => setNavExpanded(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Services' },
        { to: '/why-us', label: 'Why Choose Us' },
        { to: '/institutions', label: 'Institutions' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <Navbar
            expand="lg"
            fixed="top"
            expanded={navExpanded}
            onToggle={(val) => setNavExpanded(val)}
            className={`navbar-premium ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}
        >
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center" onClick={close}>
                    <Logo className="h-12 md-h-16" variant="logo2" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {navLinks.map(({ to, label }) => (
                            <Nav.Link
                                key={to}
                                as={NavLink}
                                to={to}
                                end={to === '/'}
                                className="mx-2 fw-bold"
                                onClick={close}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                        <Button
                            className="btn-premium ms-lg-4 shadow-sm border-0"
                            onClick={() => { navigate('/contact'); close(); }}
                        >
                            Get an Estimate
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
