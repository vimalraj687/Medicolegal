'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  Building2, 
  Activity, 
  Heart, 
  Baby, 
  Eye, 
  Droplet, 
  Briefcase, 
  ShieldAlert, 
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  PhoneCall
} from 'lucide-react';

export default function AudienceSelector() {
  const [activeTab, setActiveTab] = useState('doctors');

  const audiences = [
    {
      id: 'doctors',
      label: 'Doctors & Surgeons',
      icon: Stethoscope,
      title: 'Shielding Medical Practitioners from Consumer & Criminal Negligence',
      statute: 'Consumer Protection Act (CPA) • BNS 106 / IPC 304A • NMC Regulations',
      threats: [
        'Vexatious consumer court complaints seeking millions in inflated damages',
        'Police threats of arrest or FIR under Section 106 BNS without medical board review',
        'State Medical Council disciplinary notices threatening license suspension',
        'Conflation of accepted surgical complications with gross negligence'
      ],
      solutions: [
        'Application of Supreme Court Jacob Mathew (2005) & Kusum Sharma (2010) defense protocols',
        'Preparation of authoritative expert witness affidavits by senior medical professors',
        'Drafting tight rejoinders and legal responses to District & State Consumer Commissions',
        'Immediate quashing applications in High Court for vexatious criminal FIRs'
      ],
      ctaText: 'Defend Your Practice',
      ctaHref: '/case-assessment'
    },
    {
      id: 'pndt',
      label: 'PC-PNDT Centres',
      icon: Activity,
      title: 'De-Sealing Ultrasound Machines & PC-PNDT Defense',
      statute: 'Pre-Conception & Pre-Natal Diagnostic Techniques Act, 1994 & Rules',
      threats: [
        'Arbitrary sealing of ultrasound machines on minor clerical discrepancies in Form F',
        'Suspension or cancellation of registration without proper show-cause opportunity',
        'Criminal prosecution launched by District Appropriate Authority (DAA)',
        'Harassment during decoy operations and surprise raid inspections'
      ],
      solutions: [
        'Dr. Pankaj Vats served as District Appropriate Authority — inside mastery of PNDT procedures',
        'Emergency legal drafting for de-sealing of seized machines within 48 to 72 hours',
        'High Court writ petitions against unlawful suspension under Section 20(1) & (2)',
        'Routine Form F audit and record-keeping standardization to eliminate raid vulnerability'
      ],
      ctaText: 'Protect Your Ultrasound Centre',
      ctaHref: '/case-assessment'
    },
    {
      id: 'clinical',
      label: 'Clinical Establishments',
      icon: Building2,
      title: 'Hospitals & Nursing Homes Regulatory Compliance',
      statute: 'Clinical Establishments Act (CEA) • Fire & Biomedical Waste • NABH',
      threats: [
        'Refusal or delay in renewal of CEA registration by District Authorities',
        'Mob violence and extortionate vandalism following patient demise in ICU',
        'Inquest notice for alleged hospital over-billing or non-compliance of price caps',
        'Defective consent forms leading to vicarious institutional liability'
      ],
      solutions: [
        'Turnkey audit of Standard Operating Procedures (SOPs) and clinical consent architecture',
        'Emergency institutional legal response protocols during hospital unrest',
        'Representation in District Advisory Committees and Appellate Authorities under CEA',
        'Indemnity and contractual structuring for visiting consultants and RMOs'
      ],
      ctaText: 'Audit Hospital Compliance',
      ctaHref: '/bill-auditor'
    },
    {
      id: 'mtp',
      label: 'MTP Centres',
      icon: Heart,
      title: 'Medical Termination of Pregnancy Statutory Protection',
      statute: 'MTP Act, 1971 & MTP (Amendment) Act 2021 with 2021 Rules',
      threats: [
        'Inspections alleging non-maintenance of admission register and Form C consents',
        'Prosecution regarding second opinion requirements for pregnancies between 20-24 weeks',
        'Ambiguity in termination of pregnancy for minor rape survivors and POCSO reporting',
        'Threat of non-bailable prosecution under IPC/BNS for unapproved facilities'
      ],
      solutions: [
        'Comprehensive documentation protocol under the amended 2021 MTP regulations',
        'POCSO vs. MTP confidentiality harmonized reporting framework',
        'Defense against surprise CMO inspections and unauthorized seizure of records',
        'Legal vetting of RFI (Registered Medical Practitioner) eligibility and certification'
      ],
      ctaText: 'MTP Compliance Review',
      ctaHref: '/case-assessment'
    },
    {
      id: 'ivf',
      label: 'IVF & Fertility Clinics',
      icon: Baby,
      title: 'ART & Surrogacy Regulatory Architecture',
      statute: 'Assisted Reproductive Technology (Regulation) Act 2021 • Surrogacy Act 2021',
      threats: [
        'Onerous National & State ART Board registration mandates and inspections',
        'Criminal liability for non-compliant donor gamete sourcing or surrogacy agreements',
        'Patient disputes regarding genetic parentage, embryo custody, and cryo-storage',
        'Insurance and age-limit statutory violations (women above 50, men above 55)'
      ],
      solutions: [
        'Complete ART clinic and ART bank statutory registration filing and audit',
        'Bulletproof informed consent and contractual templates for donor gametes',
        'Surrogacy board eligibility vetting and legal counseling agreements',
        'Defending ART directors against administrative penalties and show-cause notices'
      ],
      ctaText: 'IVF & ART Advisory',
      ctaHref: '/services'
    },
    {
      id: 'diagnostic',
      label: 'Imaging & Diagnostics',
      icon: Eye,
      title: 'Radiology, CT/MRI & Pathology Legal Safeguards',
      statute: 'AERB Safety Codes • PC-PNDT Act • Diagnostic Standard of Care',
      threats: [
        'Allegations of missed radiological findings on CT, MRI, and mammography',
        'AERB radiation safety inspection non-compliance notices',
        'Pathology lab reporting errors leading to patient consumer lawsuits',
        'Cross-consultation liability between referring clinicians and imaging centres'
      ],
      solutions: [
        'Radiologist disclaimer and diagnostic reporting standard-of-care phraseology',
        'AERB and atomic energy regulatory compliance documentation',
        'Legal defense against missed fracture, fetal anomaly, or malignancy lawsuits',
        'Expert peer review affidavits demonstrating diagnostic acceptable variance'
      ],
      ctaText: 'Diagnostic Legal Shield',
      ctaHref: '/services'
    },
    {
      id: 'advocates',
      label: 'Advocates & Counsel',
      icon: Briefcase,
      title: 'Forensic & Medical Evidence Collaboration for Trial Lawyers',
      statute: 'Indian Evidence Act / BSA • CrPC / BNSS • Post-Mortem Jurisprudence',
      threats: [
        'Facing complicated clinical case sheets, drug interactions, and medical jargon in trial',
        'Contesting flawed or biased autopsy, post-mortem, and forensic toxicology findings',
        'Cross-examining treating doctors and medical board members without medical mastery',
        'Proving or disproving causation in medical negligence or custodial death trials'
      ],
      solutions: [
        'Drafting pinpoint medical cross-examination questionnaires for medical witnesses',
        'Independent forensic re-vetting of autopsy, histopathology, and viscera reports',
        'Deposition as authoritative medical expert witness in High Court & District Courts',
        'Comprehensive clinical opinion reports citing global medical literature and textbooks'
      ],
      ctaText: 'Partner with Medico-Legal Experts',
      ctaHref: '/services'
    },
    {
      id: 'insurance',
      label: 'Insurance & TPAs',
      icon: ShieldAlert,
      title: 'Hospital Bill Forensic Auditing & Fraud Investigation',
      statute: 'IRDAI Regulations • Clinical Establishments Act • NPPA Mandates',
      threats: [
        'Inflated hospital invoices, arbitrary ICU room rate markups, and unbundled packages',
        'Medically unnecessary surgical procedures and prolonged unwarranted ICU admissions',
        'Fabricated medical records, phantom diagnostic tests, and staged claims',
        'Consumer forum disputes for partial claim settlement or cashless deductions'
      ],
      solutions: [
        'Forensic itemized reconciliation against CGHS/standard price benchmarks',
        'Standard of Care audit determining whether surgical intervention was clinically justified',
        'Detection of post-discharge altered clinical notes and bogus pharmacy charges',
        'Expert witness affidavits in consumer commissions justifying repudiation of fraud'
      ],
      ctaText: 'Audit Hospital Invoices',
      ctaHref: '/bill-auditor'
    },
    {
      id: 'second-opinion',
      label: 'Second Opinion for Patients',
      icon: HelpCircle,
      title: 'Unbiased Medico-Legal Review: Negligence vs. Complication',
      statute: 'Patient Rights Charter • Consumer Protection Act • NMC Ethics',
      threats: [
        'Patients grieving adverse outcomes unsure if it was malpractice or recognized medical risk',
        'Loss of critical medical records or hospital refusal to provide case papers',
        'Accused individuals falsely implicated in assault or unnatural death charges'
      ],
      solutions: [
        '100% independent, objective forensic review of all medical records',
        'Clear distinction between known clinical risk, surgical accident, and actionable negligence',
        'Guiding genuine victims toward legitimate consumer court compensation pathways',
        'Preventing frivolous litigation that wastes years in court without evidentiary merit'
      ],
      ctaText: 'Get Free Case Review',
      ctaHref: '/case-assessment'
    }
  ];

  const currentAudience = audiences.find((a) => a.id === activeTab) || audiences[0];

  return (
    <section className="audience-section section-spacing">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Specialized Stakeholder Portals</span>
          </div>
          <h2 className="section-title">
            Tailored Medico-Legal Defense <span className="text-gold">For Every Stakeholder</span>
          </h2>
          <p className="section-subtitle">
            Whether you are a surgeon confronting a consumer notice, an ultrasound clinic facing machine sealing, 
            a trial advocate needing medical cross-examination, or a hospital managing CEA compliance.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="tab-pill-bar">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            const isSelected = activeTab === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`tab-pill ${isSelected ? 'tab-pill-active' : ''}`}
              >
                <Icon size={16} className="tab-icon" />
                <span>{aud.label}</span>
              </button>
            );
          })}
        </div>

        {/* Audience Content Display Card */}
        <div className="audience-card glass-panel">
          <div className="card-top-header">
            <div className="card-header-left">
              <span className="statute-pill">{currentAudience.statute}</span>
              <h3 className="current-title">{currentAudience.title}</h3>
            </div>
            <div className="card-header-right">
              <a 
                href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20need%20urgent%20advice%20regarding%20" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp quick-wa"
              >
                <PhoneCall size={15} />
                <span>Urgent WhatsApp Line</span>
              </a>
            </div>
          </div>

          <div className="card-grid">
            {/* Left: Threats / Vulnerabilities */}
            <div className="threat-box">
              <div className="box-title text-red">
                <AlertTriangle size={18} />
                <span>Critical Legal Risks &amp; Vulnerabilities</span>
              </div>
              <ul className="points-list">
                {currentAudience.threats.map((t, idx) => (
                  <li key={idx} className="point-item red-bullet">
                    <span className="bullet-dot red-dot"></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Five Eyes Solutions */}
            <div className="solution-box">
              <div className="box-title text-gold">
                <CheckCircle2 size={18} />
                <span>Five Eyes Specialized Defense Strategy</span>
              </div>
              <ul className="points-list">
                {currentAudience.solutions.map((s, idx) => (
                  <li key={idx} className="point-item gold-bullet">
                    <CheckCircle2 size={16} className="bullet-icon gold-check" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-footer-cta">
            <div className="cta-note">
              <strong>Need Immediate Guidance?</strong> Consult directly with Dr. Pankaj Vats and our senior legal council.
            </div>
            <Link href={currentAudience.ctaHref} className="btn-primary">
              <span>{currentAudience.ctaText}</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tab-pill-bar {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
          scrollbar-width: thin;
        }

        .tab-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.15rem;
          background: rgba(14, 25, 45, 0.7);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .tab-pill:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold-light);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .tab-pill-active {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.35);
        }

        .tab-pill-active .tab-icon {
          color: #08101a;
        }

        .audience-card {
          padding: 2.25rem;
          border: 1px solid rgba(212, 175, 55, 0.25);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.9) 0%, rgba(5, 11, 20, 0.95) 100%);
        }

        .card-top-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .statute-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-teal-light);
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          margin-bottom: 0.65rem;
        }

        .current-title {
          font-size: 1.55rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .threat-box, .solution-box {
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }

        .threat-box {
          background: rgba(239, 68, 68, 0.04);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .solution-box {
          background: rgba(212, 175, 55, 0.04);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .box-title {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          font-family: var(--font-sans);
        }

        .text-red {
          color: #f87171;
        }

        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .bullet-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          margin-top: 7px;
          flex-shrink: 0;
        }

        .red-dot {
          background: #ef4444;
          box-shadow: 0 0 6px #ef4444;
        }

        .gold-check {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-footer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .cta-note {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .cta-note strong {
          color: var(--accent-gold-light);
        }

        @media (max-width: 900px) {
          .card-grid {
            grid-template-columns: 1fr;
          }
          .current-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
