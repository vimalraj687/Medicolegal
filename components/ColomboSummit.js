'use client';

import Image from 'next/image';
import { Globe, Users, Video, Calendar, MapPin, Download, MessageSquare, ArrowRight, Award } from 'lucide-react';

export default function ColomboSummit({ hideHeader = false }) {
  const nations = [
    { name: 'India', flag: '🇮🇳', role: 'Host Delegation & High Court Counsel' },
    { name: 'Sri Lanka', flag: '🇱🇰', role: 'Colombo Secretariat & Medical Faculty' },
    { name: 'Thailand', flag: '🇹🇭', role: 'Nippon Legal Intl Arbitration Partner' },
    { name: 'UAE', flag: '🇦🇪', role: 'GCC Healthcare Regulatory Observers' },
    { name: 'Malaysia', flag: '🇲🇾', role: 'ASEAN Medico-Legal Bar Association' },
    { name: 'Vietnam', flag: '🇻🇳', role: 'International Medical Tourism Counsel' },
  ];

  return (
    <section id="colombo-summit" className="section-spacing summit-section">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <Globe size={14} />
              <span>Global Jurisprudential Cooperation</span>
            </div>
            <h2 className="section-title">
              International <span className="text-gold">Medico-Legal Conference</span>
            </h2>
            <p className="section-subtitle">
              Unifying judicial scholars, senior advocates, forensic pathologists, and medical council delegates
              from six Asian nations to establish cross-border healthcare dispute resolution frameworks.
            </p>
          </div>
        )}

        {/* Summit Showcase Card */}
        <div className="summit-card glass-panel">
          <div className="summit-image-column">
            <Image
              src="/images/conference_summit.jpg"
              alt="International Medico Legal Arbitration Summit Keynote Stage"
              fill
              className="summit-img"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="summit-img-overlay"></div>
            <div className="summit-date-badge">
              <Calendar size={15} />
              <span>Annual International Symposium</span>
            </div>
          </div>

          <div className="summit-details-column">
            <div className="location-pill">
              <MapPin size={15} className="pin-icon" />
              <span>Colombo, Sri Lanka & Hybrid Global Streaming</span>
            </div>

            <h3 className="summit-heading">
              Transnational Medical Arbitration & Standard of Care in the Era of AI
            </h3>

            <p className="summit-desc">
              Organized under the auspices of The Medico Legal Group, senior advocates, and Southeast Asian legal chapters. 
              The conference addresses critical gaps in medical tourism contracts, telemedicine malpractice liability, 
              and the evidentiary admissibility of artificial intelligence in surgical triage.
            </p>

            <div className="nations-grid">
              <div className="nations-title">Participating Jurisdictions:</div>
              <div className="nations-tags">
                {nations.map((n, i) => (
                  <div key={i} className="nation-chip">
                    <span className="nation-flag">{n.flag}</span>
                    <span className="nation-name">{n.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="summit-actions">
              <a 
                href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20would%20like%20to%20register%20as%20a%20delegate%20for%20the%20International%20Medico-Legal%20Conference%20in%20Colombo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Users size={16} />
                <span>Delegate &amp; Speaker Inquiries</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href="https://wa.me/918184972455?text=Please%20send%20the%20official%20brochure%20for%20the%20International%20Medico-Legal%20Conference."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={16} />
                <span>Request Prospectus</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video & Arbitration Insights Row */}
        <div className="media-insights-grid">
          <div className="video-card glass-panel">
            <div className="video-header">
              <Video size={18} className="video-icon" />
              <h4>Judicial Keynote: Medico-Legal Arbitration & Patient Advocacy</h4>
            </div>
            <div className="video-embed-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLp0_Y8iE5wQ" 
                title="International Medico Legal Forum Arbitration Keynote"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
            <p className="video-caption">
              Watch Senior Advocate V. Ravindhar and panel members debate alternative dispute resolution (ADR) 
              mechanisms in complex clinical misadventure claims.
            </p>
          </div>

          <div className="agenda-card glass-panel">
            <h4 className="agenda-card-title">Key Symposia Deliverables</h4>
            <div className="agenda-items">
              <div className="agenda-item">
                <div className="agenda-num">01</div>
                <div className="agenda-info">
                  <div className="agenda-theme">Cross-Border Medical Tourism Liability</div>
                  <div className="agenda-desc">Enforcing arbitral awards when foreign patients suffer negligence in overseas tertiary hospitals.</div>
                </div>
              </div>

              <div className="agenda-item">
                <div className="agenda-num">02</div>
                <div className="agenda-info">
                  <div className="agenda-theme">Forensic Pathology Standard Harmonization</div>
                  <div className="agenda-desc">Establishing standardized protocols for histological and post-mortem evidentiary preservation.</div>
                </div>
              </div>

              <div className="agenda-item">
                <div className="agenda-num">03</div>
                <div className="agenda-info">
                  <div className="agenda-theme">Pre-Litigation Clinical Mediation</div>
                  <div className="agenda-desc">Preventing protracted multi-year court battles through fast-track expert medical mediation panels.</div>
                </div>
              </div>
            </div>

            <div className="monthly-magazine-note">
              <MessageSquare size={16} className="text-gold" />
              <span>
                <strong>Monthly Medico-Legal Magazine:</strong> Receive scholarly summaries and case digests directly on WhatsApp by messaging <em>"HELLO FORUM"</em> to +91 81849 72455.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .summit-section {
          background: linear-gradient(180deg, #050b14 0%, #081527 50%, #050b14 100%);
        }

        .text-center {
          text-align: center;
        }

        .section-header {
          max-width: 860px;
          margin: 0 auto 3rem;
        }

        .section-title {
          font-size: 2.85rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .summit-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.25);
          margin-bottom: 2.5rem;
        }

        .summit-image-column {
          position: relative;
          min-height: 420px;
        }

        .summit-img {
          object-fit: cover;
          object-position: center;
        }

        .summit-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 60%, rgba(14, 25, 45, 0.95) 100%);
        }

        .summit-date-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(5, 11, 20, 0.85);
          border: 1px solid var(--accent-gold);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          backdrop-filter: blur(8px);
        }

        .summit-details-column {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(14, 25, 45, 0.95);
        }

        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--accent-teal-light);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .pin-icon {
          color: var(--accent-teal);
        }

        .summit-heading {
          font-size: 1.85rem;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }

        .summit-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .nations-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
        }

        .nations-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .nation-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: var(--text-primary);
        }

        .summit-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Media Insights Row */
        .media-insights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .video-card, .agenda-card {
          padding: 2rem;
        }

        .video-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
        }

        .video-icon {
          color: #ef4444;
        }

        .video-header h4 {
          font-size: 1.15rem;
          color: #ffffff;
        }

        .video-embed-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #000;
          margin-bottom: 1rem;
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-caption {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .agenda-card-title {
          font-size: 1.3rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .agenda-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .agenda-item {
          display: flex;
          gap: 1rem;
        }

        .agenda-num {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--accent-gold);
          opacity: 0.8;
          line-height: 1;
        }

        .agenda-theme {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .agenda-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .monthly-magazine-note {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 1rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .summit-card {
            grid-template-columns: 1fr;
          }
          .summit-img-overlay {
            background: linear-gradient(0deg, rgba(14, 25, 45, 0.95) 0%, transparent 100%);
          }
          .summit-details-column {
            padding: 2rem;
          }
          .media-insights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
