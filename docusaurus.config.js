// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Subspace Labs Documentation',
  tagline: 'Subspace is an open, scalable platform for both storage and compute that is fully interoperable with any layer one.',
  url: 'https://docs.subspace.network',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'subspace', // Usually your GitHub org/user name.
  projectName: 'subspace-docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uk', 'ko', 'es', 'vi'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },
  plugins: [
    [
      "docusaurus-plugin-remote-content", // Pulls doc file directly from subspace monorepo
      {
        name: "terminal-farming",
        sourceBaseUrl: "https://raw.githubusercontent.com/subspace/subspace/main/docs/",
        outDir: "docs/",
        documents: ["farming.md", "development.md"],
        modifyContent(filename, content) {
        if (filename.includes("farming")) {
            return {
                content: `---
sidebar_position: 1
title: "👨‍🌾 Getting Started - CLI"
---
:::info

This document was automatically pulled from https://github.com/subspace/subspace, any edits must go to that repo, not this one.

:::

${content}`,
                filename: "Getting Started/Terminal/cli-farming.md",
              }
          }
        if (filename.includes("development")) {
          return {
              content: `---
sidebar_position: 1
title: "📜 Core Subspace Protocol"
---
:::info

This document was automatically pulled from https://github.com/subspace/subspace, any edits must go to that repo, not this one.

:::

${content}`,
              filename: "Development/core-development.md",
            }
        }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content", // Pulls doc file directly from subspace-desktop
      {
        name: "desktop-farming",
        sourceBaseUrl: "https://raw.githubusercontent.com/subspace/subspace-desktop/main/",
        outDir: "docs/Getting Started/App/",
        documents: ["README.md"],
        // in the plugin's options:
        modifyContent(filename, content) {
          if (filename.includes("README")) {
              return {
                  content: `---
sidebar_position: 2
title: "👨‍🌾 Getting Started - Desktop"
---
:::info

This document was automatically pulled from https://github.com/subspace/subspace-desktop, any edits must go to that repo, not this one.

:::

${content}`,
                  filename: "desktop-farming.md",
              }
          }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content", // Pulls doc file directly from subspace.js
      {
        name: "subspace-js",
        sourceBaseUrl: "https://raw.githubusercontent.com/subspace/subspace.js/master/",
        outDir: "docs/Development/",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
              return {
                  content: `---
sidebar_position: 2
title: "🔧 Subspace.js"
---
:::info

This document was automatically pulled from https://github.com/subspace/subspace.js, any edits must go to that repo, not this one.

:::

${content}`,
                filename: "subspacejs.md",
              }
          }
          return undefined
        },
      },
    ],
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/subspace/subspace-docs/blob/main/',
        }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Subspace Network Documentation',
        logo: {
          alt: 'Subspace Labs Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Subspace Network',
            items: [
              {
                label: 'Official Website',
                href: 'https://subspace.network'
              },
              {
                label: 'Subspace Desktop',
                href: 'https://github.com/subspace/subspace-desktop'
              },
              {
                label: 'Subspace Explorer',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer'
              },
              {
                label: 'Subspace Relayer',
                href: 'https://testnet-relayer.subspace.network/'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/subspace',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/subspace-network',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/subspace_network',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/sub',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCojYRCZOtVTJHJXivOYJzeQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/subspace-blockchain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/network_subspace',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/subspace-network',
              },
              {
                label: 'Subsocial',
                href: 'https://app.subsocial.network/@NetworkSubspace'
              }
            ],
          },
        ],
        logo: {
          alt: 'Subspace Labs Banner Logo',
          src: 'img/banner-black.svg',
          srcDark: 'img/banner-white.svg',
          href: 'https://subspace.network',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Subspace Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;