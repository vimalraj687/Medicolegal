'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function EventsSection({ hideHeader = false }) {
  const [filter, setFilter] = useState('upcoming');

  const events = [
    {
      id: 1,
      type: 'upcoming',
      title: 'National Workshop on PC-PNDT Zero-Defect Compliance & Machine Sealing Prevention',
      date: 'Next Saturday • 10:00 AM - 4:00 PM',
      location: 'Chamber Hall, Gurugram & Live Pan-India Webinar',
      faculty: 'Conducted by Dr. Pankaj Vats [Ex-State PNDT Authority]',
      category: 'Diagnostic & Ultrasound',
      desc: 'Master the exact checklist used by District Appropriate Authorities (DAA). Learn how to eliminate clerical discrepancies in Form F, maintain biometric-compliant scan records, and survive decoy patient operations without risking machine sealing.',
      perks: [
        'Form F Audit Template & SOP Kit',
        'Emergency Legal Protocol for Seizure Memos',
        'CME Certificate of Participation'
      ]
    },
    {
      id: 2,
      type: 'upcoming',
      title: 'Doctor Defense Summit: Navigating Section 106 BNS & Consumer Court Lawsuits',
      date: 'Monthly Interactive Masterclass',
      location: 'Hybrid / Virtual Executive Class',
      faculty: 'Dr. Pankaj Vats & High Court Medico-Legal Senior Advocates',
      category: 'Clinical Practitioners',
      desc: 'A critical orientation for surgeons, obstetricians, anesthesiologists, and intensivists. How to invoke Supreme Court Jacob Mathew guidelines to prevent police FIR registration, draft unshakeable medical consent forms, and defeat inflated compensation claims.',
      perks: [
        'High-Risk Surgical Consent Templates',
        'Supreme Court Judgment Compendium for Doctors',
        'Direct Q&A with Dr. Pankaj Vats'
      ]
    },
    {
      id: 3,
      type: 'past',
      title: 'Hospital Crisis Management & Mob Violence Legal Protocols',
      date: 'Executive Training Archive',
      location: 'IMA House & Hospital Auditoriums',
      faculty: 'Five Eyes Forensic & Institutional Governance Panel',
      category: 'Hospital Administration',
      desc: 'Empowering hospital directors, superintendents, and RMOs to handle acute crisis situations: patient demise in ICU, extortionate vandalism, police interference, and compliance with the Clinical Establishments Act.',
      perks: [
        'Hospital Emergency Legal Response SOP',
        'Standardized Police Complaint Formats',
        'NABH Legal Documentation Vetting'
      ]
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.type === filter);

  return (
    <section id="events" className="events-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <Calendar size={14} />
              <span>Continuing Medico-Legal Education</span>
            </div>
            <h2 className="section-title">
              Workshops, Trainings &amp; <span className="text-gold">Upcoming Events</span>
            </h2>
            <p className="section-subtitle">
              Interactive training modules designed for doctors, ultrasound centres, hospital administrators, 
              and advocates to master medical law and safeguard clinical practice.
            </p>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="event-filters">
          <button
            onClick={() => setFilter('upcoming')}
            className={`filter-btn ${filter === 'upcoming' ? 'filter-active' : ''}`}
          >
            Upcoming Workshops
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`filter-btn ${filter === 'past' ? 'filter-active' : ''}`}
          >
            Completed Masterclasses
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'filter-active' : ''}`}
          >
            All Events
          </button>
        </div>

        {/* Events Cards Grid */}
        <div className="events-grid">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="event-card glass-panel">
              <div className="event-header-row">
                <span className="event-cat-tag">{evt.category}</span>
                <span className="event-date-tag">
                  <Calendar size={13} />
                  <span>{evt.date}</span>
                </span>
              </div>

              <h3 className="event-title">{evt.title}</h3>

              <div className="event-meta">
                <div className="meta-item">
                  <MapPin size={15} className="meta-icon" />
                  <span>{evt.location}</span>
                </div>
                <div className="meta-item">
                  <Award size={15} className="meta-icon" />
                  <span>{evt.faculty}</span>
                </div>
              </div>

              <p className="event-desc">{evt.desc}</p>

              <div className="event-perks-box">
                <div className="perks-title">What You Will Receive:</div>
                <ul className="perks-list">
                  {evt.perks.map((p, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="perk-check" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="event-action-row">
                <a
                  href={`https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20would%20like%20to%20register%20for%20the%20workshop:%20${encodeURIComponent(evt.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  <span>Reserve Seat / Register</span>
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .event-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
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
          color: var(--accent-gold-light);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .filter-active {
          background: var(--gold-gradient);
          color: #08101a;
          border-color: var(--accent-gold);
          font-weight: 700;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .event-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-glass);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.85) 0%, rgba(5, 11, 20, 0.95) 100%);
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
        }

        .event-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .event-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          gap: 0.5rem;
        }

        .event-cat-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-teal-light);
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .event-date-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: var(--accent-gold-light);
          font-weight: 600;
        }

        .event-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 1rem;
        }

        .event-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .meta-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .meta-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .event-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .event-perks-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          padding: 1rem;
          margin-bottom: 1.75rem;
        }

        .perks-title {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-light);
          margin-bottom: 0.65rem;
        }

        .perks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .perks-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .perk-check {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1100px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
