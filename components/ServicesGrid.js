'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Activity, 
  Building2, 
  Heart, 
  Baby, 
  Eye, 
  Microscope, 
  Briefcase, 
  Receipt, 
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function ServicesGrid({ hideHeader = false }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Practice Areas' },
    { id: 'doctors', name: 'Doctor & Hospital Defense' },
    { id: 'pndt_mtp', name: 'PC-PNDT & MTP Compliance' },
    { id: 'forensic', name: 'Forensic & Autopsy' },
    { id: 'advocates_insurance', name: 'Advocates & Insurance' },
  ];

  const services = [
    {
      id: 1,
      slug: 'medical-negligence-defense',
      category: 'doctors',
      title: 'Medical Negligence Defense for Doctors',
      icon: Scale,
      badge: 'CPA & Criminal Defense',
      statutory: 'Jacob Mathew Guidelines • BNS 106 / IPC 304A • CPA 2019',
      desc: 'Authoritative legal defense for surgeons, gynecologists, physicians, and anesthesiologists against frivolous negligence claims, consumer forum litigation, NMC disciplinary trials, and threat of arrest.',
      points: [
        'Establishing difference between recognized complication and medical negligence',
        'Direct application of Supreme Court Jacob Mathew & Kusum Sharma precedents',
        'Expert witness affidavits by senior medical professors to counter medical boards',
        'High Court writ petitions to quash motivated police complaints without board review'
      ]
    },
    {
      id: 2,
      slug: 'pndt-compliance-desealing',
      category: 'pndt_mtp',
      title: 'PC-PNDT Compliance & Machine De-Sealing',
      icon: Activity,
      badge: 'Ultrasound Protection',
      statutory: 'PC & PNDT Act 1994 • Section 17, 20 & 28 • Rules 9 & 10',
      desc: 'Comprehensive defense for ultrasound clinics, radiologists, and sonologists facing inspections, show-cause notices, or arbitrary machine sealing by the District Appropriate Authority.',
      points: [
        'Dr. Pankaj Vats served as District Appropriate Authority — inside tactical mastery',
        'Emergency legal pleadings for de-sealing ultrasound machines within 48-72 hours',
        'Routine Form F audit and record-keeping standardization to eliminate raid vulnerability',
        'Defense against decoy patient operations and malicious registration cancellations'
      ]
    },
    {
      id: 3,
      slug: 'mtp-act-compliance',
      category: 'pndt_mtp',
      title: 'MTP Act Compliance & Abortion Centre Protection',
      icon: Heart,
      badge: 'Reproductive Healthcare',
      statutory: 'MTP Act 1971 • MTP (Amendment) Act 2021 & Rules',
      desc: 'Protecting gynecologists and MTP-registered centres from administrative harassment, CMO surprise inspections, and procedural compliance traps under amended 2021 laws.',
      points: [
        'Strict audit of Form C patient consent, admission register, and monthly CMO returns',
        'Legal protocols for 20-24 week terminations requiring two registered doctors',
        'POCSO Act vs. MTP confidentiality harmonized reporting protocols for minors',
        'Defense against unauthorized seizure of confidential patient registers'
      ]
    },
    {
      id: 4,
      slug: 'clinical-establishments-act',
      category: 'doctors',
      title: 'Clinical Establishments Act (CEA) Registration & Audits',
      icon: Building2,
      badge: 'Institutional Governance',
      statutory: 'Clinical Establishments (Registration & Regulation) Act',
      desc: 'Complete statutory compliance architecture for hospitals, nursing homes, and polyclinics. Managing registrations, renewals, price display mandates, and mob violence SOPs.',
      points: [
        'Turnkey audit of informed consent forms, admission sheets, and ICU logs',
        'Emergency protocol and legal counter-actions during hospital mob violence or vandalism',
        'Representation before State and District Registering Authorities under CEA',
        'Legal structuring of visiting consultant contracts and hospital vicarious indemnity'
      ]
    },
    {
      id: 5,
      slug: 'ivf-art-surrogacy-compliance',
      category: 'doctors',
      title: 'IVF & Assisted Reproductive Technology (ART) Compliance',
      icon: Baby,
      badge: 'Fertility Law',
      statutory: 'ART (Regulation) Act 2021 • Surrogacy (Regulation) Act 2021',
      desc: 'Comprehensive legal structuring for fertility centres, ART banks, and embryologists navigating complex national board registrations, donor agreements, and surrogacy contracts.',
      points: [
        'Complete registration filing with National & State ART & Surrogacy Boards',
        'Ironclad informed consent architecture for gamete donation and cryo-preservation',
        'Vetting surrogacy eligibility agreements and parentage orders',
        'Preventing criminal sanctions regarding donor age and compensation restrictions'
      ]
    },
    {
      id: 6,
      slug: 'imaging-diagnostics-shield',
      category: 'doctors',
      title: 'Imaging & Diagnostic Centres Legal Shield',
      icon: Eye,
      badge: 'Radiology & Diagnostics',
      statutory: 'AERB Safety Codes • PC-PNDT Act • Diagnostic Standard of Care',
      desc: 'Specialized legal protection for radiologists, pathologists, and diagnostic chains facing allegations of misinterpretation, delayed reports, or radiation regulatory non-compliance.',
      points: [
        'Radiologist disclaimer and diagnostic variance phraseology in reports',
        'Defense against missed anomaly or false negative cancer diagnostic claims',
        'AERB safety compliance, machine decommission certificates, and dose logs',
        'Contractual shielding between diagnostic centers and referring clinicians'
      ]
    },
    {
      id: 7,
      slug: 'autopsy-post-mortem-vetting',
      category: 'forensic',
      title: 'Autopsy & Post-Mortem Legal Vetting',
      icon: Microscope,
      badge: 'Forensic Jurisprudence',
      statutory: 'CrPC / BNSS Inquests • Post-Mortem Examination Protocols',
      desc: 'Independent legal and medical re-scrutiny of post-mortem reports, histopathology slides, and viscera toxicology findings conducted by senior AIIMS forensic specialists.',
      points: [
        'Pinpoint detection of contradictory post-mortem entries and cause-of-death errors',
        'Reconstruction of ante-mortem vs. post-mortem injuries in homicide and accident cases',
        'Challenging inconclusive viscera reports and requesting second medical board reviews',
        'Formulating comprehensive forensic expert opinion reports for court submission'
      ]
    },
    {
      id: 8,
      slug: 'cross-examination-advocates',
      category: 'advocates_insurance',
      title: 'Cross-Examination Formulation for Advocates',
      icon: Briefcase,
      badge: 'Litigation Support',
      statutory: 'BSA / Indian Evidence Act • Medical Witness Deposition',
      desc: 'Collaborating with trial lawyers and senior advocates in High Courts to formulate incisive, medically devastating cross-examination questions for doctors and medical boards.',
      points: [
        'Deciphering complex ICU charts, surgical notes, and pharmacology records',
        'Drafting pinpoint medical questionnaires to expose medical board bias',
        'Deposition in court as authoritative expert witnesses with national credibility',
        'Comprehensive case briefs citing textbook medical authorities (Harrison, Bailey & Love)'
      ]
    },
    {
      id: 9,
      slug: 'hospital-bill-audit',
      category: 'advocates_insurance',
      title: 'Hospital Over-Billing & Mediclaim Fraud Audit',
      icon: Receipt,
      badge: 'Financial & Medical Audit',
      statutory: 'NPPA Pricing Mandates • IRDAI Guidelines • CEA',
      desc: 'Forensic itemized reconciliation of hospital invoices for insurance companies, TPAs, and disputed corporate healthcare packages to detect fraud and unjustified charges.',
      points: [
        'Audit of cardiac stent, orthopedic implant, and drug pricing against NPPA caps',
        'Detection of unbundled consumables, phantom ICU room days, and duplicate charges',
        'Standard of Care medical necessity audit for disputed high-value surgical claims',
        'Expert witness affidavits in consumer commissions justifying claim repudiation'
      ]
    },
    {
      id: 10,
      slug: 'second-opinion-malpractice',
      category: 'forensic',
      title: 'Impartial Second Opinions: Negligence vs. Complication',
      icon: HelpCircle,
      badge: 'Patient & Accused Rights',
      statutory: 'NMC Code of Medical Ethics • Consumer Protection Act',
      desc: 'Unbiased forensic evaluation of adverse clinical outcomes for grieving families or accused parties, determining with scientific precision if genuine medical malpractice occurred.',
      points: [
        'Objective review of clinical records free from hospital or patient bias',
        'Clear differentiation between accepted surgical complications and gross neglect',
        'Pre-litigation legal guidance to avoid filing unviable lawsuits that drag for years',
        'Comprehensive written opinion report signed by board-certified forensic experts'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="services-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <Scale size={14} />
              <span>Full Spectrum Capabilities</span>
            </div>
            <h2 className="section-title">
              Authoritative <span className="text-gold">Medico-Legal Practice Areas</span>
            </h2>
            <p className="section-subtitle">
              Led by Dr. Pankaj Vats [M.D. Forensic Medicine, AIIMS &amp; LL.B.], combining 34+ years of clinical, 
              forensic, and governmental experience to solve the most intricate healthcare disputes in India.
            </p>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-btn ${activeCategory === cat.id ? 'filter-btn-active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {filteredServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.id} className="service-card glass-panel">
                <div className="card-top">
                  <div className="service-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="service-badge">{srv.badge}</span>
                </div>

                <h3 className="service-title">{srv.title}</h3>
                <div className="statutory-tag">{srv.statutory}</div>
                <p className="service-desc">{srv.desc}</p>

                <div className="points-divider"></div>

                <ul className="service-points-list">
                  {srv.points.map((pt, idx) => (
                    <li key={idx} className="point-item">
                      <CheckCircle2 size={15} className="point-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-bottom-action">
                  <Link href={`/services/${srv.slug}`} className="service-link">
                    <span>Practice Guidelines</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link href="/case-assessment" className="service-cta-mini">
                    <span>Free Review</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="services-cta-banner glass-panel">
          <div className="cta-banner-text">
            <h4>Facing an Immediate Legal Notice, Raid, or Medical Negligence Complaint?</h4>
            <p>Our Gurugram chamber provides urgent case evaluation and emergency High Court defense strategies.</p>
          </div>
          <div className="cta-banner-btns">
            <Link href="/case-assessment" className="btn-primary">
              <span>Submit Case for Review</span>
              <ArrowRight size={17} />
            </Link>
            <a href="tel:+919728099999" className="btn-secondary">
              <span>Emergency Call: +91 97280 99999</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .category-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.6rem 1.35rem;
          background: rgba(14, 25, 45, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold-light);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .filter-btn-active {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-glass);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.75) 0%, rgba(5, 11, 20, 0.85) 100%);
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
        }

        .service-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .service-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
        }

        .service-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-teal-light);
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.5rem;
        }

        .statutory-tag {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-gold-light);
          margin-bottom: 0.9rem;
          font-family: var(--font-mono);
        }

        .service-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .points-divider {
          height: 1px;
          background: var(--border-glass);
          margin-bottom: 1.25rem;
        }

        .service-points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .point-check {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-bottom-action {
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-gold);
          transition: var(--transition-fast);
        }

        .service-link:hover {
          color: var(--accent-gold-light);
          gap: 0.65rem;
        }

        .service-cta-mini {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: var(--radius-sm);
          color: var(--accent-gold-light);
          transition: var(--transition-fast);
          white-space: nowrap;
        }

        .service-cta-mini:hover {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
        }

        /* Bottom Banner */
        .services-cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 2.25rem 2.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
        }

        .cta-banner-text h4 {
          font-size: 1.35rem;
          margin-bottom: 0.4rem;
        }

        .cta-banner-text p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .cta-banner-btns {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .services-cards-grid {
            grid-template-columns: 1fr;
          }
          .services-cta-banner {
            flex-direction: column;
            align-items: stretch;
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
