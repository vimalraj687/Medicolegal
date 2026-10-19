'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  Award, 
  CheckCircle2, 
  Phone, 
  Stethoscope,
  AlertTriangle,
  Building2,
  Lock
} from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Forensic & Legal Experience', value: '34+ Yrs', desc: 'Govt. Civil Surgeon, PNDT Authority & Director' },
    { label: 'Doctors & Clinics Defended', value: '2,500+', desc: 'Across PC-PNDT, MTP, CPA & Criminal Inquiries' },
    { label: 'AIIMS & Law Pedigree', value: 'M.D. + LL.B.', desc: 'Forensic Medicine AIIMS Delhi + Law Graduate' },
    { label: 'Emergency Defense Cell', value: '24/7 Active', desc: 'Instant support for police notices & raid distress' },
  ];

  return (
    <section className="hero-section">
      {/* Background with Ambient Gradient */}
      <div className="hero-bg-wrapper">
        <div className="hero-bg-overlay"></div>
        <div className="hero-glow-gold"></div>
        <div className="hero-glow-teal"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-left">
            <div className="hero-badge-container">
              <div className="section-badge pulse-glow">
                <Scale size={14} className="badge-icon" />
                <span>Five Eyes Medico-Legal Consultants • Founded 2012</span>
              </div>
            </div>

            <h1 className="hero-title">
              Protecting <span className="text-gold">Doctors & Clinics</span> <br />
              From Legal Venom & Arbitrary Harassment
            </h1>

            <p className="hero-lead">
              Founded under the leadership of <strong>Dr. Pankaj Vats</strong> [M.D. Forensic Medicine, AIIMS Delhi & LL.B. (Hon's), Former Civil Surgeon & District Appropriate Authority], 
              we are a combined force of medical, forensic, and legal experts dedicated to shielding medical practitioners and clinical establishments from 
              unjust <strong>PC-PNDT machine seizures</strong>, frivolous <strong>medical negligence lawsuits</strong>, <strong>MTP</strong> inspections, and <strong>CEA</strong> compliance traps.
            </p>

            {/* Action Button Row */}
            <div className="hero-cta-group">
              <Link href="/case-assessment" className="btn-primary hero-btn-main">
                <ShieldCheck size={20} />
                <span>Free Case Review</span>
                <ArrowRight size={18} />
              </Link>

              <Link href="/medico-legal-club" className="btn-secondary hero-btn-sec">
                <Building2 size={20} />
                <span>Medico-Legal Club (24/7 Shield)</span>
              </Link>

              <a 
                href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20urgently%20need%20medico-legal%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp hero-btn-wa"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Dr. Vats</span>
              </a>
            </div>

            {/* Micro Guarantee Trust Row */}
            <div className="hero-guarantees">
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Ex-District Appropriate Authority (PNDT) Inside Knowledge</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Jacob Mathew Supreme Court Criminal Negligence Shield</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>100% Strict Doctor-Attorney Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Dr. Pankaj Vats */}
          <div className="hero-right">
            <div className="founder-card glass-panel">
              <div className="founder-image-wrap">
                <Image
                  src="/images/dr_pankaj_vats.jpg"
                  alt="Dr. Pankaj Vats - Chairman Five Eyes Medico-Legal Consultants"
                  width={560}
                  height={380}
                  priority
                  className="founder-photo"
                />
                <div className="founder-overlay-badge">
                  <Award size={16} />
                  <span>Chairman &amp; Executive Director</span>
                </div>
              </div>

              <div className="founder-info-box">
                <div className="founder-name">Dr. Pankaj Vats</div>
                <div className="founder-creds">
                  M.D. (AIIMS, New Delhi), LL.B. (Hon&#x27;s, MDU)
                </div>
                <p className="founder-summary">
                  Postgraduate in Forensic Medicine &amp; Toxicology from AIIMS Delhi with 34+ years of medical sector experience. 
                  Former Civil Surgeon, District Appropriate Authority (PC-PNDT), and Director of Health Services, Govt. of Haryana.
                </p>

                <div className="emergency-callout">
                  <div className="callout-icon">
                    <Phone size={18} />
                  </div>
                  <div className="callout-text">
                    <span className="callout-label">24/7 Medico-Legal Distress Cell:</span>
                    <a href="tel:+919728099999" className="callout-number">+91 97280 99999 / 0124-233 1555</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Bar */}
        <div className="hero-stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card glass-panel">
              <div className="stat-val text-gold">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: 3.5rem;
          padding-bottom: 4.5rem;
          overflow: hidden;
        }

        .hero-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
                      radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.08) 0%, transparent 60%);
        }

        .hero-glow-gold {
          position: absolute;
          width: 500px;
          height: 500px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%);
          filter: blur(80px);
        }

        .hero-glow-teal {
          position: absolute;
          width: 450px;
          height: 450px;
          bottom: -50px;
          right: 5%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%);
          filter: blur(80px);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        .hero-badge-container {
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: 3.1rem;
          line-height: 1.18;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .hero-lead {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 660px;
        }

        .hero-lead strong {
          color: var(--text-primary);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .hero-btn-main {
          padding: 0.95rem 1.85rem;
          font-size: 1rem;
        }

        .hero-btn-sec {
          padding: 0.95rem 1.65rem;
          font-size: 0.95rem;
        }

        .hero-btn-wa {
          padding: 0.95rem 1.45rem;
        }

        .hero-guarantees {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        /* Founder Card */
        .founder-card {
          padding: 1.25rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: var(--radius-lg);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.85) 0%, rgba(5, 11, 20, 0.95) 100%);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.15);
        }

        .founder-image-wrap {
          position: relative;
          width: 100%;
          height: 290px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.25rem;
        }

        .founder-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .founder-card:hover .founder-photo {
          transform: scale(1.03);
        }

        .founder-overlay-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(5, 11, 20, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold-light);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .founder-info-box {
          padding: 0.5rem 0.25rem;
        }

        .founder-name {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .founder-creds {
          font-size: 0.88rem;
          color: var(--accent-gold-light);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .founder-summary {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .emergency-callout {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
        }

        .callout-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ef4444;
          flex-shrink: 0;
        }

        .callout-text {
          display: flex;
          flex-direction: column;
        }

        .callout-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          color: #fca5a5;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .callout-number {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        .callout-number:hover {
          color: var(--accent-gold);
        }

        /* Stats Grid */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          padding: 1.5rem;
          text-align: center;
        }

        .stat-val {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }

        .stat-label {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
