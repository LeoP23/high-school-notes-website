// src/pages/matematica.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const macroAreas = [
  { title: 'Algebra', icon: '🧮', link: '/docs/matematica/algebra', desc: 'Polinomi, equazioni, disequazioni e sistemi.' },
  { title: 'Geometria', icon: '📐', link: '/docs/matematica/geometria', desc: 'Geometria euclidea, analitica e trigonometria.' },
  { title: 'Insiemi', icon: '⭕', link: '/docs/matematica/insiemistica', desc: 'Teoria degli insiemi e fondamenti.' },
  { title: 'Logica', icon: '🧠', link: '/docs/matematica/logica', desc: 'Proposizioni, connettivi e dimostrazioni.' },
  { title: 'Analisi', icon: '📈', link: '/docs/matematica/analisi', desc: 'Limiti, derivate, integrali e studio di funzione.' }
];

export default function MatematicaHub() {
  return (
    <Layout title="Matematica" description="Esplora le macroaree della matematica.">
      <header className="hero" style={{ backgroundColor: 'var(--surface-hero-bg)', borderBottom: '4px solid var(--brand-math)' }}>
        <div className="container text--center">
          <h1 className="hero__title" style={{ color: 'var(--brand-math)', fontWeight: '800' }}>Matematica</h1>
          <p className="hero__subtitle" style={{ color: 'var(--text-muted)' }}>
            Seleziona un'area di studio per iniziare la tua esplorazione.
          </p>
        </div>
      </header>
      <main className="padding-vert--xl">
        <div className="container">
          <div className="row">
            {macroAreas.map((area, idx) => (
              <div className="col col--4 margin-bottom--lg" key={idx}>
                <Link to={area.link} className="card padding--lg subject-card" style={{ display: 'block', height: '100%', borderColor: 'transparent' }} 
                      onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--brand-math)'}
                      onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                  <div className="card__header">
                    <h3 style={{ color: 'var(--brand-math)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{area.icon}</span> {area.title}
                    </h3>
                  </div>
                  <div className="card__body">
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>{area.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}