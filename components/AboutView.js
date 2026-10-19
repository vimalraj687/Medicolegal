'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  Scale, 
  Award, 
  ShieldCheck, 
  Stethoscope, 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ArrowRight,
  Building2,
  Users,
  Clock,
  MapPin,
  Gavel
} from 'lucide-react';

export default function AboutView() {
  const pillars = [
    {
      num: '01',
      title: 'AIIMS Forensic Pedigree',
      desc: 'Grounding every legal defense in unimpeachable post-graduate forensic medicine, clinical toxicology, and post-mortem pathology from AIIMS, New Delhi.'
    },
    {
      num: '02',
      title: 'Inside Regulatory Mastery',
      desc: 'Having personally served as Civil Surgeon and District Appropriate Authority under the PC-PNDT Act, Dr. Pankaj Vats anticipates inspection team tactics.'
    },
    {
      num: '03',
      title: 'Trial Court Evidentiary Firepower',
      desc: 'Collaborating with trial advocates to formulate incisive medical cross-examination questions that expose biased medical board opinions.'
    },
    {
      num: '04',
      title: '24/7 Emergency Distress Cell',
      desc: 'Instant intervention during surprise PC-PNDT inspections, police notices under Section 106 BNS, and hospital mob violence.'
    },
    {
      num: '05',
      title: 'Proactive Retainer Shield',
      desc: 'The Medico-Legal Club provides 365-day statutory audits of Form F, consent architecture, and CEA guidelines to prevent litigation before it begins.'
    }
  ];

  const milestones = [
    { num: '34+', label: 'Years Combined Clinical & Legal Experience' },
    { num: '2,500+', label: 'Doctors, Specialists & Clinics Protected' },
    { num: '100+', label: 'Ultrasound Machines De-Sealed & Protected' },
    { num: '24/7', label: 'Active Medico-Legal Distress Cell' },
  ];

  return (
    <div className="about-page">
      <PageHeader
        badge={<><Award size={14} /> Founded 2012 • Gurugram Chamber</>}
        title="About Five Eyes"
        titleHighlight="Medico-Legal Consultants"
        subtitle="Uniting AIIMS post-graduate forensic medicine pedigree with senior governmental health directorship and judicial jurisprudence to protect doctors across India."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Main Narrative Section */}
      <section className="about-narrative section-spacing">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-left">
              <span className="narrative-badge">Our Founding Mission</span>
              <h2 className="narrative-title">
                Protecting Healthcare Healers from <span className="text-gold">Legal Venom</span>
              </h2>
              <blockquote className="narrative-quote">
                &ldquo;A medical complication is NOT medical negligence. In an era where clinical misadventures are weaponized into criminal extortion, our duty is to stand as an impenetrable shield between dedicated doctors and administrative excess.&rdquo;
                <footer className="quote-author">— Dr. Pankaj Vats, Chairman &amp; Executive Director</footer>
              </blockquote>
              <div className="narrative-body">
                <p>
                  Five Eyes Medico-Legal Consultants was founded in 2012 under the visionary guidance of <strong>Dr. Pankaj Vats</strong> [M.D. Forensic Medicine, AIIMS New Delhi &amp; LL.B. (Hon&apos;s)], together with senior clinical and forensic colleagues <strong>Dr. Subhash Mehta</strong> and <strong>Prof. (Dr.) Rajiv Kumar</strong>.
                </p>
                <p>
                  Having served for 26 years in the Government of Haryana across top executive health postings — including Civil Surgeon, Principal Medical Officer, District Appropriate Authority under the PC-PNDT Act, and Director of Health Services (Family Welfare) — Dr. Vats recognized a growing systemic crisis: <em>honest clinicians being crushed under aggressive PC-PNDT inspections, frivolous consumer court complaints demanding crores, and unlawful police threats of arrest under Section 106 BNS (formerly Section 304A IPC)</em>.
                </p>
                <p>
                  Five Eyes was established to combine medical science, forensic pathology, and constitutional law under one roof, providing doctors, diagnostic chains, and hospitals with unshakeable legal armor.
                </p>
              </div>

              <div className="narrative-actions">
                <Link href="/case-assessment" className="btn-primary">
                  <span>Request Free Case Review</span>
                  <ArrowRight size={17} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  <span>Explore 10 Practice Areas</span>
                </Link>
              </div>
            </div>

            <div className="narrative-right">
              <div className="founder-image-card glass-panel">
                <div className="founder-img-box">
                  <Image
                    src="/images/dr_pankaj_vats.jpg"
                    alt="Dr. Pankaj Vats - Chairman Five Eyes Medico-Legal Consultants"
                    width={560}
                    height={400}
                    className="founder-about-photo"
                  />
                  <div className="founder-tag">
                    <span className="tag-name">Dr. Pankaj Vats</span>
                    <span className="tag-title">M.D. (AIIMS), LL.B. (Hon&apos;s)</span>
                  </div>
                </div>
                <div className="founder-summary-box">
                  <div className="summary-item">
                    <GraduationCap size={16} className="text-gold" />
                    <span>M.D. Forensic Medicine, AIIMS New Delhi</span>
                  </div>
                  <div className="summary-item">
                    <Scale size={16} className="text-gold" />
                    <span>LL.B. (Hon&apos;s), MDU Rohtak</span>
                  </div>
                  <div className="summary-item">
                    <Award size={16} className="text-gold" />
                    <span>Former Civil Surgeon &amp; District Appropriate Authority</span>
                  </div>
                  <div className="summary-item">
                    <Building2 size={16} className="text-gold" />
                    <span>Former Director Health Services, Govt. of Haryana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Eyes Pillars */}
      <section className="pillars-section section-spacing">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <ShieldCheck size={14} />
              <span>The Five Eyes Advantage</span>
            </div>
            <h2 className="section-title">
              Our 5 Core <span className="text-gold">Jurisprudential Pillars</span>
            </h2>
            <p className="section-subtitle">
              Why leading hospitals, radiologists, surgeons, and trial advocates trust Five Eyes across India.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pil, idx) => (
              <div key={idx} className="pillar-card glass-panel">
                <span className="pillar-num">{pil.num}</span>
                <h3 className="pillar-title">{pil.title}</h3>
                <p className="pillar-desc">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Strip */}
      <section className="milestones-section">
        <div className="container">
          <div className="milestones-grid glass-panel">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-item">
                <div className="milestone-num text-gold">{m.num}</div>
                <div className="milestone-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Council */}
      <section className="council-section section-spacing">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <Users size={14} />
              <span>National Advisory Council</span>
            </div>
            <h2 className="section-title">
              Senior Forensic &amp; <span className="text-gold">Clinical Leadership</span>
            </h2>
            <p className="section-subtitle">
              Distinguished medical academicians, hospital directors, and forensic pathology professors guiding our legal desk.
            </p>
          </div>

          <div className="council-grid">
            <div className="council-card glass-panel">
              <div className="council-img-wrap">
                <Image
                  src="/images/dr_pankaj_vats.jpg"
                  alt="Dr. Pankaj Vats"
                  width={120}
                  height={120}
                  className="council-avatar"
                />
              </div>
              <span className="council-badge">Founder &amp; Chairman</span>
              <h3 className="council-name">Dr. Pankaj Vats</h3>
              <div className="council-creds">M.D. (AIIMS, Delhi) • LL.B. (Hon&apos;s)</div>
              <p className="council-bio">
                Postgraduate in Forensic Medicine from AIIMS with 34+ years of healthcare leadership. Former Civil Surgeon and District Appropriate Authority executing PC-PNDT regulations.
              </p>
            </div>

            <div className="council-card glass-panel">
              <div className="council-img-wrap">
                <Image
                  src="/images/leadership_council.jpg"
                  alt="Dr. Subhash Mehta"
                  width={120}
                  height={120}
                  className="council-avatar"
                />
              </div>
              <span className="council-badge">Clinical Compliance Lead</span>
              <h3 className="council-name">Dr. Subhash Mehta</h3>
              <div className="council-creds">M.B.B.S. • M.D. • Hospital Risk Lead</div>
              <p className="council-bio">
                Spearheads clinical standard-of-care audits, ICU consent architecture, and emergency panic protocols for multi-specialty hospitals and nursing homes.
              </p>
            </div>

            <div className="council-card glass-panel">
              <div className="council-img-wrap">
                <Image
                  src="/images/forensic_analysis.jpg"
                  alt="Prof. Rajiv Kumar"
                  width={120}
                  height={120}
                  className="council-avatar"
                />
              </div>
              <span className="council-badge">Forensic Pathology Lead</span>
              <h3 className="council-name">Prof. (Dr.) Rajiv Kumar</h3>
              <div className="council-creds">M.D. (Forensic Medicine) • F.I.A.M.S.</div>
              <p className="council-bio">
                Former Head of Department of Forensic Medicine. Renowned expert witness in High Courts specializing in autopsy re-vetting, viscera toxicology, and wound mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamber Coordinates & Call to Action */}
      <section className="chamber-location-section section-spacing">
        <div className="container">
          <div className="chamber-card glass-panel">
            <div className="chamber-left">
              <span className="chamber-badge">Chamber Headquarters</span>
              <h2 className="chamber-title">Consult at Our Gurugram Chamber</h2>
              <p className="chamber-text">
                Prior appointment consultations with Dr. Pankaj Vats, or emergency 24/7 telephone intervention for raids, police notices, or urgent High Court writ petitions.
              </p>
              <div className="chamber-details">
                <div className="detail-row">
                  <MapPin size={18} className="text-gold" />
                  <span>175, Ganpati Enclave, Sector 15, Part II, Gurgaon, Haryana 122001</span>
                </div>
                <div className="detail-row">
                  <Phone size={18} className="text-gold" />
                  <span>24/7 Helpline: <strong>+91 97280 99999</strong> | Landline: 0124-233 1555</span>
                </div>
                <div className="detail-row">
                  <Clock size={18} className="text-gold" />
                  <span>Monday - Saturday: 9:00 AM to 7:00 PM (Prior Appointment)</span>
                </div>
              </div>
            </div>
            <div className="chamber-right">
              <Link href="/case-assessment" className="btn-primary w-full text-center">
                <span>Free Case Evaluation</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/919728099999?text=Hello%20Dr.%20Pankaj%20Vats,%20I%20would%20like%20to%20schedule%20a%20chamber%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center"
              >
                <MessageSquare size={17} />
                <span>WhatsApp Dr. Vats</span>
              </a>
              <Link href="/contact" className="btn-secondary w-full text-center">
                <span>View Full Chamber Map &amp; Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .narrative-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .narrative-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-gold-light);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .narrative-title {
          font-size: 2.5rem;
          line-height: 1.25;
          margin-bottom: 1.5rem;
        }

        .narrative-quote {
          font-size: 1.05rem;
          font-style: italic;
          color: var(--accent-gold-light);
          border-left: 3px solid var(--accent-gold);
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .quote-author {
          font-style: normal;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }

        .narrative-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .narrative-body strong {
          color: var(--text-primary);
        }

        .narrative-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Founder Card */
        .founder-image-card {
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.9) 0%, rgba(5, 11, 20, 0.98) 100%);
        }

        .founder-img-box {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.25rem;
        }

        .founder-about-photo {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .founder-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(5, 11, 20, 0.9);
          border: 1px solid var(--accent-gold);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
        }

        .tag-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .tag-title {
          font-size: 0.72rem;
          color: var(--accent-gold-light);
        }

        .founder-summary-box {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: 0.45rem 0;
          border-bottom: 1px solid var(--border-glass);
        }

        /* Pillars */
        .pillars-section {
          background: rgba(14, 25, 45, 0.4);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }

        .pillar-card {
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-glass);
          background: rgba(14, 25, 45, 0.7);
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
        }

        .pillar-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-4px);
        }

        .pillar-num {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent-gold);
          opacity: 0.7;
          margin-bottom: 0.5rem;
        }

        .pillar-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .pillar-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Milestones */
        .milestones-section {
          padding: 2rem 0;
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          padding: 2.25rem;
          border: 1px solid rgba(212, 175, 55, 0.25);
          text-align: center;
        }

        .milestone-num {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .milestone-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        /* Council */
        .council-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .council-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
        }

        .council-img-wrap {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-gold);
          margin-bottom: 1rem;
        }

        .council-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .council-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-gold-light);
          margin-bottom: 0.35rem;
        }

        .council-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .council-creds {
          font-size: 0.78rem;
          color: var(--accent-teal-light);
          font-weight: 600;
          margin-bottom: 0.85rem;
        }

        .council-bio {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Chamber Card */
        .chamber-card {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 3rem;
          padding: 3rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: linear-gradient(135deg, rgba(14, 25, 45, 0.95) 0%, rgba(5, 11, 20, 0.98) 100%);
          border-radius: var(--radius-lg);
          align-items: center;
        }

        .chamber-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-gold-light);
          background: rgba(212, 175, 55, 0.15);
          padding: 0.2rem 0.65rem;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 0.65rem;
        }

        .chamber-title {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .chamber-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .chamber-details {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .detail-row strong {
          color: #ef4444;
        }

        .chamber-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1100px) {
          .narrative-grid {
            grid-template-columns: 1fr;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .milestones-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .council-grid {
            grid-template-columns: 1fr;
          }
          .chamber-card {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }

        @media (max-width: 650px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .milestones-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
