'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Check, 
  PhoneCall, 
  Building2, 
  Stethoscope, 
  Activity, 
  Lock, 
  ArrowRight, 
  HelpCircle,
  FileCheck,
  AlertOctagon,
  Users
} from 'lucide-react';

export default function MedicoLegalClub({ hideHeader = false }) {
  const [selectedTier, setSelectedTier] = useState('doctor');
  const [joined, setJoined] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    specialty: '',
    city: '',
    phone: '',
    email: '',
  });

  const tiers = [
    {
      id: 'doctor',
      name: 'Individual Doctor Shield',
      icon: Stethoscope,
      subtitle: 'For Surgeons, Gynecologists, Radiologists & Physicians',
      price: 'Annual Retainer Membership',
      badge: 'Most Popular',
      benefits: [
        '24/7 Emergency Medico-Legal Distress Hotline for Police or Patient Unrest',
        'Direct Priority Consultation with Dr. Pankaj Vats (M.D. AIIMS, LL.B.)',
        'Vetting of customized High-Risk Surgical & Anesthesia Informed Consent Forms',
        'Immediate drafting of legal replies to Consumer Forum notices & Medical Council summons',
        'Guidance on police notices under Section 106 BNS applying Jacob Mathew guidelines',
        'Free attendance to all Five Eyes Medico-Legal CME webinars & workshops'
      ]
    },
    {
      id: 'diagnostic',
      name: 'PC-PNDT & Diagnostic Shield',
      icon: Activity,
      subtitle: 'For Ultrasound Clinics, Sonologists & Imaging Centres',
      price: 'Annual Centre Membership',
      badge: 'High Statutory Risk',
      benefits: [
        'Annual On-Site or Digital Statutory Audit of PC-PNDT Records & Form F Filing',
        '48-72 Hour Emergency De-Sealing Legal Team in case of arbitrary machine seizure',
        'Vetting of sonologist registration logs, ultrasound machine AMCs & warning boards',
        'Drafting responses to District Appropriate Authority (DAA) inspection show-cause notices',
        'Radiologist diagnostic variance phraseology to defend against misdiagnosis claims',
        'AERB radiation safety and documentation audit for CT/MRI setups'
      ]
    },
    {
      id: 'hospital',
      name: 'Hospital & Clinical Establishment',
      icon: Building2,
      subtitle: 'For Nursing Homes, Daycare Centres & Multi-Specialty Hospitals',
      price: 'Institutional Retainer',
      badge: 'Comprehensive Entity',
      benefits: [
        'Complete Clinical Establishments Act (CEA) statutory compliance & registration audit',
        'Hospital Panic Protocol: Emergency legal intervention during ICU mob violence & vandalism',
        'Patient dispute arbitration & itemized billing reconciliation before litigation erupts',
        'Drafting of visiting consultant contracts & hospital vicarious liability indemnity clauses',
        'Periodic staff and RMO training workshops on medical documentation and consent',
        'Comprehensive annual institutional risk management audit report'
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          profession: formData.specialty,
          subject: `Medico-Legal Club Enrollment (${currentTierObj.name})`,
          message: `Specialty: ${formData.specialty}, City: ${formData.city}, Tier: ${currentTierObj.name}`,
        }),
      });
    } catch (err) {
      console.warn('Enrollment dispatch notice:', err);
    } finally {
      setJoined(true);
    }
  };

  const currentTierObj = tiers.find(t => t.id === selectedTier) || tiers[0];

  return (
    <section id="medico-legal-club" className="club-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <ShieldCheck size={14} />
              <span>Annual Risk Management Program</span>
            </div>
            <h2 className="section-title">
              Medico-Legal Club <span className="text-gold">Membership</span>
            </h2>
            <p className="section-subtitle">
              Proactive 365-day legal armor to ensure absolute compliance with all medical and health laws. 
              Protect your license, your ultrasound equipment, and your healthcare establishment before a crisis strikes.
            </p>
          </div>
        )}

        {/* Club Pillar Bar */}
        <div className="club-pillars-grid">
          <div className="pillar-item glass-panel">
            <div className="pillar-icon text-gold">
              <PhoneCall size={24} />
            </div>
            <div className="pillar-content">
              <h4>24/7 Panic Helpline</h4>
              <p>Immediate phone and legal support when police or inspection authorities arrive unannounced.</p>
            </div>
          </div>

          <div className="pillar-item glass-panel">
            <div className="pillar-icon text-teal">
              <FileCheck size={24} />
            </div>
            <div className="pillar-content">
              <h4>Routine Statutory Audits</h4>
              <p>Continuous audit of Form F, MTP registers, informed consent forms, and CEA regulations.</p>
            </div>
          </div>

          <div className="pillar-item glass-panel">
            <div className="pillar-icon text-gold">
              <Users size={24} />
            </div>
            <div className="pillar-content">
              <h4>Direct Access to Dr. Vats</h4>
              <p>Priority access to Dr. Pankaj Vats, former Civil Surgeon and State PNDT Authority.</p>
            </div>
          </div>
        </div>

        {/* Tier Selector Buttons */}
        <div className="tier-selector-row">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const isSelected = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`tier-tab-btn ${isSelected ? 'tier-tab-active' : ''}`}
              >
                <Icon size={18} />
                <span>{tier.name}</span>
                {tier.badge && <span className="tier-tab-badge">{tier.badge}</span>}
              </button>
            );
          })}
        </div>

        {/* Selected Tier Feature Card */}
        <div className="tier-display-card glass-panel">
          <div className="tier-card-header">
            <div>
              <span className="tier-pill">{currentTierObj.badge}</span>
              <h3 className="tier-card-title">{currentTierObj.name}</h3>
              <p className="tier-card-sub">{currentTierObj.subtitle}</p>
            </div>
            <div className="tier-price-box">
              <span className="price-tag">{currentTierObj.price}</span>
              <span className="price-desc">Customized to your facility size</span>
            </div>
          </div>

          <div className="benefits-grid">
            <h4 className="benefits-title">Included Member Privileges:</h4>
            <div className="benefits-list">
              {currentTierObj.benefits.map((b, idx) => (
                <div key={idx} className="benefit-item">
                  <div className="check-box">
                    <Check size={16} />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form / Action */}
          <div className="club-enrollment-box">
            {joined ? (
              <div className="enrollment-success">
                <ShieldCheck size={48} className="success-icon" />
                <h4>Membership Enrollment Request Received</h4>
                <p>
                  Thank you, <strong>Dr. {formData.name || 'Member'}</strong>. Dr. Pankaj Vats&#x27;s executive desk will 
                  contact you at <strong>{formData.phone || '+91-97280 99999'}</strong> within 2 business hours with membership details and your membership certificate.
                </p>
                <div className="success-callout">
                  For urgent emergency distress, call directly: <a href="tel:+919728099999">+91 97280 99999</a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enrollment-form">
                <div className="form-header-row">
                  <h4>Enroll in Medico-Legal Club Risk Management</h4>
                  <p>Submit your details to receive membership kit &amp; schedule initial compliance audit</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name / Establishment Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma / City Ultrasound"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Qualification &amp; Specialty *</label>
                    <input
                      type="text"
                      name="specialty"
                      required
                      placeholder="e.g. MS (Ob-Gyn) / Radiologist / 50-Bed Hospital"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number (WhatsApp Preferred) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>City &amp; State *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Gurugram, Delhi NCR / Rohtak, Haryana"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-primary enroll-btn">
                    <ShieldCheck size={18} />
                    <span>Join Medico-Legal Club for Risk Management</span>
                    <ArrowRight size={18} />
                  </button>
                  <a
                    href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20am%20interested%20in%20joining%20the%20Medico-Legal%20Club."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <span>Instant WhatsApp Inquiry</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .club-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem;
          border: 1px solid var(--border-glass);
          background: rgba(14, 25, 45, 0.7);
        }

        .pillar-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-glass);
        }

        .pillar-content h4 {
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .pillar-content p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .tier-selector-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .tier-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.85rem 1.65rem;
          background: rgba(14, 25, 45, 0.8);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .tier-tab-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold-light);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .tier-tab-active {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.35);
        }

        .tier-tab-badge {
          background: rgba(0, 0, 0, 0.25);
          color: inherit;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          text-transform: uppercase;
        }

        .tier-display-card {
          padding: 2.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-radius: var(--radius-lg);
        }

        .tier-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-glass);
          margin-bottom: 2rem;
        }

        .tier-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-gold-light);
          background: rgba(212, 175, 55, 0.15);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          margin-bottom: 0.5rem;
        }

        .tier-card-title {
          font-size: 1.85rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .tier-card-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .tier-price-box {
          text-align: right;
        }

        .price-tag {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--accent-gold);
        }

        .price-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .benefits-title {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .benefits-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .check-box {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .club-enrollment-box {
          background: rgba(5, 11, 20, 0.7);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 2rem;
        }

        .form-header-row {
          margin-bottom: 1.5rem;
        }

        .form-header-row h4 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .form-header-row p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
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
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
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

        .form-submit-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .enroll-btn {
          padding: 0.9rem 1.85rem;
        }

        .enrollment-success {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon {
          color: var(--accent-gold);
          margin-bottom: 1rem;
        }

        .enrollment-success h4 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .enrollment-success p {
          max-width: 600px;
          margin: 0 auto 1.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .success-callout {
          display: inline-block;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .success-callout a {
          color: #ffffff;
          font-weight: 800;
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .club-pillars-grid {
            grid-template-columns: 1fr;
          }
          .benefits-list {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
