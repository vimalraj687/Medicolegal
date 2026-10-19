'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  Scale, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Gavel, 
  BookOpen, 
  HelpCircle,
  Award
} from 'lucide-react';

export default function ServiceDetailView({ service, otherServices }) {
  return (
    <div className="service-detail-page">
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        badge={<><Scale size={14} /> {service.badge}</>}
        title={service.title}
        subtitle={service.heroSubtitle}
        breadcrumbs={[
          { label: 'Practice Areas', href: '/services' },
          { label: service.shortTitle }
        ]}
      />

      {/* Emergency Immediate Action Banner */}
      <div className="emergency-alert-strip">
        <div className="container strip-content">
          <div className="strip-left">
            <span className="live-dot-pulse"></span>
            <span>
              <strong>Facing an Acute Legal Notice, Police Inquiry, or Machine Sealing?</strong> Contact our 24/7 Defense Desk.
            </span>
          </div>
          <div className="strip-right">
            <a href="tel:+919728099999" className="strip-btn strip-call">
              <Phone size={14} />
              <span>+91 97280 99999</span>
            </a>
            <a
              href={`https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20urgently%20need%20defense%20guidance%20regarding%20${encodeURIComponent(service.shortTitle)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="strip-btn strip-wa"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container detail-layout section-spacing">
        <div className="detail-grid">
          {/* Main Column */}
          <main className="detail-main">
            {/* Overview / Lead */}
            <section className="content-card glass-panel">
              <h2 className="card-heading">
                Practice Area <span className="text-gold">Overview</span>
              </h2>
              <div className="statutory-badge-box">
                <Gavel size={16} className="text-gold" />
                <span><strong>Governing Law:</strong> {service.statutoryFramework}</span>
              </div>
              <p className="lead-text">{service.leadSummary}</p>
            </section>

            {/* Statutory Provisions */}
            <section className="content-card glass-panel">
              <h2 className="card-heading">
                Key Statutory Provisions &amp; <span className="text-gold">Legal Framework</span>
              </h2>
              <p className="card-subtext">
                Authoritative legal benchmarks applied by Dr. Pankaj Vats to protect healthcare professionals:
              </p>
              <div className="provisions-grid">
                {service.keyProvisions.map((prov, i) => (
                  <div key={i} className="provision-item">
                    <div className="provision-badge">Section / Precedent</div>
                    <h3 className="provision-title">{prov.section}</h3>
                    <p className="provision-desc">{prov.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Threats / Allegations */}
            <section className="content-card glass-panel">
              <div className="threat-header">
                <AlertTriangle size={22} className="text-red" />
                <h2 className="card-heading text-red">Common Legal Risks &amp; Vulnerabilities Faced</h2>
              </div>
              <p className="card-subtext">
                Typical prosecution avenues, administrative notices, and complainant tactics encountered in this practice area:
              </p>
              <ul className="threats-list">
                {service.commonAllegations.map((allegation, i) => (
                  <li key={i} className="threat-item">
                    <span className="threat-bullet"></span>
                    <span>{allegation}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Five Eyes Defense Strategy */}
            <section className="content-card glass-panel">
              <div className="strategy-header">
                <ShieldCheck size={24} className="text-gold" />
                <h2 className="card-heading">
                  Five Eyes <span className="text-gold">Strategic Defense Architecture</span>
                </h2>
              </div>
              <p className="card-subtext">
                How our multidisciplinary team of medical professors, former civil surgeons, and High Court advocates shields you:
              </p>
              <div className="strategy-steps">
                {service.defenseStrategy.map((step, i) => (
                  <div key={i} className="strategy-step">
                    <div className="step-number">{i + 1}</div>
                    <div className="step-body">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Applicable Landmark Precedents */}
            {service.applicablePrecedents && service.applicablePrecedents.length > 0 && (
              <section className="content-card glass-panel">
                <h2 className="card-heading">
                  Binding Judicial <span className="text-gold">Precedents</span>
                </h2>
                <div className="precedents-list">
                  {service.applicablePrecedents.map((prec, i) => (
                    <div key={i} className="precedent-box">
                      <div className="prec-icon">
                        <BookOpen size={18} />
                      </div>
                      <div className="prec-info">
                        <h3 className="prec-title">{prec.title}</h3>
                        <p className="prec-highlight">{prec.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Preventive Compliance Checklist */}
            <section className="content-card glass-panel">
              <h2 className="card-heading">
                Proactive <span className="text-gold">Compliance Checklist</span>
              </h2>
              <p className="card-subtext">
                Essential safeguards every doctor, ultrasound centre, and clinical establishment should implement immediately:
              </p>
              <div className="checklist-items">
                {service.preventiveChecklist.map((item, i) => (
                  <div key={i} className="check-item">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Accordion */}
            <section className="content-card glass-panel">
              <h2 className="card-heading">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <div className="faqs-list">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="faq-box">
                    <h3 className="faq-question">
                      <HelpCircle size={17} className="text-gold flex-shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sticky Sidebar */}
          <aside className="detail-sidebar">
            {/* Consultation Card */}
            <div className="sidebar-card glass-panel consultation-box">
              <span className="sidebar-badge">Confidential Chamber Review</span>
              <h3 className="sidebar-title">Facing an Acute Notice or Dispute?</h3>
              <p className="sidebar-desc">
                Submit your case documents for confidential strategic review by Dr. Pankaj Vats [M.D. AIIMS, LL.B.].
              </p>
              <Link href="/case-assessment" className="btn-primary w-full text-center">
                <span>Free Case Review</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20need%20urgent%20guidance%20on%20${encodeURIComponent(service.shortTitle)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Dr. Vats</span>
              </a>
              <div className="sidebar-privilege">
                <ShieldCheck size={16} />
                <span>Strict Doctor-Attorney Confidentiality</span>
              </div>
            </div>

            {/* Founder Mini Spotlight */}
            <div className="sidebar-card glass-panel founder-mini">
              <div className="mini-badge">
                <Award size={14} />
                <span>Executive Counsel</span>
              </div>
              <h3 className="mini-name">Dr. Pankaj Vats</h3>
              <div className="mini-creds">M.D. (AIIMS, Delhi) • LL.B. (Hon&#x27;s)</div>
              <p className="mini-bio">
                Former Civil Surgeon, District Appropriate Authority (PC-PNDT), and Director of Health Services, Govt. of Haryana. 34+ years of medical &amp; legal mastery.
              </p>
              <a href="tel:+919728099999" className="mini-call">
                <Phone size={15} />
                <span>Call Chamber: +91 97280 99999</span>
              </a>
            </div>

            {/* Medico-Legal Club Card */}
            <div className="sidebar-card glass-panel club-sidebar-card">
              <span className="club-badge">365-Day Retainer Shield</span>
              <h3 className="club-title">Medico-Legal Club</h3>
              <p className="club-desc">
                Proactive annual risk management protecting your medical registration and ultrasound equipment before a crisis strikes.
              </p>
              <Link href="/medico-legal-club" className="btn-secondary w-full text-center">
                <span>Explore Club Membership</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Other Practice Areas */}
            <div className="sidebar-card glass-panel other-services-card">
              <h3 className="other-title">Other Practice Areas</h3>
              <div className="other-list">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="other-item"
                  >
                    <span>{other.shortTitle}</span>
                    <ArrowRight size={14} className="other-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .emergency-alert-strip {
          background: #060f1e;
          border-bottom: 1px solid rgba(239, 68, 68, 0.3);
          padding: 0.75rem 0;
          font-size: 0.88rem;
        }

        .strip-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .strip-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: var(--text-secondary);
        }

        .strip-left strong {
          color: #f87171;
        }

        .live-dot-pulse {
          width: 9px;
          height: 9px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 8px #ef4444;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
          100% { opacity: 1; transform: scale(1); }
        }

        .strip-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .strip-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.8rem;
          transition: var(--transition-fast);
        }

        .strip-call {
          background: rgba(239, 68, 68, 0.15);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .strip-call:hover {
          background: rgba(239, 68, 68, 0.3);
          color: #ffffff;
        }

        .strip-wa {
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.35);
        }

        .strip-wa:hover {
          background: #25d366;
          color: #ffffff;
        }

        /* Detail Layout */
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 2.75rem;
          align-items: start;
        }

        .detail-main {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .content-card {
          padding: 2.5rem;
          border: 1px solid var(--border-glass);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.8) 0%, rgba(5, 11, 20, 0.95) 100%);
          border-radius: var(--radius-md);
        }

        .card-heading {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }

        .card-subtext {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
        }

        .statutory-badge-box {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.75rem 1rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--accent-gold-light);
          margin-bottom: 1.5rem;
        }

        .lead-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        /* Provisions */
        .provisions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .provision-item {
          padding: 1.35rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
        }

        .provision-badge {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--accent-teal-light);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .provision-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .provision-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Threats */
        .threat-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .text-red {
          color: #f87171;
        }

        .threats-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .threat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          padding: 0.85rem 1rem;
          background: rgba(239, 68, 68, 0.04);
          border-left: 3px solid #ef4444;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .threat-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          margin-top: 8px;
          flex-shrink: 0;
        }

        /* Strategy Steps */
        .strategy-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .strategy-steps {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .strategy-step {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
        }

        .step-number {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--gold-gradient);
          color: #08101a;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-body {
          flex-grow: 1;
        }

        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .step-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Precedents */
        .precedents-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .precedent-box {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-sm);
        }

        .prec-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .prec-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          margin-bottom: 0.35rem;
        }

        .prec-highlight {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Checklist */
        .checklist-items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
        }

        /* FAQs */
        .faqs-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .faq-box {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
        }

        .faq-question {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
          line-height: 1.35;
        }

        .faq-answer {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          padding-left: 1.7rem;
        }

        /* Sidebar */
        .detail-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          position: sticky;
          top: 100px;
        }

        .sidebar-card {
          padding: 1.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.9) 0%, rgba(5, 11, 20, 0.95) 100%);
        }

        .consultation-box {
          border-color: rgba(212, 175, 55, 0.35);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .sidebar-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-light);
          background: rgba(212, 175, 55, 0.12);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          display: inline-block;
          align-self: flex-start;
        }

        .sidebar-title {
          font-size: 1.25rem;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .sidebar-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .w-full {
          width: 100%;
        }

        .sidebar-privilege {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-glass);
          padding-top: 0.75rem;
          margin-top: 0.25rem;
        }

        .founder-mini {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          text-transform: uppercase;
        }

        .mini-name {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .mini-creds {
          font-size: 0.78rem;
          color: var(--accent-teal-light);
          font-weight: 600;
        }

        .mini-bio {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0.25rem 0 0.5rem;
        }

        .mini-call {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-gold);
          border-top: 1px solid var(--border-glass);
          padding-top: 0.65rem;
        }

        .mini-call:hover {
          color: var(--accent-gold-light);
        }

        /* Club Card */
        .club-sidebar-card {
          border-color: rgba(14, 165, 233, 0.25);
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .club-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-teal-light);
        }

        .club-title {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .club-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 0.5rem;
        }

        /* Other services */
        .other-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .other-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .other-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.65rem;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .other-item:hover {
          background: rgba(212, 175, 55, 0.08);
          color: var(--accent-gold);
        }

        .other-arrow {
          color: var(--text-muted);
          transition: transform 0.2s;
        }

        .other-item:hover .other-arrow {
          transform: translateX(3px);
          color: var(--accent-gold);
        }

        @media (max-width: 1024px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
          .provisions-grid {
            grid-template-columns: 1fr;
          }
          .checklist-items {
            grid-template-columns: 1fr;
          }
          .detail-sidebar {
            position: static;
          }
        }
      `}</style>
    </div>
  );
}
