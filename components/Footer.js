'use client';

import Link from 'next/link';
import { Scale, Phone, Mail, MapPin, MessageSquare, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* Pre-Footer Action Banner */}
      <div className="pre-footer-banner">
        <div className="container pre-footer-content">
          <div className="pre-footer-text">
            <h3>Facing an Acute Medico-Legal Emergency or Inspection?</h3>
            <p>Direct priority line to Dr. Pankaj Vats and our senior legal defense desk for immediate relief.</p>
          </div>
          <div className="pre-footer-actions">
            <a href="tel:+919728099999" className="btn-primary">
              <Phone size={18} />
              <span>Call +91 97280 99999</span>
            </a>
            <a 
              href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20have%20an%20urgent%20medico-legal%20situation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-badge">
                <Scale size={22} />
              </div>
              <div className="footer-brand-text">
                <div className="brand-name">FIVE EYES MEDICO-LEGAL</div>
                <div className="brand-sub">Dr. Pankaj Vats (M.D. AIIMS, LL.B.)</div>
              </div>
            </div>

            <p className="brand-desc">
              Combined group of medical, forensic, and legal experts working under the guidance of Dr. Pankaj Vats, 
              Dr. Subhash Mehta, and Prof. (Dr.) Rajiv Kumar. Founded in 2012 to shield doctors and healthcare establishments 
              from arbitrary prosecution under PC &amp; PNDT, MTP, CEA, and medical negligence statutes.
            </p>

            <div className="affil-tags">
              <span className="tag">Ex-Civil Surgeon Haryana</span>
              <span className="tag">AIIMS Forensic Dept Alumni</span>
              <span className="tag">Gurugram Chamber</span>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="footer-col">
            <h4 className="footer-col-title">Specialized Practice Areas</h4>
            <ul className="footer-links">
              <li><Link href="/services/medical-negligence-defense">Medical Negligence Defense (CPA &amp; BNS 106)</Link></li>
              <li><Link href="/services/pndt-compliance-desealing">PC-PNDT Machine De-Sealing &amp; Auditing</Link></li>
              <li><Link href="/services/mtp-act-compliance">MTP Act 2021 Statutory Compliance</Link></li>
              <li><Link href="/services/clinical-establishments-act">Clinical Establishments Act (CEA) SOPs</Link></li>
              <li><Link href="/services/ivf-art-surrogacy-compliance">IVF &amp; Surrogacy Act 2021 Protocols</Link></li>
              <li><Link href="/services/imaging-diagnostics-shield">Radiology &amp; Diagnostics Shield (AERB)</Link></li>
              <li><Link href="/services/autopsy-post-mortem-vetting">Autopsy &amp; Post-Mortem Legal Vetting</Link></li>
              <li><Link href="/services/cross-examination-advocates">Advocate Cross-Examination Questionnaires</Link></li>
              <li><Link href="/services/hospital-bill-audit">Hospital Over-Billing &amp; Fraud Audit</Link></li>
              <li><Link href="/services/second-opinion-malpractice">Impartial Second Opinions (Negligence vs. Complication)</Link></li>
            </ul>
          </div>

          {/* Col 3: Interactive Utilities */}
          <div className="footer-col">
            <h4 className="footer-col-title">Portals &amp; Tools</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Five Eyes &amp; Founding Mission</Link></li>
              <li><Link href="/case-assessment">Free Case Review &amp; Statutory Triage</Link></li>
              <li><Link href="/bill-auditor">PC-PNDT Compliance Self-Auditor</Link></li>
              <li><Link href="/bill-auditor">Hospital Over-Billing Estimator</Link></li>
              <li><Link href="/medico-legal-club">Medico-Legal Club (Risk Management)</Link></li>
              <li><Link href="/#precedents">Supreme Court Precedents Library</Link></li>
              <li><Link href="/conference">Workshops &amp; CMEs for Doctors</Link></li>
              <li><Link href="/faq">Medical Jurisprudence FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4: Chamber Coordinates */}
          <div className="footer-col">
            <h4 className="footer-col-title">Gurugram Headquarters</h4>
            <div className="chamber-address">
              <div className="addr-row">
                <MapPin size={17} className="addr-icon" />
                <span>
                  175, Ganpati Enclave, Near Vinayak Plaza,<br />
                  Opp. Bank of Maharashtra, Main Jharsa Road,<br />
                  Sector 15, Part II, Gurgaon, Haryana 122001
                </span>
              </div>
              <div className="addr-row">
                <Phone size={17} className="addr-icon" />
                <div>
                  <a href="tel:+919728099999" className="phone-link">+91 97280 99999 (24/7)</a>
                  <span className="phone-sep"> | </span>
                  <a href="tel:01242331555" className="phone-link">0124-233 1555</a>
                </div>
              </div>
              <div className="addr-row">
                <MessageSquare size={17} className="addr-icon text-whatsapp" />
                <a
                  href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  WhatsApp Direct Consultation
                </a>
              </div>
            </div>

            <div className="hours-card">
              <span className="hours-title">Chamber Timings:</span>
              <p>Mon - Sat: 9:00 AM – 7:00 PM<br /><small>(Prior Appointment Required)</small></p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Strip */}
        <div className="footer-disclaimer">
          <p>
            <strong>Statutory Disclaimer:</strong> Five Eyes Medico-Legal Consultants operates in strict compliance with the Advocates Act and Medical Council of India / National Medical Commission regulations. 
            Information provided on this portal is for professional medico-legal advisory and educational awareness purposes and does not constitute formal solicitation. 
            All client and doctor communications are safeguarded by strict confidentiality and legal-evidentiary privilege.
          </p>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left">
            <span>© 2012 – 2026 Five Eyes Medico-legal Consultants. All Rights Reserved.</span>
            <span className="domain-tag">medico-legalconsultant.com</span>
          </div>

          <div className="bottom-right">
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to top">
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-root {
          background: #020710;
          border-top: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--text-secondary);
          position: relative;
        }

        .pre-footer-banner {
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.98) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-bottom: 1px solid var(--border-glass);
          padding: 2.5rem 0;
        }

        .pre-footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.75rem;
        }

        .pre-footer-text h3 {
          font-size: 1.45rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .pre-footer-text p {
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .pre-footer-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-main {
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .footer-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(14, 25, 45, 0.8) 100%);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
        }

        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .brand-sub {
          font-size: 0.72rem;
          color: var(--accent-gold-light);
          font-weight: 600;
        }

        .brand-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .affil-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .tag {
          font-size: 0.72rem;
          padding: 0.2rem 0.55rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 4px;
          color: var(--accent-gold-light);
        }

        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin-bottom: 1.35rem;
          position: relative;
          padding-bottom: 0.65rem;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: var(--gold-gradient);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links li a {
          font-size: 0.86rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .footer-links li a:hover {
          color: var(--accent-gold);
          padding-left: 4px;
        }

        .chamber-address {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .addr-row {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          line-height: 1.5;
        }

        .addr-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .text-whatsapp {
          color: #25d366;
        }

        .phone-link {
          color: var(--text-primary);
          font-weight: 700;
        }

        .phone-link:hover {
          color: var(--accent-gold);
        }

        .phone-sep {
          color: var(--text-muted);
        }

        .whatsapp-link {
          color: #25d366;
          font-weight: 700;
        }

        .hours-card {
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
        }

        .hours-title {
          font-weight: 700;
          color: var(--accent-gold-light);
          display: block;
          margin-bottom: 0.2rem;
        }

        .footer-disclaimer {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .footer-disclaimer strong {
          color: var(--text-secondary);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
          font-size: 0.82rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .domain-tag {
          margin-left: 0.75rem;
          color: var(--accent-gold);
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: none;
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .scroll-top-btn:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (max-width: 650px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .pre-footer-content {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </footer>
  );
}
