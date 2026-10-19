'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Scale, Stethoscope, Briefcase, GraduationCap, ArrowRight, Phone } from 'lucide-react';

export default function LeadershipSection({ hideHeader = false }) {
  const leaders = [
    {
      name: 'Dr. Pankaj Vats',
      title: 'Chairman & Executive Director',
      credentials: 'M.D. (AIIMS, New Delhi), LL.B. (Hon\'s, MDU Rohtak)',
      badge: 'Founder & Medico-Legal Authority',
      image: '/images/dr_pankaj_vats.jpg',
      affiliation: 'Former Civil Surgeon & District Appropriate Authority | Former Director Health Services, Govt. of Haryana',
      bio: 'Postgraduate in Forensic Medicine & Toxicology from the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi, and law graduate with honors. Dr. Vats commands over 34 years of extensive healthcare experience (26 years in the Government of Haryana in key leadership roles including Civil Surgeon, PMO, and State Supervisory Board member under PC-PNDT). He is a nationally recognized authority defending medical practitioners from arbitrary prosecution and administrative harassment.',
      specialties: [
        'PC-PNDT Act & Ultrasound Machine De-Sealing Defense',
        'Medical Negligence Consumer Court & Section 106 BNS Criminal Shield',
        'Clinical Establishments Act (CEA) Statutory Architecture',
        'Forensic Autopsy & Viscera Report Re-Vetting'
      ]
    },
    {
      name: 'Dr. Subhash Mehta',
      title: 'Senior Medico-Legal & Clinical Compliance Expert',
      credentials: 'M.B.B.S., M.D., Medico-Legal Advisor',
      badge: 'Clinical Compliance Lead',
      image: '/images/leadership_council.jpg',
      affiliation: 'Senior Clinical Reviewer | Hospital Risk Management Director',
      bio: 'With over three decades of clinical administration and hospital management experience, Dr. Subhash Mehta spearheads standard-of-care audits for multi-specialty hospitals and nursing homes. He ensures that clinical consent forms, ICU documentation, and emergency protocols withstand the most rigorous judicial scrutiny in consumer commissions and high courts.',
      specialties: [
        'Standard of Care Clinical Audits & Variance Benchmarking',
        'Hospital Emergency Protocols & Mob Violence Defense',
        'Consent Architecture & High-Risk Surgical Undertakings',
        'Medical Ethics Disciplinary Defense'
      ]
    },
    {
      name: 'Prof. (Dr.) Rajiv Kumar',
      title: 'Senior Forensic Medicine & Pathology Expert',
      credentials: 'M.D. (Forensic Medicine & Toxicology), F.I.A.M.S.',
      badge: 'Forensic Pathology Lead',
      image: '/images/forensic_analysis.jpg',
      affiliation: 'Former Head of Dept., Forensic Medicine | Expert Witness in High Courts',
      bio: 'A distinguished professor of Forensic Medicine and Toxicology who has supervised thousands of post-mortem examinations and unnatural death inquests. Prof. Kumar specializes in histopathology analysis, chemical toxicology, reconstructing ante-mortem injury chronologies, and formulating medical cross-examination questionnaires for trial lawyers.',
      specialties: [
        'Post-Mortem & Inquest Report Evidentiary Re-Scrutiny',
        'Viscera Toxicology & Chemical Exposure Verification',
        'Expert Witness Deposition in Judicial Courts',
        'Cross-Examination Preparation for Medical Boards'
      ]
    }
  ];

  return (
    <section id="leadership" className="leadership-section section-spacing">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <div className="section-badge">
              <Award size={14} />
              <span>National Medico-Legal Faculty</span>
            </div>
            <h2 className="section-title">
              Leadership &amp; <span className="text-gold">Advisory Council</span>
            </h2>
            <p className="section-subtitle">
              Combining AIIMS forensic medicine pedigree, senior governmental health directorship, 
              and seasoned legal counsel to provide unshakeable evidentiary defense across India.
            </p>
          </div>
        )}

        {/* Boardroom Feature Banner */}
        <div className="council-banner glass-panel">
          <div className="council-banner-img-wrap">
            <Image
              src="/images/five_eyes_boardroom.jpg"
              alt="Five Eyes Medico-Legal Advisory Council Chamber"
              fill
              className="council-banner-img"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="council-banner-overlay"></div>
          </div>
          <div className="council-banner-content">
            <span className="banner-badge">Gurugram Executive Chamber</span>
            <h3>Unified Front of Medical, Forensic &amp; Legal Authorities</h3>
            <p>
              Under the guidance of Dr. Pankaj Vats, Dr. Subhash Mehta, and Prof. (Dr.) Rajiv Kumar, Five Eyes operates with 
              a singular mission: to safeguard doctors from the venom of arbitrary administrative prosecution and ensure compliance with all health laws.
            </p>
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="leaders-grid">
          {leaders.map((leader, i) => (
            <div key={i} className="leader-card glass-panel">
              <div className="leader-top">
                <div className="leader-avatar-wrap">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={100}
                    height={100}
                    className="leader-avatar"
                  />
                  <div className="avatar-badge">
                    <ShieldCheck size={14} />
                  </div>
                </div>

                <div className="leader-identity">
                  <span className="leader-role-badge">{leader.badge}</span>
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-title">{leader.title}</div>
                  <div className="leader-creds">{leader.credentials}</div>
                </div>
              </div>

              <div className="affiliation-box">
                <GraduationCap size={15} className="affil-icon" />
                <span>{leader.affiliation}</span>
              </div>

              <p className="leader-bio">{leader.bio}</p>

              <div className="specialties-box">
                <div className="spec-label">Core Advisory Verticals:</div>
                <div className="spec-tags">
                  {leader.specialties.map((spec, idx) => (
                    <span key={idx} className="spec-pill">{spec}</span>
                  ))}
                </div>
              </div>

              <div className="leader-action-row">
                <Link href="/case-assessment" className="leader-btn">
                  <span>Consult with {leader.name.split(' ')[1]}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .council-banner {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 3.5rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
        }

        .council-banner-img-wrap {
          position: relative;
          height: 320px;
          width: 100%;
        }

        .council-banner-img {
          object-fit: cover;
        }

        .council-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5, 11, 20, 0.95) 0%, rgba(5, 11, 20, 0.4) 60%, transparent 100%);
        }

        .council-banner-content {
          position: absolute;
          bottom: 25px;
          left: 30px;
          right: 30px;
          z-index: 2;
        }

        .banner-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-light);
          background: rgba(212, 175, 55, 0.2);
          border: 1px solid var(--accent-gold);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .council-banner-content h3 {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 0.4rem;
        }

        .council-banner-content p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 850px;
          line-height: 1.55;
        }

        .leaders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .leader-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-glass);
          background: linear-gradient(145deg, rgba(14, 25, 45, 0.85) 0%, rgba(5, 11, 20, 0.95) 100%);
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
        }

        .leader-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .leader-top {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .leader-avatar-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-gold);
          flex-shrink: 0;
        }

        .leader-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--accent-gold);
          color: #08101a;
          border-radius: 50%;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leader-identity {
          display: flex;
          flex-direction: column;
        }

        .leader-role-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-gold-light);
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .leader-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .leader-title {
          font-size: 0.82rem;
          color: var(--accent-teal-light);
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .leader-creds {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }

        .affiliation-box {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }

        .affil-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .leader-bio {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .specialties-box {
          margin-bottom: 1.5rem;
        }

        .spec-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold-light);
          font-weight: 700;
          margin-bottom: 0.65rem;
        }

        .spec-tags {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .spec-pill {
          font-size: 0.76rem;
          padding: 0.25rem 0.6rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .leader-action-row {
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
        }

        .leader-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent-gold);
          transition: var(--transition-fast);
        }

        .leader-btn:hover {
          color: var(--accent-gold-light);
          gap: 0.75rem;
        }

        @media (max-width: 1100px) {
          .leaders-grid {
            grid-template-columns: 1fr;
          }
          .council-banner-content h3 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
