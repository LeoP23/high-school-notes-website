import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHero() {
  return (
    <header className="hero hero-educational padding-vert--xl">
      <div className="container text--center">
        <h1 className="hero__title" style={{ color: 'var(--brand-primary)', fontWeight: '800' }}>
          Impara facendo.
        </h1>
        <p className="hero__subtitle" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Padroneggia la Matematica e la Fisica del Liceo Scientifico attraverso esplorazioni interattive.
        </p>
        <div className="margin-top--lg">
          <Link
            className="button button--lg"
            style={{ 
              backgroundColor: 'var(--brand-accent)', 
              color: '#000', 
              border: 'none',
              fontWeight: 'bold'
            }}
            to="/docs/intro">
            Inizia l'Esplorazione 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function CurriculumSection() {
  const subjects = [
    {
      title: 'Matematica',
      description: 'Dall\'algebra di base allo studio di funzione e agli integrali.',
      link: '/docs/matematica',
      cardClass: 'card-math',
      titleClass: 'card-title-math',
      icon: '📐'
    },
    {
      title: 'Fisica',
      description: 'Dalla cinematica all\'elettromagnetismo e alla relatività.',
      link: '/docs/fisica',
      cardClass: 'card-physics',
      titleClass: 'card-title-physics',
      icon: '⚛️'
    }
  ];

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <h2 className="text--center margin-bottom--lg" style={{ color: 'var(--brand-primary)' }}>
          Programma Ministeriale
        </h2>
        <div className="row">
          {subjects.map((subject, idx) => (
            <div className="col col--6 margin-bottom--lg" key={idx}>
              <Link to={subject.link} className={`card padding--lg subject-card ${subject.cardClass}`}>
                <div className="card__header">
                  <h3 className={subject.titleClass} style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {subject.icon} {subject.title}
                  </h3>
                </div>
                <div className="card__body">
                  <p style={{ color: 'var(--text-muted)' }}>{subject.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Apprendimento interattivo per il Liceo Scientifico">
      <HomepageHero />
      <main>
        <CurriculumSection />
      </main>
    </Layout>
  );
}