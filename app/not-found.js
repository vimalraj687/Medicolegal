'use client';

import Link from 'next/link';
import { Scale, Home, ShieldAlert, ArrowRight, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="notfound-container section-spacing">
      <div className="container">
        <div className="notfound-card glass-panel">
          <div className="notfound-badge">
            <Scale size={28} />
          </div>

          <span className="error-code text-gold">404</span>
          <h1 className="notfound-title">Medico-Legal Reference Not Found</h1>

          <p className="notfound-desc">
            The page, statutory guideline, or case precedent you are looking for may have been moved, 
            updated to newer statutory provisions (e.g. transitioning from IPC/CrPC to BNS/BNSS), 
            or does not exist.
          </p>

          <div className="notfound-actions">
            <Link href="/" className="btn-primary">
              <Home size={18} />
              <span>Return to Main Portal</span>
            </Link>

            <Link href="/case-assessment" className="btn-secondary">
              <ShieldAlert size={18} />
              <span>Free Case Review</span>
              <ArrowRight size={16} />
            </Link>

            <a href="tel:+919728099999" className="btn-whatsapp">
              <Phone size={17} />
              <span>24/7 Distress Desk: +91 97280 99999</span>
            </a>
          </div>

          <div className="quick-directory">
            <div className="directory-title">Popular Medico-Legal Portals:</div>
            <div className="directory-links">
              <Link href="/services">Practice Areas</Link>
              <span className="dot">•</span>
              <Link href="/bill-auditor">PC-PNDT Compliance Auditor</Link>
              <span className="dot">•</span>
              <Link href="/medico-legal-club">Medico-Legal Club (Risk Retainer)</Link>
              <span className="dot">•</span>
              <Link href="/leadership">Dr. Pankaj Vats Profile</Link>
              <span className="dot">•</span>
              <Link href="/conference">Workshops &amp; CMEs</Link>
              <span className="dot">•</span>
              <Link href="/contact">Chamber Coordinates</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .notfound-container {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .notfound-card {
          max-width: 760px;
          margin: 0 auto;
          padding: 3.5rem 2.5rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
        }

        .notfound-badge {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .error-code {
          display: block;
          font-family: var(--font-serif);
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .notfound-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .notfound-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2.5rem;
          max-width: 620px;
          margin-left: auto;
          margin-right: auto;
        }

        .notfound-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .quick-directory {
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }

        .directory-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-light);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .directory-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .directory-links a {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .directory-links a:hover {
          color: var(--accent-gold);
        }

        .dot {
          color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 600px) {
          .notfound-card {
            padding: 2rem 1.5rem;
          }
          .notfound-title {
            font-size: 1.5rem;
          }
          .error-code {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
