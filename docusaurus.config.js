// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appunti di Matematica e Fisica',
  tagline: 'Lezioni interattive per il liceo',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'your-github-user', 
  projectName: 'high-school-notes', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          admonitions: {
            keywords: ['goal', 'theorem', 'definition'],
            extendDefaults: true,
          },
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath], // Anche per il blog se serve
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // AGGIUNGI QUESTA SEZIONE PER IL CSS DI KATEX
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Appunti di Matematica e Fisica',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/matematica', label: 'Matematica', position: 'left' },
          { to: '/fisica', label: 'Fisica', position: 'left' },
          { to: '/chi-siamo', label: 'Chi siamo', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Esplora',
            items: [
                {label: 'Matematica', to:'/matematica'},
                {label: 'Fisica', to: '/fisica'},
            ],
          },
          {
            title: 'Progetto',
            items: [
              { label: 'Chi siamo', to: '/chi-siamo' },
              { label: 'Contattaci', href:'#' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;