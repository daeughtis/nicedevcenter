// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NICE정보통신 개발자 센터',
  tagline: 'Total Payment Service Provider, NICE정보통신',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.js'),
      },
    ],
    [ 
      '@docusaurus/plugin-content-docs',
      {
        id: 'com',
        path: 'com',
        routeBasePath: 'com',
        sidebarPath: require.resolve('./sidebarscom.js'),
      }
    ],
          ], 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NICEDEV',
        logo: {
          alt: 'My Site Logo',
          src: 'img/nicevan_blue.png',
        },
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '가이드',
          },
          {to: '/api/intro', label: 'API&SDK', position: 'left'},
          {to: '/com/intro', label: '커뮤니티', position: 'left' },
          {to: '/blog', label: '블로그', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '연동 문서',
            items: [
              {
                label: '가이드 문서',
                to: '/docs/intro',
              },
              {
                label: 'API/SDK',
                to: '/api/intro',
              },
            ],
          },
          {
            title: 'Family Site',
            items: [
              {
                label: 'NICE정보통신',
                href: 'https://nicevan.co.kr',
              },
              {
                label: 'NICE그룹',
                href: 'https://nice.co.kr',
              },
              {
                label: 'NICE페이먼츠',
                href: 'https://www.nicepayments.co.kr',
              },
              {
                label: 'NICE_DVAN',
                href: 'https://www.instagram.com/nice_dvan/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '커뮤니티',
                to: '/com/intro',
              },       
              {
                label: '블로그',
                to: '/blog',
              },            
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DT Project, Inc. With DT추진실.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;