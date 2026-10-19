'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  Receipt, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck, 
  Building2,
  RefreshCw,
  PhoneCall
} from 'lucide-react';

export default function BillCalculator({ hideHeader = false }) {
  const [activeMode, setActiveMode] = useState('pndt'); // 'pndt' or 'billing'

  // PNDT & CEA State
  const [pndtResponses, setPndtResponses] = useState({
    formFFiled: true,
    machineRegistered: true,
    allSonologistsMapped: true,
    warningBoardsDisplayed: true,
    cctvMaintained: false,
    referralPrescriptionsPreserved: true,
    twoYearRecordArchived: false,
    biometricLogsClean: true,
  });

  // Billing State
  const [billAmount, setBillAmount] = useState(450000);
  const [icuDays, setIcuDays] = useState(5);
  const [hasImplant, setHasImplant] = useState(true);
  const [hasUnbundledPpe, setHasUnbundledPpe] = useState(true);
  const [hospitalTier, setHospitalTier] = useState('corporate');

  const handlePndtToggle = (key) => {
    setPndtResponses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate PNDT Compliance Score
  const calculatePndtRisk = () => {
    let riskPoints = 0;
    if (!pndtResponses.formFFiled) riskPoints += 30;
    if (!pndtResponses.machineRegistered) riskPoints += 35;
    if (!pndtResponses.allSonologistsMapped) riskPoints += 25;
    if (!pndtResponses.warningBoardsDisplayed) riskPoints += 10;
    if (!pndtResponses.cctvMaintained) riskPoints += 10;
    if (!pndtResponses.referralPrescriptionsPreserved) riskPoints += 20;
    if (!pndtResponses.twoYearRecordArchived) riskPoints += 15;
    if (!pndtResponses.biometricLogsClean) riskPoints += 15;

    let score = Math.max(0, 100 - riskPoints);
    let status = 'Low Statutory Risk';
    let color = 'text-green';
    let desc = 'Your centre shows good procedural health, but periodic review of Form F logs is advised.';

    if (score < 50) {
      status = 'CRITICAL SEIZURE VULNERABILITY';
      color = 'text-red';
      desc = 'HIGH RISK OF MACHINE SEALING OR CANCELLATION UNDER SECTION 20 PC-PNDT ACT. Urgent compliance rectifications required.';
    } else if (score < 75) {
      status = 'Moderate Inspection Risk';
      color = 'text-yellow';
      desc = 'Minor procedural gaps detected that District Appropriate Authorities (DAA) frequently penalize during inspections.';
    }

    return { score, status, color, desc };
  };

  // Calculate Billing Reconciliation
  const calculateBillingAudit = () => {
    let estimatedOvercharge = 0;
    let baseRate = billAmount * 0.12; // average administrative inflation
    if (hasImplant) estimatedOvercharge += billAmount * 0.18; // implant markup over NPPA
    if (hasUnbundledPpe) estimatedOvercharge += icuDays * 4500; // unbundled ICU kits
    if (hospitalTier === 'corporate') estimatedOvercharge += billAmount * 0.08;

    estimatedOvercharge = Math.min(billAmount * 0.45, Math.round(estimatedOvercharge));
    const justifiedAmount = billAmount - estimatedOvercharge;

    return { estimatedOvercharge, justifiedAmount };
  };

  const pndtAudit = calculatePndtRisk();
  const billAudit = calculateBillingAudit();

  return (
    <section id="bill-auditor" className="auditor-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <Activity size={14} />
              <span>Diagnostic &amp; Financial Risk Analysis</span>
            </div>
            <h2 className="section-title">
              Statutory Compliance &amp; <span className="text-gold">Forensic Auditor</span>
            </h2>
            <p className="section-subtitle">
              Interactive evaluation tools developed by Dr. Pankaj Vats [Ex-Civil Surgeon &amp; Appropriate Authority] 
              to audit statutory PC-PNDT/CEA risks and reconcile inflated hospital billing disputes.
            </p>
          </div>
        )}

        {/* Mode Switcher */}
        <div className="auditor-mode-bar">
          <button
            onClick={() => setActiveMode('pndt')}
            className={`mode-btn ${activeMode === 'pndt' ? 'mode-btn-active' : ''}`}
          >
            <Activity size={18} />
            <span>PC-PNDT Ultrasound Compliance Auditor</span>
          </button>
          <button
            onClick={() => setActiveMode('billing')}
            className={`mode-btn ${activeMode === 'billing' ? 'mode-btn-active' : ''}`}
          >
            <Receipt size={18} />
            <span>Hospital Over-Billing &amp; Claim Auditor</span>
          </button>
        </div>

        {/* MODE A: PC-PNDT Compliance Auditor */}
        {activeMode === 'pndt' && (
          <div className="auditor-card glass-panel">
            <div className="auditor-grid">
              {/* Left Column: Checklist */}
              <div className="audit-left">
                <h3 className="card-subhead">PC-PNDT Centre Compliance Self-Audit</h3>
                <p className="card-subtext">
                  Toggle each statutory requirement to simulate an official District Appropriate Authority (DAA) inspection:
                </p>

                <div className="checklist-group">
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.formFFiled}
                      onChange={() => handlePndtToggle('formFFiled')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">Form F Filled &amp; Uploaded Online Before Scan</span>
                      <small>Rule 9(8) - Every diagnostic scan must have Form F completed prior to imaging.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.machineRegistered}
                      onChange={() => handlePndtToggle('machineRegistered')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">Ultrasound Machine Registered with Serial Number</span>
                      <small>Section 18 - Operating any un-endorsed portable or clinic machine is non-bailable.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.allSonologistsMapped}
                      onChange={() => handlePndtToggle('allSonologistsMapped')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">All Performing Doctors Listed on Certificate of Registration</span>
                      <small>Rule 3(3) - Visiting doctors must be officially registered on the centre's certificate.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.warningBoardsDisplayed}
                      onChange={() => handlePndtToggle('warningBoardsDisplayed')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">Mandatory Warning Boards &amp; Gazette Copy in English/Hindi</span>
                      <small>Rule 17(1) - Displaying prohibition of sex selection prominently in waiting area.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.cctvMaintained}
                      onChange={() => handlePndtToggle('cctvMaintained')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">CCTV Footage &amp; Machine Logbook Maintained for 30+ Days</span>
                      <small>State supervisory directives mandate unhampered video logs and patient registers.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.referralPrescriptionsPreserved}
                      onChange={() => handlePndtToggle('referralPrescriptionsPreserved')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">Original Referral Doctor Prescription Attached to Every File</span>
                      <small>Rule 9(4) - Scans without doctor's clinical indication invite direct seizure memo.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.twoYearRecordArchived}
                      onChange={() => handlePndtToggle('twoYearRecordArchived')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">All Old Physical &amp; Digital Records Preserved for Minimum 2 Years</span>
                      <small>Section 29 - Premature disposal of registers or ultrasound thermal sheets is punishable.</small>
                    </div>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={pndtResponses.biometricLogsClean}
                      onChange={() => handlePndtToggle('biometricLogsClean')}
                    />
                    <div className="toggle-label-box">
                      <span className="toggle-title">Doctor Biometric Attendance Matches Machine Scanning Hours</span>
                      <small>Mismatch between doctor presence and scan timestamps creates severe criminal liability.</small>
                    </div>
                  </label>
                </div>
              </div>

              {/* Right Column: Dynamic Score & Guidance */}
              <div className="audit-right">
                <div className="score-meter-card">
                  <div className="score-circle">
                    <span className="score-number">{pndtAudit.score}</span>
                    <span className="score-out">/100</span>
                  </div>
                  <div className={`score-status ${pndtAudit.color}`}>
                    {pndtAudit.status}
                  </div>
                  <p className="score-desc">{pndtAudit.desc}</p>
                </div>

                <div className="audit-recommendation-box">
                  <h4>Five Eyes Preventive Legal Shield:</h4>
                  <ul className="rec-list">
                    <li>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span>Form F Zero-Error Protocol established by Dr. Pankaj Vats</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span>48-hour emergency de-sealing legal intervention if sealed</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span>Annual Medico-Legal Club membership covers continuous audit</span>
                    </li>
                  </ul>

                  <div className="audit-cta-row">
                    <Link href="/case-assessment" className="btn-primary w-full text-center">
                      <span>Schedule On-Site Centre Audit</span>
                      <ArrowRight size={17} />
                    </Link>
                    <a
                      href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20completed%20the%20PC-PNDT%20Compliance%20Auditor%20and%20need%20assistance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full text-center"
                    >
                      <span>Discuss with Dr. Vats on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE B: Hospital Over-Billing & Claim Auditor */}
        {activeMode === 'billing' && (
          <div className="auditor-card glass-panel">
            <div className="auditor-grid">
              {/* Left Column: Form Controls */}
              <div className="audit-left">
                <h3 className="card-subhead">Hospital Bill Forensic Estimator</h3>
                <p className="card-subtext">
                  Reconcile hospital billing against NPPA drug caps, unbundled consumables, and fair pricing:
                </p>

                <div className="bill-input-group">
                  <div className="input-field-row">
                    <label>Total Itemized Hospital Invoice (₹)</label>
                    <input
                      type="number"
                      value={billAmount}
                      onChange={(e) => setBillAmount(Number(e.target.value) || 0)}
                      className="form-input"
                    />
                  </div>

                  <div className="input-field-row">
                    <label>Total ICU / Critical Care Days: {icuDays} Days</label>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={icuDays}
                      onChange={(e) => setIcuDays(Number(e.target.value))}
                      className="form-range"
                    />
                  </div>

                  <div className="input-field-row">
                    <label>Hospital Classification</label>
                    <select
                      value={hospitalTier}
                      onChange={(e) => setHospitalTier(e.target.value)}
                      className="form-input"
                    >
                      <option value="corporate">Corporate Tertiary / Metro Hospital</option>
                      <option value="nursing_home">Private Nursing Home / Single Specialty</option>
                      <option value="trust">Charitable Trust / Multi-Specialty</option>
                    </select>
                  </div>

                  <div className="bill-checkboxes">
                    <label className="toggle-item">
                      <input
                        type="checkbox"
                        checked={hasImplant}
                        onChange={() => setHasImplant(!hasImplant)}
                      />
                      <div className="toggle-label-box">
                        <span className="toggle-title">Contains High-Value Implants (Stent / Knee / Valve)</span>
                        <small>Check for price markup exceeding NPPA statutory ceiling price mandates.</small>
                      </div>
                    </label>

                    <label className="toggle-item">
                      <input
                        type="checkbox"
                        checked={hasUnbundledPpe}
                        onChange={() => setHasUnbundledPpe(!hasUnbundledPpe)}
                      />
                      <div className="toggle-label-box">
                        <span className="toggle-title">Unbundled Consumables &amp; Daily Sterile Packages</span>
                        <small>Arbitrary billing for gloves, syringes, monitors beyond package rate.</small>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Audit Calculation */}
              <div className="audit-right">
                <div className="bill-result-card">
                  <div className="result-metric">
                    <span className="metric-label">Estimated Unjustified Markup:</span>
                    <span className="metric-val text-red">₹{billAudit.estimatedOvercharge.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="result-metric">
                    <span className="metric-label">Fair Benchmarked Billing:</span>
                    <span className="metric-val text-gold">₹{billAudit.justifiedAmount.toLocaleString('en-IN')}</span>
                  </div>

                  <p className="bill-note">
                    Based on NPPA drug/device orders, CGHS standard packages, and National Consumer Commission precedents.
                  </p>
                </div>

                <div className="audit-recommendation-box">
                  <h4>Legal Action Available:</h4>
                  <ul className="rec-list">
                    <li>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span>Formal Medico-Legal Audit Certificate issued by Five Eyes</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span>Cease-and-desist notice if patient or dead body is detained</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span>Representation before District Consumer Forum for restitution</span>
                    </li>
                  </ul>

                  <div className="audit-cta-row">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      <span>Submit Invoices for Forensic Audit</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .auditor-mode-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .mode-btn {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.85rem 1.65rem;
          background: rgba(14, 25, 45, 0.7);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mode-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold-light);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .mode-btn-active {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.35);
        }

        .auditor-card {
          padding: 2.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-radius: var(--radius-lg);
        }

        .auditor-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
        }

        .card-subhead {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .card-subtext {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .checklist-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .toggle-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .toggle-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .toggle-item input[type="checkbox"] {
          width: 20px;
          height: 20px;
          margin-top: 3px;
          accent-color: var(--accent-gold);
          flex-shrink: 0;
        }

        .toggle-label-box {
          display: flex;
          flex-direction: column;
        }

        .toggle-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .toggle-label-box small {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Score & Metrics */
        .score-meter-card {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .score-circle {
          display: inline-flex;
          align-items: baseline;
          margin-bottom: 0.75rem;
        }

        .score-number {
          font-family: var(--font-serif);
          font-size: 3.8rem;
          font-weight: 800;
          color: var(--accent-gold);
          line-height: 1;
        }

        .score-out {
          font-size: 1.2rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .score-status {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .text-green { color: #34d399; }
        .text-yellow { color: #fbbf24; }
        .text-red { color: #f87171; }

        .score-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .audit-recommendation-box {
          background: rgba(5, 11, 20, 0.7);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }

        .audit-recommendation-box h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--accent-gold-light);
        }

        .rec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .rec-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .audit-cta-row {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .w-full {
          width: 100%;
        }

        /* Billing Inputs */
        .bill-input-group {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-field-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-field-row label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 1rem;
        }

        .form-range {
          accent-color: var(--accent-gold);
          height: 6px;
        }

        .bill-checkboxes {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .bill-result-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .result-metric {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-glass);
        }

        .metric-label {
          font-size: 0.92rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .metric-val {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .bill-note {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 1rem;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .auditor-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
