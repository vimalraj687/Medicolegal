'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Phone, MessageSquare, Menu, X, Shield, AlertCircle, ChevronDown, Award } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/services' },
    { name: 'Free Case Review', href: '/case-assessment' },
    { name: 'Compliance Auditor', href: '/bill-auditor' },
    { name: 'Medico-Legal Club', href: '/medico-legal-club' },
    { name: 'Dr. Pankaj Vats', href: '/leadership' },
    { name: 'Events & CMEs', href: '/conference' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="navbar-wrapper">
      {/* Top Advisory Bar */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="top-banner-left">
            <span className="live-dot"></span>
            <span className="banner-text">
              <strong>Emergency Medico-Legal Helpline:</strong> Immediate Relief in Police Notice, PC-PNDT Raid & Negligence FIR
            </span>
          </div>
          <div className="top-banner-right">
            <a href="tel:+919728099999" className="top-banner-link">
              <Phone size={13} />
              <span>+91 97280 99999</span>
            </a>
            <span className="divider">|</span>
            <a href="tel:01242331555" className="top-banner-link hide-mobile">
              <span>0124-233 1555</span>
            </a>
            <span className="divider hide-mobile">|</span>
            <a
              href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats%20(Five%20Eyes%20Medico-Legal),%20I%20need%20urgent%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="top-banner-whatsapp"
            >
              <MessageSquare size={13} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <Link href="/" className="logo-brand">
            <div className="logo-badge">
              <Scale size={22} className="scale-icon" />
            </div>
            <div className="logo-text-group">
              <div className="logo-title">FIVE EYES MEDICO-LEGAL</div>
              <div className="logo-subtitle">
                <span>Dr. Pankaj Vats, M.D. (AIIMS), LL.B.</span>
                <span className="jurisdiction-badge">Gurugram Chamber</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-item ${isActive(link.href) ? 'nav-item-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="nav-actions">
            <a href="tel:+919728099999" className="btn-primary emergency-btn">
              <Shield size={16} />
              <span>24/7 Defense Line</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-container">
              <div className="mobile-links-list">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mobile-link ${isActive(link.href) ? 'mobile-link-active' : ''}`}
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="mobile-action-box">
                <a
                  href="tel:+919728099999"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone size={18} />
                  <span>Call Emergency Line: +91 97280 99999</span>
                </a>
                <a
                  href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20need%20urgent%20medico-legal%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp Direct</span>
                </a>
                <div className="mobile-address-note">
                  <small>Chamber: 175, Ganpati Enclave, Sector 15, Part II, Gurgaon | 0124-233 1555</small>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .top-banner {
          background: #020710;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding: 0.45rem 0;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .top-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .top-banner-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 8px #ef4444;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .banner-text strong {
          color: var(--accent-gold-light);
        }

        .top-banner-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .top-banner-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .top-banner-link:hover {
          color: var(--accent-gold);
        }

        .divider {
          color: rgba(255, 255, 255, 0.2);
        }

        .top-banner-whatsapp {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #25d366;
          font-weight: 600;
        }

        .main-nav {
          position: relative;
          background: rgba(5, 11, 20, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glass);
          transition: var(--transition-normal);
        }

        .main-nav.scrolled {
          background: rgba(4, 9, 17, 0.96);
          border-bottom-color: rgba(212, 175, 55, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.9rem;
          padding-bottom: 0.9rem;
          gap: 1.5rem;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-shrink: 0;
        }

        .logo-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(14, 25, 45, 0.9) 100%);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
          transition: var(--transition-normal);
        }

        .logo-brand:hover .logo-badge {
          transform: rotate(5deg) scale(1.05);
          border-color: var(--accent-gold);
        }

        .logo-title {
          font-family: var(--font-serif);
          font-weight: 800;
          font-size: 1.12rem;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .logo-subtitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .jurisdiction-badge {
          background: rgba(212, 175, 55, 0.15);
          color: var(--accent-gold-light);
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
          font-size: 0.68rem;
          font-weight: 700;
          border: 1px solid rgba(212, 175, 55, 0.25);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          flex-wrap: wrap;
        }

        .nav-item {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.4rem 0.2rem;
          position: relative;
          transition: var(--transition-fast);
          white-space: nowrap;
        }

        .nav-item:hover {
          color: var(--accent-gold-light);
        }

        .nav-item-active {
          color: var(--accent-gold);
        }

        .nav-item-active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gold-gradient);
          border-radius: 2px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .emergency-btn {
          padding: 0.65rem 1.15rem;
          font-size: 0.85rem;
          border-radius: 8px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.45rem;
          border-radius: 8px;
          cursor: pointer;
        }

        .mobile-menu-overlay {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(5, 11, 20, 0.98);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.5rem 1.25rem 2rem;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
        }

        .mobile-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .mobile-link {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--text-secondary);
          border: 1px solid transparent;
        }

        .mobile-link:hover, .mobile-link-active {
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
          color: var(--accent-gold);
        }

        .mobile-action-box {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .w-full {
          width: 100%;
        }

        .mobile-address-note {
          text-align: center;
          color: var(--text-muted);
          padding-top: 0.5rem;
        }

        @media (max-width: 1100px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-menu-overlay {
            display: block;
          }
          .hide-mobile {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .emergency-btn {
            display: none;
          }
          .logo-subtitle span:last-child {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
