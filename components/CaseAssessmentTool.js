'use client';

import { useState } from 'react';
import { 
  ShieldAlert, 
  Activity, 
  Building2, 
  Microscope, 
  Briefcase, 
  HelpCircle, 
  Receipt,
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  AlertTriangle,
  Scale,
  FileCheck2,
  Clock,
  Send
} from 'lucide-react';

export default function CaseAssessmentTool({ hideHeader = false }) {
  const [step, setStep] = useState(1);
  const [issueType, setIssueType] = useState('doctor_negligence');
  const [urgency, setUrgency] = useState('summons');
  const [docs, setDocs] = useState({
    dischargeSummary: true,
    consentForm: true,
    pndtFormF: false,
    machineSealingOrder: false,
    policeNotice: false,
    autopsyReport: false,
    itemizedBills: false,
  });
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const issueOptions = [
    {
      id: 'doctor_negligence',
      title: 'Doctor Medical Negligence Defense',
      desc: 'Consumer forum summons, police notice under 106 BNS, NMC ethics inquiry, patient compensation claim.',
      icon: Scale,
    },
    {
      id: 'pndt_sealing',
      title: 'PC-PNDT Ultrasound Sealing & Notice',
      desc: 'Machine seized or sealed by DAA, Form F discrepancy, suspension notice, surprise decoy inspection.',
      icon: Activity,
    },
    {
      id: 'hospital_cea',
      title: 'Hospital CEA & Institutional Dispute',
      desc: 'Clinical Establishments Act non-renewal, mob violence in ICU, consent flaw, price cap notice.',
      icon: Building2,
    },
    {
      id: 'advocate_autopsy',
      title: 'Advocate Autopsy & Evidence Support',
      desc: 'Post-mortem re-vetting, viscera toxicology, cross-examination question formulation for doctors.',
      icon: Microscope,
    },
    {
      id: 'second_opinion',
      title: 'Second Opinion for Patient / Accused',
      desc: 'Unbiased review of adverse medical outcome: determining recognized complication vs. negligence.',
      icon: HelpCircle,
    },
    {
      id: 'bill_audit',
      title: 'Hospital Bill & Mediclaim Fraud Audit',
      desc: 'Over-billing analysis, unbundled ICU charges, medical necessity verification for TPAs and insurers.',
      icon: Receipt,
    },
  ];

  const urgencyOptions = [
    { id: 'immediate_raid', label: 'Emergency: Raid / Police Action / Machine Sealed (Past 48 Hours)' },
    { id: 'summons', label: 'Court Summons / DAA Show-Cause Notice Received (Response Pending)' },
    { id: 'police_notice', label: 'Police Inquiry / Section 91 CrPC/BNSS Notice for Records' },
    { id: 'pre_litigation', label: 'Pre-Litigation: Anticipating Dispute / Legal Risk Assessment' },
    { id: 'appeal', label: 'Appellate Stage: Challenging Adverse Commission Order or Registration Cancellation' },
  ];

  const handleDocToggle = (key) => {
    setDocs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getTriageStrategy = () => {
    switch (issueType) {
      case 'pndt_sealing':
        return {
          statute: 'PC-PNDT Act, 1994 (Sections 17, 20 & 28) and Supreme Court Precedents',
          riskLevel: 'Critical Statutory Risk (Criminal & Administrative)',
          safeguard: 'Dr. Pankaj Vats served as District Appropriate Authority. Immediate writ or de-sealing application to be filed within 72 hours challenging procedural irregularity.',
          actionSteps: [
            'Secure certified copies of seizure memo and panchnama immediately.',
            'Audit Form F entries for clerical error vs. substantive sex selection.',
            'Draft emergency stay and de-sealing application before Sessions Court or High Court.'
          ]
        };
      case 'doctor_negligence':
        return {
          statute: 'Consumer Protection Act, 2019 & Jacob Mathew (2005) 6 SCC 1 Guidelines',
          riskLevel: 'High Reputational & Financial Exposure',
          safeguard: 'Application of Jacob Mathew criminal shield. Police cannot register FIR without independent medical board opinion. In consumer court, Kusum Sharma 11 golden principles apply.',
          actionSteps: [
            'Never alter medical records post-facto (tampering creates adverse inference).',
            'Draft comprehensive technical written statement establishing acceptable medical standard of care.',
            'Procure independent expert affidavit from senior clinical professor in the same specialty.'
          ]
        };
      case 'hospital_cea':
        return {
          statute: 'Clinical Establishments Act & State Registration Rules',
          riskLevel: 'Moderate to High Institutional Risk',
          safeguard: 'Reviewing statutory compliance parameters, price transparency displays, and standard informed consent architecture to shield trustees and directors.',
          actionSteps: [
            'Audit patient consent documentation against NABH and legal thresholds.',
            'Implement rapid legal defense against hospital vandalism under Medicare Service Protection Act.',
            'File administrative appeal before State Council if district authority withholds registration.'
          ]
        };
      case 'advocate_autopsy':
        return {
          statute: 'Bharatiya Sakshya Adhiniyam (BSA) / Indian Evidence Act & Medical Jurisprudence',
          riskLevel: 'Evidentiary Battle in Trial / Inquest',
          safeguard: 'AIIMS forensic medicine expertise to dismantle fabricated or flawed post-mortem reports and draft devastating cross-examination questions.',
          actionSteps: [
            'Examine time-since-death calculation against rigor mortis and stomach contents.',
            'Verify viscera preservation protocols and chain-of-custody gaps.',
            'Formulate line-by-line cross-examination questionnaire for the post-mortem doctor.'
          ]
        };
      case 'second_opinion':
        return {
          statute: 'NMC Ethics Regulations & Tort Law of Clinical Negligence',
          riskLevel: 'Objective Medical-Legal Assessment',
          safeguard: '100% impartial forensic review to differentiate between accepted clinical complication and actual actionable medical malpractice.',
          actionSteps: [
            'Compile entire indoor case sheet, nursing notes, and operative log.',
            'Audit chronological vital signs and doctor reaction times.',
            'Receive definitive written opinion whether viable consumer court claim exists.'
          ]
        };
      default:
        return {
          statute: 'NPPA Guidelines & Consumer Protection Act 2019',
          riskLevel: 'Financial Audit & Claim Dispute',
          safeguard: 'Forensic line-by-line reconciliation of hospital invoice against notified drug and implant price ceilings.',
          actionSteps: [
            'Identify duplicate billing and unbundled surgical consumables.',
            'Review medical necessity for ICU stay duration.',
            'Submit formal audit report for insurance claim deduction or restitution.'
          ]
        };
    }
  };

  const triage = getTriageStrategy();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueType,
          urgency,
          docs,
          name: userName,
          phone: userPhone,
          city: userCity,
          summary: caseSummary,
        }),
      });
    } catch (err) {
      console.warn('Triage submission warning:', err);
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <section id="case-assessment" className="assessment-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <ShieldAlert size={14} />
              <span>Confidential Expert Triage</span>
            </div>
            <h2 className="section-title">
              Free Case Review &amp; <span className="text-gold">Statutory Triage</span>
            </h2>
            <p className="section-subtitle">
              Interactive case analysis with Dr. Pankaj Vats [M.D. AIIMS, LL.B.]. Determine your statutory defense, 
              identify applicable Supreme Court precedents, and request a confidential chamber review.
            </p>
          </div>
        )}

        <div className="tool-card glass-panel">
          {/* Progress Indicator */}
          <div className="tool-progress-bar">
            <div className={`step-dot ${step >= 1 ? 'dot-active' : ''}`}>
              <span>1</span>
              <small>Category</small>
            </div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 2 ? 'dot-active' : ''}`}>
              <span>2</span>
              <small>Urgency</small>
            </div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 3 ? 'dot-active' : ''}`}>
              <span>3</span>
              <small>Documents</small>
            </div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 4 ? 'dot-active' : ''}`}>
              <span>4</span>
              <small>Review &amp; Submit</small>
            </div>
          </div>

          {/* STEP 1: Select Category */}
          {step === 1 && (
            <div className="step-content">
              <h3 className="step-title">Step 1: Select Your Medico-Legal Predicament</h3>
              <p className="step-sub">Choose the scenario that best matches your immediate legal concern:</p>

              <div className="options-grid">
                {issueOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = issueType === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setIssueType(opt.id)}
                      className={`option-card ${isSelected ? 'option-selected' : ''}`}
                    >
                      <div className="option-icon-box">
                        <Icon size={24} />
                      </div>
                      <div className="option-text">
                        <h4>{opt.title}</h4>
                        <p>{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="step-actions right-align">
                <button onClick={() => setStep(2)} className="btn-primary">
                  <span>Continue to Urgency Assessment</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Urgency */}
          {step === 2 && (
            <div className="step-content">
              <h3 className="step-title">Step 2: What is the Current Stage &amp; Urgency?</h3>
              <p className="step-sub">Select where your case currently stands in the administrative or legal pipeline:</p>

              <div className="urgency-list">
                {urgencyOptions.map((urg) => (
                  <label
                    key={urg.id}
                    className={`urgency-item ${urgency === urg.id ? 'urgency-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === urg.id}
                      onChange={() => setUrgency(urg.id)}
                      className="radio-input"
                    />
                    <Clock size={18} className="urgency-icon" />
                    <span className="urgency-text">{urg.label}</span>
                  </label>
                ))}
              </div>

              <div className="step-actions">
                <button onClick={() => setStep(1)} className="btn-secondary">
                  <ArrowLeft size={17} />
                  <span>Back</span>
                </button>
                <button onClick={() => setStep(3)} className="btn-primary">
                  <span>Continue to Document Checklist</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Documents */}
          {step === 3 && (
            <div className="step-content">
              <h3 className="step-title">Step 3: What Documentation is Currently Available?</h3>
              <p className="step-sub">Check off all documents you currently possess (or can obtain):</p>

              <div className="docs-checklist-grid">
                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.dischargeSummary}
                    onChange={() => handleDocToggle('dischargeSummary')}
                  />
                  <span>Discharge Summary &amp; Treatment Charts</span>
                </label>

                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.consentForm}
                    onChange={() => handleDocToggle('consentForm')}
                  />
                  <span>Informed Consent Forms &amp; High-Risk Undertakings</span>
                </label>

                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.pndtFormF}
                    onChange={() => handleDocToggle('pndtFormF')}
                  />
                  <span>PC-PNDT Form F Online Copies &amp; Scan Register</span>
                </label>

                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.machineSealingOrder}
                    onChange={() => handleDocToggle('machineSealingOrder')}
                  />
                  <span>Machine Seizure Memo / Panchnama / DAA Notice</span>
                </label>

                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.policeNotice}
                    onChange={() => handleDocToggle('policeNotice')}
                  />
                  <span>Police Inquiry Notice / 106 BNS / 304A Allegations</span>
                </label>

                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.autopsyReport}
                    onChange={() => handleDocToggle('autopsyReport')}
                  />
                  <span>Post-Mortem / Autopsy &amp; Viscera Forensic Report</span>
                </label>

                <label className="doc-check-item">
                  <input
                    type="checkbox"
                    checked={docs.itemizedBills}
                    onChange={() => handleDocToggle('itemizedBills')}
                  />
                  <span>Itemized Hospital Bill &amp; Pharmacy Invoices</span>
                </label>
              </div>

              <div className="step-actions">
                <button onClick={() => setStep(2)} className="btn-secondary">
                  <ArrowLeft size={17} />
                  <span>Back</span>
                </button>
                <button onClick={() => setStep(4)} className="btn-primary">
                  <span>Generate Triage &amp; Submit Review</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Triage & Submission */}
          {step === 4 && (
            <div className="step-content">
              <div className="triage-result-banner">
                <div className="triage-header">
                  <span className="risk-badge">{triage.riskLevel}</span>
                  <h3>Immediate Legal &amp; Statutory Analysis</h3>
                </div>

                <div className="triage-statute">
                  <strong>Governing Statutory Framework:</strong> {triage.statute}
                </div>

                <p className="triage-safeguard">{triage.safeguard}</p>

                <div className="triage-steps-box">
                  <h4>Recommended Immediate Strategic Actions:</h4>
                  <ul>
                    {triage.actionSteps.map((s, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} className="triage-check" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Submission Form */}
              <div className="submission-form-box">
                {submitted ? (
                  <div className="submitted-banner">
                    <CheckCircle size={52} className="submitted-icon" />
                    <h4>Case Successfully Submitted for Free Review</h4>
                    <p>
                      Thank you, <strong>{userName || 'Sir/Madam'}</strong>. Your case brief has been dispatched directly 
                      to the executive desk of <strong>Dr. Pankaj Vats</strong>. Our senior counsel will review your documents 
                      and contact you at <strong>{userPhone || '+91-97280 99999'}</strong>.
                    </p>
                    <div className="urgent-dispatch-row">
                      <a
                        href={`https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20have%20submitted%20my%20case%20assessment%20(${issueType})%20from%20${userCity}.%20Please%20guide%20urgently.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                      >
                        <MessageSquare size={18} />
                        <span>Follow Up via Direct WhatsApp</span>
                      </a>
                      <a href="tel:+919728099999" className="btn-secondary">
                        <Phone size={18} />
                        <span>Direct Dial: +91 97280 99999</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="triage-form">
                    <h4 className="form-subheading">Submit Your Case for Free Review by Dr. Pankaj Vats</h4>
                    <p className="form-note">
                      Strict attorney-client &amp; medical privilege applies. All information remains 100% confidential.
                    </p>

                    <div className="form-grid">
                      <div className="form-group">
                        <label>Your Name / Designation *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. A. K. Verma / Adv. Rohit"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label>Mobile Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 97280 XXXXX"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label>City &amp; State *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gurugram, Delhi NCR, Jaipur"
                          value={userCity}
                          onChange={(e) => setUserCity(e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label>Summary of Dispute / Incident *</label>
                        <input
                          type="text"
                          required
                          placeholder="Brief description of notice, raid, or patient outcome..."
                          value={caseSummary}
                          onChange={(e) => setCaseSummary(e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="step-actions">
                      <button type="button" onClick={() => setStep(3)} className="btn-secondary">
                        <ArrowLeft size={17} />
                        <span>Modify Details</span>
                      </button>
                      <button type="submit" className="btn-primary submit-btn">
                        <Send size={18} />
                        <span>Submit for Free Expert Review</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tool-card {
          padding: 2.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-radius: var(--radius-lg);
        }

        .tool-progress-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .step-dot {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
        }

        .step-dot span {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .step-dot small {
          font-size: 0.78rem;
          font-weight: 600;
        }

        .dot-active span {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }

        .dot-active {
          color: var(--accent-gold-light);
        }

        .step-line {
          flex-grow: 1;
          height: 2px;
          background: var(--border-glass);
          margin: 0 1rem;
          margin-bottom: 1.25rem;
        }

        .step-title {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .step-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .option-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .option-card:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: rgba(212, 175, 55, 0.3);
          transform: translateY(-2px);
        }

        .option-selected {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(14, 25, 45, 0.9) 100%);
          border-color: var(--accent-gold);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
        }

        .option-icon-box {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .option-text h4 {
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .option-text p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .urgency-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .urgency-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.15rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .urgency-item:hover, .urgency-selected {
          background: rgba(212, 175, 55, 0.08);
          border-color: var(--accent-gold);
        }

        .urgency-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .urgency-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .docs-checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .doc-check-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .doc-check-item:hover {
          border-color: rgba(212, 175, 55, 0.3);
          color: var(--text-primary);
        }

        .doc-check-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--accent-gold);
        }

        .step-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .right-align {
          justify-content: flex-end;
        }

        /* Triage Box */
        .triage-result-banner {
          background: rgba(14, 25, 45, 0.8);
          border: 1px solid var(--accent-gold);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2.5rem;
        }

        .triage-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .risk-badge {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .triage-header h3 {
          font-size: 1.45rem;
          color: var(--accent-gold-light);
        }

        .triage-statute {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 0.85rem;
        }

        .triage-statute strong {
          color: var(--accent-teal-light);
        }

        .triage-safeguard {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 3px solid var(--accent-gold);
        }

        .triage-steps-box h4 {
          font-size: 1.05rem;
          margin-bottom: 0.85rem;
        }

        .triage-steps-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .triage-steps-box li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .triage-check {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Submission Form */
        .submission-form-box {
          background: rgba(5, 11, 20, 0.7);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 2rem;
        }

        .form-subheading {
          font-size: 1.3rem;
          margin-bottom: 0.35rem;
        }

        .form-note {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.92rem;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-gold);
          background: rgba(255, 255, 255, 0.08);
        }

        .submitted-banner {
          text-align: center;
          padding: 2rem 1rem;
        }

        .submitted-icon {
          color: var(--accent-gold);
          margin-bottom: 1rem;
        }

        .submitted-banner h4 {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
        }

        .submitted-banner p {
          max-width: 620px;
          margin: 0 auto 2rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .urgent-dispatch-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .options-grid {
            grid-template-columns: 1fr;
          }
          .docs-checklist-grid {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .tool-card {
            padding: 1.75rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
