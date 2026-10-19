'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ badge, title, titleHighlight, subtitle, breadcrumbs = [] }) {
  return (
    <div className="page-header">
      <div className="ph-bg-glow-gold"></div>
      <div className="ph-bg-glow-teal"></div>

      <div className="container ph-content">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/" className="bc-link">
              <Home size={13} />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="bc-item">
                <ChevronRight size={13} className="bc-sep" />
                {crumb.href ? (
                  <Link href={crumb.href} className="bc-link">{crumb.label}</Link>
                ) : (
                  <span className="bc-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="section-badge ph-badge">{badge}</div>
        )}

        {/* Title */}
        <h1 className="ph-title">
          {title}{' '}
          {titleHighlight && <span className="text-gold">{titleHighlight}</span>}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="ph-subtitle">{subtitle}</p>
        )}
      </div>

      <style jsx>{`
        .page-header {
          position: relative;
          padding: 3.5rem 0 3rem;
          border-bottom: 1px solid rgba(212,175,55,0.15);
          background: linear-gradient(180deg, #060f1e 0%, #050b14 100%);
          overflow: hidden;
          text-align: center;
        }
        .ph-bg-glow-gold {
          position: absolute;
          top: -80px; left: 10%;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ph-bg-glow-teal {
          position: absolute;
          top: -60px; right: 8%;
          width: 350px; height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ph-content {
          position: relative;
          z-index: 1;
        }
        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
          font-size: 0.82rem;
        }
        .bc-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .bc-link:hover { color: var(--accent-gold-light); }
        .bc-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .bc-sep { color: rgba(255,255,255,0.2); }
        .bc-current { color: var(--accent-gold-light); font-weight: 600; }
        .ph-badge {
          margin: 0 auto 1rem;
          display: inline-flex;
        }
        .ph-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }
        .ph-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 760px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .ph-title { font-size: 2.2rem; }
          .ph-subtitle { font-size: 0.98rem; }
          .page-header { padding: 2.5rem 0 2rem; }
        }
      `}</style>
    </div>
  );
}
