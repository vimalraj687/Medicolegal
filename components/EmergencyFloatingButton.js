'use client';

import { useState } from 'react';
import { Phone, MessageSquare, ShieldAlert, X, ChevronUp, ChevronDown } from 'lucide-react';

export default function EmergencyFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-hotline-container" role="region" aria-label="Emergency Distress Hotline">
      {isOpen ? (
        <div className="floating-card glass-panel">
          <div className="floating-header">
            <div className="header-badge">
              <span className="live-pulse"></span>
              <span className="badge-text">24/7 Acute Distress Desk</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="close-btn"
              aria-label="Close Emergency Hotline Widget"
            >
              <X size={16} />
            </button>
          </div>

          <h4 className="card-headline">Police Notice, Inspection or Raid?</h4>
          <p className="card-desc">
            Direct priority connection to Dr. Pankaj Vats [M.D. AIIMS, LL.B.] for immediate stay and strategic defense.
          </p>

          <div className="floating-actions">
            <a href="tel:+919728099999" className="action-btn call-btn">
              <Phone size={17} />
              <div className="btn-text">
                <span className="btn-label">Emergency Phone Call</span>
                <span className="btn-main">+91 97280 99999</span>
              </div>
            </a>

            <a
              href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20have%20an%20urgent%20medico-legal%20situation%20and%20need%20immediate%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn wa-btn"
            >
              <MessageSquare size={17} />
              <div className="btn-text">
                <span className="btn-label">WhatsApp Direct</span>
                <span className="btn-main">Chat with Dr. Vats</span>
              </div>
            </a>
          </div>

          <div className="chamber-note">
            <span>Chamber: 175, Ganpati Enclave, Sector 15 Part II, Gurgaon</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="collapsed-pill"
          aria-label="Open 24/7 Medico-Legal Distress Cell"
        >
          <div className="pill-badge">
            <span className="live-pulse"></span>
            <ShieldAlert size={17} className="shield-icon" />
          </div>
          <span className="pill-text">24/7 Distress Cell</span>
          <ChevronUp size={16} className="chevron-icon" />
        </button>
      )}

      <style jsx>{`
        .floating-hotline-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          font-family: var(--font-sans);
        }

        .collapsed-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.15rem;
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.96) 0%, rgba(5, 11, 20, 0.98) 100%);
          border: 1px solid var(--accent-gold);
          border-radius: var(--radius-full);
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.25);
          transition: var(--transition-normal);
        }

        .collapsed-pill:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 55, 0.4);
          border-color: var(--accent-gold-light);
        }

        .pill-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .shield-icon {
          color: #ef4444;
        }

        .pill-text {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          letter-spacing: 0.02em;
        }

        .chevron-icon {
          color: var(--text-muted);
        }

        /* Expanded Card */
        .floating-card {
          width: 340px;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(212, 175, 55, 0.4);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.98) 0%, rgba(5, 11, 20, 0.99) 100%);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.2);
          animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .floating-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .header-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
          text-transform: uppercase;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .close-btn:hover {
          color: #ffffff;
        }

        .card-headline {
          font-size: 1.15rem;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }

        .card-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 1.25rem;
        }

        .floating-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .call-btn {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #ffffff;
        }

        .call-btn:hover {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.45) 100%);
          border-color: #ef4444;
          transform: translateY(-1px);
        }

        .wa-btn {
          background: rgba(37, 211, 102, 0.15);
          border: 1px solid rgba(37, 211, 102, 0.35);
          color: #ffffff;
        }

        .wa-btn:hover {
          background: rgba(37, 211, 102, 0.25);
          border-color: #25d366;
          transform: translateY(-1px);
        }

        .btn-text {
          display: flex;
          flex-direction: column;
        }

        .btn-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-main {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
        }

        .chamber-note {
          text-align: center;
          font-size: 0.7rem;
          color: var(--text-muted);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 0.65rem;
        }

        .live-pulse {
          width: 7px;
          height: 7px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 6px #ef4444;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.3); }
          100% { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 600px) {
          .floating-hotline-container {
            bottom: 16px;
            right: 16px;
          }
          .floating-card {
            width: calc(100vw - 32px);
          }
        }
      `}</style>
    </div>
  );
}
