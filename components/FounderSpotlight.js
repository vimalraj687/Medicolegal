'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, GraduationCap, ShieldCheck, Stethoscope, Scale, ArrowRight, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function FounderSpotlight() {
  const credentials = [
    {
      title: 'M.D. (Forensic Medicine & Toxicology)',
      org: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
      desc: 'Premier national institute training in post-mortem pathology, clinical toxicology, and medical jurisprudence.'
    },
    {
      title: 'LL.B. (Hon\'s in Law)',
      org: 'Maharshi Dayanand University (MDU), Rohtak',
      desc: 'Specialized legal scholarship in criminal procedure, constitutional writs, tort law, and medical statutory liability.'
    },
    {
      title: 'Ex-District Appropriate Authority & Civil Surgeon',
      org: 'Government of Haryana (26 Years Dedicated Service)',
      desc: 'Direct administrative authority executing PC-PNDT enforcement, inspection protocols, and health regulation.'
    },
    {
      title: 'Ex-Director of Health Services (Family Welfare)',
      org: 'State Supervisory Board under PC & PNDT Act',
      desc: 'Formulated state health directives, MTP compliance protocols, and supervised district medical boards.'
    }
  ];

  return (
    <section className="founder-section section-spacing">
      <div className="container">
        <div className="founder-wrapper glass-panel">
          <div className="founder-spotlight-grid">
            {/* Visual Column */}
            <div className="founder-visual-col">
              <div className="founder-photo-container">
                <Image
                  src="/images/dr_pankaj_vats.jpg"
                  alt="Dr. Pankaj Vats - Chairman Five Eyes Medico-Legal Consultants"
                  width={600}
                  height={500}
                  className="founder-main-img"
                />
                <div className="experience-stamp">
                  <span className="exp-num">34+</span>
                  <span className="exp-txt">Years at Intersection of Medicine &amp; Law</span>
                </div>
              </div>

              {/* Associate Experts Bar */}
              <div className="associates-bar">
                <div className="assoc-label">Senior Forensic &amp; Clinical Advisory Council:</div>
                <div className="assoc-names">
                  <div className="assoc-item">
                    <span className="assoc-title">Dr. Subhash Mehta</span>
                    <span className="assoc-sub">Senior Medico-Legal &amp; Clinical Expert</span>
                  </div>
                  <div className="assoc-item">
                    <span className="assoc-title">Prof. (Dr.) Rajiv Kumar</span>
                    <span className="assoc-sub">Forensic Medicine &amp; Toxicology Professor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="founder-content-col">
              <div className="section-badge">
                <Award size={14} />
                <span>Executive Leadership Profile</span>
              </div>

              <h2 className="founder-headline">
                Dr. Pankaj Vats <br />
                <span className="text-gold">M.D. (AIIMS, Delhi), LL.B. (Hon&#x27;s)</span>
              </h2>

              <p className="founder-mission-statement">
                &ldquo;A known medical complication is NOT negligence. Our founding mission at Five Eyes is to protect doctors and hospitals from bureaucratic intimidation, arbitrary sealing of ultrasound machines, and vexatious litigation, while championing absolute statutory compliance.&rdquo;
              </p>

              <p className="founder-bio-text">
                Dr. Pankaj Vats has dedicated over 34 years to the medical and health sectors across both governmental leadership and private healthcare defense. 
                Having served for 26 years in the Government of Haryana across top executive postings — including Civil Surgeon, Principal Medical Officer, 
                District Appropriate Authority under the PC-PNDT Act, and Director of Health Services — he brings unmatched authoritative insight 
                into both medical science and statutory prosecution mechanisms.
              </p>

              {/* Key Credentials Grid */}
              <div className="creds-list">
                {credentials.map((cred, i) => (
                  <div key={i} className="cred-card">
                    <div className="cred-icon-box">
                      <CheckCircle size={18} />
                    </div>
                    <div className="cred-info">
                      <div className="cred-title">{cred.title}</div>
                      <div className="cred-org">{cred.org}</div>
                      <div className="cred-desc">{cred.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="founder-cta-row">
                <Link href="/case-assessment" className="btn-primary">
                  <span>Schedule Consultation with Dr. Vats</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:+919728099999" className="btn-secondary">
                  <Phone size={17} />
                  <span>Chamber: +91 97280 99999</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founder-wrapper {
          padding: 3rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.92) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
        }

        .founder-spotlight-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .founder-photo-container {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          border: 1px solid var(--border-glass);
        }

        .founder-main-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .experience-stamp {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(5, 11, 20, 0.92);
          backdrop-filter: blur(10px);
          border: 1px solid var(--accent-gold);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .exp-num {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-gold);
          line-height: 1;
        }

        .exp-txt {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.3;
          max-width: 140px;
        }

        .associates-bar {
          margin-top: 1.5rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
        }

        .assoc-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-light);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .assoc-names {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .assoc-item {
          display: flex;
          flex-direction: column;
        }

        .assoc-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .assoc-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .founder-headline {
          font-size: 2.3rem;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        .founder-mission-statement {
          font-size: 1.05rem;
          font-style: italic;
          color: var(--accent-gold-light);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          border-left: 3px solid var(--accent-gold);
          padding-left: 1rem;
        }

        .founder-bio-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .creds-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }

        .cred-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
        }

        .cred-icon-box {
          color: var(--accent-gold);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .cred-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .cred-org {
          font-size: 0.82rem;
          color: var(--accent-teal-light);
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .cred-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .founder-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .founder-spotlight-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .founder-wrapper {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
