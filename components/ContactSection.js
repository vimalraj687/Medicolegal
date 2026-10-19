'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ContactSection({ hideHeader = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    profession: 'Doctor / Surgeon',
    subject: 'Urgent Case Review',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn('Network submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="contact-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <Mail size={14} />
              <span>Chamber Consultation &amp; Distress Cell</span>
            </div>
            <h2 className="section-title">
              Connect with <span className="text-gold">Five Eyes Chamber</span>
            </h2>
            <p className="section-subtitle">
              Prior appointment chamber consultations at our Gurugram headquarters, 
              or 24/7 emergency phone/WhatsApp intervention for acute legal distress.
            </p>
          </div>
        )}

        <div className="contact-grid">
          {/* Left Column: Chamber Info & Coordinates */}
          <div className="contact-info-panel glass-panel">
            <h3 className="panel-title">Five Eyes Medico-Legal Consultants</h3>
            <p className="panel-tagline">
              Under Chairmanship of Dr. Pankaj Vats [M.D. (AIIMS, Delhi), LL.B. (Hon's)]
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon text-gold">
                  <MapPin size={22} />
                </div>
                <div className="info-text">
                  <span className="item-label">Main Headquarters &amp; Chamber:</span>
                  <p className="item-val">
                    175, Ganpati Enclave, Near Vinayak Plaza,<br />
                    Opp. Bank of Maharashtra, Main Jharsa Road,<br />
                    Sector 15, Part II, Gurgaon, Haryana 122001, India
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon text-red">
                  <Phone size={22} />
                </div>
                <div className="info-text">
                  <span className="item-label">24/7 Emergency Distress Hotline:</span>
                  <a href="tel:+919728099999" className="item-val-highlight">
                    +91 97280 99999
                  </a>
                  <span className="item-sub">Immediate relief for police notices, FIRs &amp; raids</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon text-teal">
                  <Phone size={22} />
                </div>
                <div className="info-text">
                  <span className="item-label">Chamber Landline:</span>
                  <a href="tel:01242331555" className="item-val">
                    0124-233 1555
                  </a>
                  <span className="item-sub">Mon - Sat: 9:30 AM to 7:00 PM</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon text-whatsapp">
                  <MessageSquare size={22} />
                </div>
                <div className="info-text">
                  <span className="item-label">WhatsApp Direct Desk:</span>
                  <a
                    href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20seek%20urgent%20guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-val text-green"
                  >
                    +91 97280 99999 (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon text-gold">
                  <Clock size={22} />
                </div>
                <div className="info-text">
                  <span className="item-label">Consultation Hours:</span>
                  <p className="item-val">
                    Monday to Saturday: 9:00 AM – 7:00 PM<br />
                    <em>(Consultations with prior appointment)</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="confidentiality-shield">
              <ShieldCheck size={20} className="shield-icon" />
              <span>Strict Doctor-Attorney Confidentiality &amp; Legal Privilege</span>
            </div>
          </div>

          {/* Right Column: Appointment / Inquiry Form */}
          <div className="contact-form-panel glass-panel">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={54} className="text-gold mb-3" />
                <h3>Your Inquiry Has Been Dispatched</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Dr. Pankaj Vats and the senior legal desk 
                  have received your communication. For urgent matters, please call directly or connect on WhatsApp.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20am%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.profession)}).%20I%20submitted%20an%20inquiry%20regarding%20${encodeURIComponent(formData.subject)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-center"
                  >
                    <MessageSquare size={17} />
                    <span>Proceed on WhatsApp for Instant Response</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary w-full"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-header">
                  <h3>Drop Us a Line</h3>
                  <p>Send your query or case briefing directly to Dr. Pankaj Vats</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. K. Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number (WhatsApp Preferred) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 97280 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="doctor@clinic.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Profession / Stakeholder Role</label>
                    <select
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className="form-input"
                    >
                      <option value="Doctor / Surgeon">Doctor / Surgeon</option>
                      <option value="Ultrasound / Diagnostic Centre">Ultrasound / Diagnostic Centre Owner</option>
                      <option value="Hospital Administrator">Hospital / Nursing Home Director</option>
                      <option value="Trial Advocate">Trial Advocate / Legal Counsel</option>
                      <option value="Insurance / TPA">Insurance TPA / Investigator</option>
                      <option value="Patient / Family">Patient / Family (Second Opinion)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label>Primary Matter / Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  >
                    <option value="Medical Negligence Defense">Medical Negligence Defense (Consumer / FIR)</option>
                    <option value="PC-PNDT Machine Sealing & Form F">PC-PNDT Machine Sealing &amp; Form F Notice</option>
                    <option value="Clinical Establishments Act (CEA)">Clinical Establishments Act (CEA) Compliance</option>
                    <option value="MTP Act Compliance">MTP Act Compliance / Inspection</option>
                    <option value="Autopsy / Post-Mortem Vetting">Autopsy / Post-Mortem Forensic Vetting</option>
                    <option value="Hospital Bill Forensic Audit">Hospital Bill Forensic Audit</option>
                    <option value="Medico-Legal Club Membership">Medico-Legal Club Membership Inquiry</option>
                    <option value="Other Medico-Legal Consultation">Other Medico-Legal Consultation</option>
                  </select>
                </div>

                <div className="form-group mb-6">
                  <label>Brief Description of Case / Incident *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details of notice date, nature of allegations, or urgent assistance required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full submit-btn">
                  <Send size={18} />
                  <span>Send Confidential Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .contact-info-panel, .contact-form-panel {
          padding: 2.75rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(212, 175, 55, 0.25);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
        }

        .panel-title {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .panel-tagline {
          font-size: 0.88rem;
          color: var(--accent-gold-light);
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .info-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-red { color: #f87171; }
        .text-teal { color: var(--accent-teal-light); }
        .text-green { color: #25d366; }
        .text-whatsapp { color: #25d366; }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .item-label {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .item-val {
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .item-val-highlight {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ef4444;
          letter-spacing: 0.02em;
        }

        .item-val-highlight:hover {
          color: #f87171;
        }

        .item-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }

        .confidentiality-shield {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold-light);
        }

        .shield-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        /* Form */
        .form-header {
          margin-bottom: 2rem;
        }

        .form-header h3 {
          font-size: 1.5rem;
          margin-bottom: 0.35rem;
        }

        .form-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
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

        .form-input, .form-textarea {
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.92rem;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent-gold);
          background: rgba(255, 255, 255, 0.08);
        }

        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.75rem; }
        .w-full { width: 100%; }

        .submit-btn {
          padding: 0.95rem;
          font-size: 1rem;
        }

        .form-success-box {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .form-success-box h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .form-success-box p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-info-panel, .contact-form-panel {
            padding: 1.75rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
