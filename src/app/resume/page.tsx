import { profile, experience, skills, education, languages, siteConfig } from "@/data/content";
import PrintButton from "./PrintButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: siteConfig.description,
  robots: { index: false, follow: false },
};

export default function ResumePage() {
  const fluent = languages.filter((l) => l.level === "Fluent").map((l) => l.name);
  const basic = languages.filter((l) => l.level === "Basic").map((l) => l.name);

  return (
    <div className="resume-page">
      {/* Print button — hidden when printing */}
      <div className="no-print print-controls">
        <PrintButton />
        <a href="/" className="back-link">← Back to portfolio</a>
      </div>

      <div className="cv">
        {/* Header */}
        <header className="cv-header">
          <div>
            <h1 className="cv-name">{profile.name}</h1>
            <p className="cv-title">Senior Digital Project Manager</p>
          </div>
          <div className="cv-contact">
            <span>{profile.location}</span>
            <span>
              <a href={`mailto:${profile.email.user}@${profile.email.domain}`}>
                {profile.email.user}@{profile.email.domain}
              </a>
            </span>
            <span>
              <a href={profile.linkedin}>linkedin.com/in/alessonsouza</a>
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="cv-section">
          <h2 className="cv-section-title">Profile</h2>
          <p className="cv-summary">
            Senior Digital Project Manager with 15+ years delivering complex digital programmes across insurance, consumer tech, government, FMCG, and financial services — in New Zealand, Australia, France, and globally. Expert in CMS migrations (Drupal → AEM), mobile app delivery, global product launches, and matrixed stakeholder management. Consistently turns ambiguous programmes into predictable, on-time delivery.
          </p>
        </section>

        {/* Experience */}
        <section className="cv-section">
          <h2 className="cv-section-title">Experience</h2>
          {experience.map((job, i) => (
            <div key={i} className="cv-job">
              <div className="cv-job-header">
                <div>
                  <span className="cv-job-title">{job.title}</span>
                  <span className="cv-job-company"> · {job.company}</span>
                  {job.location && <span className="cv-job-location"> · {job.location}</span>}
                </div>
                <span className="cv-job-period">{job.period}</span>
              </div>
              <ul className="cv-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills — two columns */}
        <section className="cv-section cv-skills-section">
          <h2 className="cv-section-title">Skills</h2>
          <div className="cv-skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="cv-skill-group">
                <h3 className="cv-skill-category">{category}</h3>
                <p className="cv-skill-items">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education + Languages side by side */}
        <div className="cv-bottom-row">
          <section className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="cv-edu-item">
                <span className="cv-edu-degree">{edu.degree}</span>
                <span className="cv-edu-meta"> · {edu.institution} · {edu.year}</span>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Languages</h2>
            <p className="cv-lang">
              <strong>Fluent:</strong> {fluent.join(", ")}
            </p>
            <p className="cv-lang">
              <strong>Basic:</strong> {basic.join(", ")}
            </p>
          </section>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: 10.5pt;
          line-height: 1.45;
          color: #1a1a1a;
          background: #f5f5f5;
        }

        /* Screen wrapper */
        .resume-page {
          min-height: 100vh;
          background: #f0f0f0;
          padding: 24px 16px 48px;
        }

        /* Print controls */
        .print-controls {
          display: flex;
          align-items: center;
          gap: 20px;
          max-width: 794px;
          margin: 0 auto 16px;
        }

        .print-btn {
          background: #c9a96e;
          color: #fff;
          border: none;
          padding: 10px 22px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.02em;
        }

        .print-btn:hover { background: #b8965a; }

        .back-link {
          color: #555;
          font-size: 14px;
          text-decoration: none;
        }

        .back-link:hover { color: #111; }

        /* A4 card */
        .cv {
          max-width: 794px;
          margin: 0 auto;
          background: #fff;
          padding: 40px 48px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        }

        /* Header */
        .cv-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #c9a96e;
          padding-bottom: 14px;
          margin-bottom: 20px;
          gap: 16px;
        }

        .cv-name {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 22pt;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .cv-title {
          font-size: 11pt;
          color: #c9a96e;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .cv-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
          font-size: 9pt;
          color: #444;
          white-space: nowrap;
        }

        .cv-contact a { color: #444; text-decoration: none; }
        .cv-contact a:hover { color: #c9a96e; }

        /* Section */
        .cv-section {
          margin-bottom: 18px;
        }

        .cv-section-title {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 8.5pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #c9a96e;
          border-bottom: 1px solid #e8e0d0;
          padding-bottom: 4px;
          margin-bottom: 10px;
        }

        .cv-summary {
          font-size: 10pt;
          color: #333;
          line-height: 1.55;
        }

        /* Job */
        .cv-job {
          margin-bottom: 13px;
          page-break-inside: avoid;
        }

        .cv-job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 5px;
          flex-wrap: wrap;
        }

        .cv-job-title {
          font-weight: 700;
          font-size: 10.5pt;
          color: #111;
        }

        .cv-job-company {
          font-weight: 500;
          color: #333;
          font-size: 10pt;
        }

        .cv-job-location {
          color: #666;
          font-size: 9.5pt;
        }

        .cv-job-period {
          font-size: 9pt;
          color: #888;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv-bullets {
          margin-left: 14px;
          list-style: disc;
          color: #333;
          font-size: 9.5pt;
          line-height: 1.5;
        }

        .cv-bullets li {
          margin-bottom: 2px;
        }

        /* Skills */
        .cv-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
        }

        .cv-skill-category {
          font-weight: 700;
          font-size: 9pt;
          color: #111;
          margin-bottom: 2px;
        }

        .cv-skill-items {
          font-size: 9pt;
          color: #444;
          line-height: 1.5;
        }

        /* Bottom row */
        .cv-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 32px;
        }

        .cv-edu-item {
          font-size: 9.5pt;
          margin-bottom: 4px;
          color: #333;
        }

        .cv-edu-degree { font-weight: 600; color: #111; }
        .cv-edu-meta { color: #666; }

        .cv-lang {
          font-size: 9.5pt;
          color: #333;
          margin-bottom: 3px;
        }

        /* ==================== PRINT ==================== */
        @media print {
          @page {
            size: A4;
            margin: 14mm 16mm;
          }

          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }

          body {
            background: #fff !important;
            font-size: 9.5pt;
          }

          .no-print { display: none !important; }

          .resume-page {
            background: none;
            padding: 0;
          }

          .cv {
            box-shadow: none;
            padding: 0;
            max-width: none;
          }

          .cv-name { font-size: 20pt; }

          .cv-job { page-break-inside: avoid; }

          .cv-skills-section { page-break-inside: avoid; }

          a { color: inherit !important; text-decoration: none !important; }
        }
      `}</style>
    </div>
  );
}
