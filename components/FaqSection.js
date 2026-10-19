'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Scale, ArrowRight, MessageSquare } from 'lucide-react';

export default function FaqSection({ hideHeader = false }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What should a doctor do immediately if police summon them or register an FIR following patient demise?',
      a: 'Never panic or tamper with clinical records. Under the landmark Supreme Court ruling in Jacob Mathew v. State of Punjab (2005), police officers CANNOT register a criminal FIR or arrest a doctor under Section 106 BNS (formerly Section 304A IPC) without first securing an independent expert opinion from a government medical board. Immediately contact Five Eyes Medico-Legal helpline (+91 97280 99999). We will submit an immediate representation before the Superintendent of Police / IO citing Supreme Court mandates to stay coercive action.'
    },
    {
      q: 'Can the District Appropriate Authority (DAA) seal an ultrasound machine for minor clerical errors in Form F?',
      a: 'Section 29 and Rule 9 of the PC-PNDT Act require strict maintenance of records, but procedural guidelines distinguish between deliberate sex-selection and clerical lapses. However, aggressive inspection teams often seal machines arbitrarily under Section 30. Having served as a District Appropriate Authority himself, Dr. Pankaj Vats and our legal team file emergency de-sealing petitions before the Sessions Court or High Court within 48 to 72 hours, demonstrating absence of mens rea.'
    },
    {
      q: 'What is the fundamental legal difference between a Medical Complication and Medical Negligence?',
      a: 'Under the 11 golden principles laid down by the Supreme Court in Kusum Sharma v. Batra Hospital (2010), a doctor is not negligent simply because a complication arose or the treatment failed. Negligence requires establishing a recognized duty of care, a blatant breach below reasonable medical standards (Bolam test), and direct causation of injury. An accepted surgical risk or error of clinical judgment between two recognized paths is NOT negligence.'
    },
    {
      q: 'Can a private hospital legally detain a patient or withhold a deceased body for unpaid hospital bills?',
      a: 'NO. The High Courts across India (including Delhi, Bombay, and Punjab & Haryana High Courts) have repeatedly held that hospital detention of a living patient or deceased mortal remains for billing dispute constitutes illegal confinement and violation of Article 21 of the Constitution. Hospitals must release the patient/body immediately and recover disputed fees solely through civil judicial recourse. Five Eyes issues immediate emergency legal notices in such disputes.'
    },
    {
      q: 'What is the Medico-Legal Club and what protection does it provide to practicing doctors?',
      a: 'The Medico-Legal Club is Five Eyes\' premier annual risk management membership program. It provides 365 days of proactive legal shielding: a 24/7 emergency distress hotline for sudden police or patient unrest, routine audit of high-risk surgical consent forms and PC-PNDT records, priority direct access to Dr. Pankaj Vats, and representation before consumer forums and medical councils.'
    },
    {
      q: 'How does Five Eyes assist trial advocates in homicide, accident, and medical malpractice cases?',
      a: 'We collaborate closely with practicing trial advocates by translating dense medical records into compelling legal evidence. Our AIIMS-trained forensic faculty independently re-scrutinizes post-mortem autopsy reports, histopathology findings, and viscera toxicology logs, and drafts pinpoint, medically lethal cross-examination questionnaires to expose bias or contradictions in medical board testimonies.'
    },
    {
      q: 'Are informed consent forms signed by family members or attendants legally valid if the patient is conscious?',
      a: 'Under Indian law and NMC regulations, if a patient is an adult of sound mind, only the patient\'s own informed consent is legally binding. Attendant signatures alone without the patient\'s endorsement (unless unconscious or mentally incapacitated) leave the treating surgeon severely exposed to civil battery and consumer negligence liability. Five Eyes assists hospitals in auditing and restructuring their entire informed consent architecture.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="faq-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <HelpCircle size={14} />
              <span>Medical Jurisprudence Knowledge Base</span>
            </div>
            <h2 className="section-title">
              Frequently Asked <span className="text-gold">Medico-Legal Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear, authoritative answers from Dr. Pankaj Vats on doctor defense, PC-PNDT inspections, 
              hospital billing disputes, and medical negligence precedents.
            </p>
          </div>
        )}

        <div className="faq-accordion-box">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-panel ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Strip */}
        <div className="faq-cta-strip glass-panel">
          <div className="faq-cta-text">
            <h4>Have a Specific Case or Urgent Legal Notice Not Covered Here?</h4>
            <p>Dr. Pankaj Vats provides confidential case evaluations directly from our Gurugram chamber.</p>
          </div>
          <div className="faq-cta-actions">
            <Link href="/case-assessment" className="btn-primary">
              <span>Request Free Case Review</span>
              <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20have%20a%20specific%20medico-legal%20query."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={17} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-accordion-box {
          max-width: 960px;
          margin: 0 auto 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .faq-item {
          border: 1px solid var(--border-glass);
          background: rgba(14, 25, 45, 0.7);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-fast);
        }

        .faq-item:hover {
          border-color: rgba(212, 175, 55, 0.3);
        }

        .faq-item-open {
          border-color: var(--accent-gold);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.9) 0%, rgba(5, 11, 20, 0.95) 100%);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.35rem 1.75rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1.25rem;
        }

        .faq-question-text {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .faq-toggle-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .faq-answer-content {
          padding: 0 1.75rem 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 1rem;
        }

        .faq-cta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2.25rem 2.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
          max-width: 960px;
          margin: 0 auto;
        }

        .faq-cta-text h4 {
          font-size: 1.25rem;
          margin-bottom: 0.35rem;
        }

        .faq-cta-text p {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .faq-cta-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .faq-question-btn {
            padding: 1.15rem 1.25rem;
          }
          .faq-question-text {
            font-size: 0.95rem;
          }
          .faq-answer-content {
            padding: 0 1.25rem 1.25rem;
          }
          .faq-cta-strip {
            flex-direction: column;
            align-items: stretch;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
