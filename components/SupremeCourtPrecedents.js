'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Gavel, Scale, BookOpen, ShieldCheck, ChevronRight, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SupremeCourtPrecedents() {
  const [activeCase, setActiveCase] = useState('jacob');

  const judgments = [
    {
      id: 'jacob',
      title: 'Jacob Mathew v. State of Punjab',
      citation: '(2005) 6 SCC 1 • 3-Judge Bench',
      badge: 'Landmark Criminal Shield',
      principle: 'No Criminal Prosecution or Arrest of Doctors without Independent Medical Board Review',
      summary: 'The Supreme Court of India laid down definitive guidelines to protect medical practitioners from motivated and malicious prosecution under Section 304A IPC (now Section 106 BNS).',
      shieldPoints: [
        'A private complaint against a doctor cannot be entertained by a magistrate without credible medical opinion.',
        'Investigating police officers must not arrest or prosecute a doctor unless an independent medical committee certifies gross negligence.',
        'Standard of negligence required for criminal liability is far higher than civil negligence (mens rea / gross recklessness required).',
        'Doctors cannot be held criminally liable merely because patient demise occurred during treatment.'
      ],
      impact: 'Absolute mandatory protection cited by Five Eyes to immediately stall police inquiries and quash FIRs.'
    },
    {
      id: 'martin',
      title: 'Martin F. D\'Souza v. Mohd. Ishfaq',
      citation: '(2009) 3 SCC 1 • Supreme Court of India',
      badge: 'Consumer Court Filter',
      principle: 'Consumer Forums Must Seek Expert Opinion Before Issuing Notice to Doctors',
      summary: 'The Supreme Court held that consumer courts and criminal courts should not issue summons or notices to medical practitioners as a matter of routine without prima facie medical expert verification.',
      shieldPoints: [
        'Courts should not issue notice to a doctor without first seeking an opinion from an expert doctor in the same field.',
        'Courts are not experts in medical science and should refrain from substituting their own wisdom for doctors\' judgment.',
        'Protection of doctors against harassment is essential for fearless clinical decision-making in critical care.',
        'Prevents defensive medicine which ultimately damages patient care.'
      ],
      impact: 'Critical authority to contest preliminary notices and prevent unnecessary consumer court harassment.'
    },
    {
      id: 'kusum',
      title: 'Kusum Sharma & Ors v. Batra Hospital',
      citation: '(2010) 3 SCC 480 • Supreme Court of India',
      badge: '11 Golden Principles',
      principle: 'Clear Distinction Between Error of Judgment and Actionable Medical Negligence',
      summary: 'The Supreme Court formulated 11 golden principles defining the boundaries of medical negligence and safeguarding physicians who adopt recognized surgical practices.',
      shieldPoints: [
        'Negligence cannot be attributed to a doctor so long as they performed their duties with reasonable skill and competence.',
        'Mere deviation from one recognized school of thought to another does not constitute negligence.',
        'An error of judgment in clinical diagnosis or surgical procedure is NOT medical negligence.',
        'Doctors do not guarantee successful recovery in every clinical procedure.'
      ],
      impact: 'The foundational benchmark used by Dr. Pankaj Vats in drafting consumer commission written statements.'
    },
    {
      id: 'shantha',
      title: 'Indian Medical Association v. V.P. Shantha',
      citation: '(1995) 6 SCC 651 • Supreme Court Constitution Bench',
      badge: 'CPA Jurisprudence',
      principle: 'Applicability of Consumer Protection Act to Medical Services',
      summary: 'Landmark Constitution Bench ruling bringing healthcare services under the ambit of "Service" under Section 2(1)(o) of the Consumer Protection Act, with key exemptions.',
      shieldPoints: [
        'Treatment rendered completely free of charge to all patients is excluded from CPA jurisdiction.',
        'Hospitals charging paying patients while treating poor patients free remain under CPA jurisdiction.',
        'Employer-sponsored insurance schemes and third-party reimbursement count as consideration.',
        'Established that medical professionals owe a threefold duty of care: deciding whether to undertake case, deciding treatment, and administering treatment.'
      ],
      impact: 'Determines jurisdictional validity and consumer complaint maintainability in dispute cases.'
    }
  ];

  const currentCase = judgments.find(j => j.id === activeCase) || judgments[0];

  return (
    <section id="precedents" className="precedents-section section-spacing">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Gavel size={14} />
            <span>Constitutional Jurisprudence</span>
          </div>
          <h2 className="section-title">
            Landmark Supreme Court Rulings <span className="text-gold">Shielding Doctors</span>
          </h2>
          <p className="section-subtitle">
            Authoritative legal precedents analyzed and wielded by Five Eyes Medico-Legal Consultants 
            to protect physicians and hospitals from frivolous allegations and arbitrary police interference.
          </p>
        </div>

        {/* Interactive Case Selector Bar */}
        <div className="case-selector-bar">
          {judgments.map((item) => {
            const isSelected = activeCase === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCase(item.id)}
                className={`case-tab-btn ${isSelected ? 'case-tab-active' : ''}`}
              >
                <Scale size={16} />
                <div className="case-tab-text">
                  <span className="case-tab-name">{item.title}</span>
                  <span className="case-tab-badge">{item.badge}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Case Breakdown Card */}
        <div className="case-detail-card glass-panel">
          <div className="case-card-header">
            <div>
              <span className="citation-pill">{currentCase.citation}</span>
              <h3 className="case-heading">{currentCase.title}</h3>
              <div className="case-core-principle">
                <Gavel size={18} className="gavel-icon" />
                <span>{currentCase.principle}</span>
              </div>
            </div>
            <div className="case-badge-pill">{currentCase.badge}</div>
          </div>

          <p className="case-summary-text">{currentCase.summary}</p>

          <div className="shield-points-box">
            <h4 className="shield-box-title">Core Legal Safeguards Established for Doctors:</h4>
            <div className="shield-grid">
              {currentCase.shieldPoints.map((pt, idx) => (
                <div key={idx} className="shield-item">
                  <CheckCircle2 size={18} className="shield-check" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-card-footer">
            <div className="impact-statement">
              <strong>Five Eyes Application:</strong> {currentCase.impact}
            </div>
            <Link href="/case-assessment" className="btn-primary">
              <span>Apply This Precedent to Your Case</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .case-selector-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .case-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.15rem 1.25rem;
          background: rgba(14, 25, 45, 0.75);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          cursor: pointer;
          text-align: left;
          transition: var(--transition-fast);
        }

        .case-tab-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
          color: var(--accent-gold-light);
        }

        .case-tab-active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(14, 25, 45, 0.95) 100%);
          border-color: var(--accent-gold);
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
        }

        .case-tab-text {
          display: flex;
          flex-direction: column;
        }

        .case-tab-name {
          font-weight: 700;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .case-tab-badge {
          font-size: 0.72rem;
          color: var(--accent-gold-light);
          margin-top: 0.2rem;
        }

        .case-detail-card {
          padding: 2.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.9) 0%, rgba(5, 11, 20, 0.98) 100%);
        }

        .case-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .citation-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-teal-light);
          background: rgba(14, 165, 233, 0.12);
          border: 1px solid rgba(14, 165, 233, 0.25);
          padding: 0.2rem 0.65rem;
          border-radius: 4px;
          margin-bottom: 0.65rem;
        }

        .case-heading {
          font-size: 1.85rem;
          margin-bottom: 0.5rem;
        }

        .case-core-principle {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.05rem;
          color: var(--accent-gold-light);
          font-weight: 700;
        }

        .gavel-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .case-badge-pill {
          background: rgba(212, 175, 55, 0.15);
          color: var(--accent-gold-light);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .case-summary-text {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .shield-points-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          margin-bottom: 2rem;
        }

        .shield-box-title {
          font-size: 1.05rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .shield-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .shield-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .shield-check {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .case-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .impact-statement {
          font-size: 0.92rem;
          color: var(--text-secondary);
          max-width: 650px;
        }

        .impact-statement strong {
          color: var(--accent-gold-light);
        }

        @media (max-width: 1024px) {
          .case-selector-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          .shield-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .case-selector-bar {
            grid-template-columns: 1fr;
          }
          .case-heading {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
