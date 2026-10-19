'use client';

import Link from 'next/link';
import {
  ShieldAlert, Receipt, Microscope, Scale, Users, Calendar,
  HelpCircle, Mail, ArrowRight, CheckCircle2, Award, Activity, HeartHandshake, Gavel
} from 'lucide-react';

export default function QuickLinks() {
  const pages = [
    {
      href: '/services',
      icon: Scale,
      title: '10 Medico-Legal Practice Areas',
      desc: 'Doctor defense, PC-PNDT machine de-sealing, MTP Act, CEA compliance, and forensic autopsy review.',
      badge: 'Core Services',
      color: 'gold',
    },
    {
      href: '/case-assessment',
      icon: ShieldAlert,
      title: 'Free Case Review & Triage',
      desc: 'Interactive 4-step triage directly reviewed by Dr. Pankaj Vats to identify your immediate legal defense.',
      badge: 'Free Consultation',
      color: 'teal',
    },
    {
      href: '/bill-auditor',
      icon: Activity,
      title: 'PC-PNDT Compliance Auditor',
      desc: 'Audit your ultrasound centre against DAA inspection parameters and calculate machine sealing risk.',
      badge: 'Diagnostic Tool',
      color: 'gold',
    },
    {
      href: '/bill-auditor',
      icon: Receipt,
      title: 'Hospital Bill Forensic Auditor',
      desc: 'Reconcile disputed medical invoices, detect unbundled consumables, and audit NPPA pricing compliance.',
      badge: 'Financial Audit',
      color: 'teal',
    },
    {
      href: '/medico-legal-club',
      icon: HeartHandshake,
      title: 'Medico-Legal Club (24/7 Armor)',
      desc: 'Annual risk management retainer membership offering 24/7 emergency raid panic helpline & routine audits.',
      badge: 'Doctor Shield',
      color: 'gold',
    },
    {
      href: '/#precedents',
      icon: Gavel,
      title: 'Supreme Court Precedents Library',
      desc: 'Explore Jacob Mathew guidelines, Kusum Sharma 11 golden principles, and Martin D\'Souza protections.',
      badge: 'Jurisprudence',
      color: 'teal',
    },
    {
      href: '/leadership',
      icon: Users,
      title: 'Dr. Pankaj Vats & Council',
      desc: 'AIIMS Forensic Medicine postgraduate, LL.B. with honors, former Civil Surgeon and PNDT Authority.',
      badge: 'Leadership Profile',
      color: 'gold',
    },
    {
      href: '/conference',
      icon: Calendar,
      title: 'Workshops & CME Trainings',
      desc: 'Hands-on legal masterclasses on Form F compliance, Section 106 BNS defense, and hospital crisis protocols.',
      badge: 'CME Events',
      color: 'teal',
    },
  ];

  const trustPoints = [
    '34+ years medical, forensic & administrative expertise in Haryana & Delhi NCR',
    'Led by Dr. Pankaj Vats, M.D. (AIIMS, New Delhi), LL.B. (Hon\'s)',
    'Former District Appropriate Authority under PC-PNDT Act & Civil Surgeon',
    'Over 2,500 doctors, clinics, and hospital facilities successfully protected',
  ];

  return (
    <section className="quicklinks-section section-spacing">
      <div className="container">
        {/* Trust strip */}
        <div className="trust-strip glass-panel">
          {trustPoints.map((pt, i) => (
            <div key={i} className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        {/* Section heading */}
        <div className="ql-header text-center">
          <div className="section-badge">
            <Award size={14} />
            <span>Comprehensive Legal Portal</span>
          </div>
          <h2 className="ql-title">
            Explore All <span className="text-gold">Five Eyes Specialized Portals</span>
          </h2>
          <p className="ql-subtitle">
            From interactive statutory risk calculators to landmark Supreme Court judgment compendiums, 
            access every specialized resource designed to protect medical practice in India.
          </p>
        </div>

        {/* Cards grid */}
        <div className="ql-grid">
          {pages.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link key={i} href={p.href} className="ql-card glass-panel">
                <div className="ql-card-top">
                  <div className={`ql-icon-wrap ql-icon-${p.color}`}>
                    <Icon size={22} />
                  </div>
                  <span className={`ql-badge ql-badge-${p.color}`}>{p.badge}</span>
                </div>
                <h3 className="ql-card-title">{p.title}</h3>
                <p className="ql-card-desc">{p.desc}</p>
                <div className="ql-card-link">
                  <span>Access Portal</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .trust-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem 2.5rem;
          padding: 1.75rem 2.25rem;
          margin-bottom: 4.5rem;
          border: 1px solid rgba(212, 175, 55, 0.25);
          background: rgba(14, 25, 45, 0.6);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .trust-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .ql-header {
          margin-bottom: 3.5rem;
        }

        .ql-title {
          font-size: 2.3rem;
          margin-bottom: 0.75rem;
        }

        .ql-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto;
        }

        .ql-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .ql-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-glass);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.7) 0%, rgba(5, 11, 20, 0.85) 100%);
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
        }

        .ql-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .ql-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .ql-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ql-icon-gold {
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: var(--accent-gold);
        }

        .ql-icon-teal {
          background: rgba(14, 165, 233, 0.12);
          border: 1px solid rgba(14, 165, 233, 0.3);
          color: var(--accent-teal-light);
        }

        .ql-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
        }

        .ql-badge-gold {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold-light);
          border: 1px solid rgba(212, 175, 55, 0.25);
        }

        .ql-badge-teal {
          background: rgba(14, 165, 233, 0.1);
          color: var(--accent-teal-light);
          border: 1px solid rgba(14, 165, 233, 0.25);
        }

        .ql-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.65rem;
        }

        .ql-card-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .ql-card-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-gold);
          border-top: 1px solid var(--border-glass);
          padding-top: 0.85rem;
          transition: var(--transition-fast);
        }

        .ql-card:hover .ql-card-link {
          color: var(--accent-gold-light);
          gap: 0.65rem;
        }

        @media (max-width: 1200px) {
          .ql-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .trust-strip {
            grid-template-columns: 1fr;
            padding: 1.25rem;
          }
          .ql-grid {
            grid-template-columns: 1fr;
          }
          .ql-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
