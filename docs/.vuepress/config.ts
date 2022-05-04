const guide = {
  text: '指南',
  children: [
    '/mejs2/guide/introduce',
    '/mejs2/guide/getting-started',
    '/mejs2/basic/',
    {
      text: '基础概念',
      children: ['/mejs2/basic/bot', '/mejs2/basic/compat', '/mejs2/basic/message', '/mejs2/basic/event'],
    },
  ],
}

const reference = {
  text: '参考',
  children: [
    {
      text: 'MEJS Api',
      children: ['/mejs2/reference/bot', '/mejs2/reference/compat', '/mejs2/reference/message'],
    },
    {
      text: '支持库',
      children: ['/mejs2/reference/libs/cac', '/mejs2/reference/libs/algebra.js'],
    },
    {
      text: 'API文档',
      link: 'https://docs.nekohouse.cafe/reference/type/index.html',
    },
  ],
}
const mejs = {
  text: 'MEJS',
  children: [
    {
      text: '指南',
      children: ['/mejs2/guide/introduce', '/mejs2/guide/getting-started', '/mejs2/basic/'],
    },
    {
      text: '基础概念',
      children: ['/mejs2/basic/bot', '/mejs2/basic/compat', '/mejs2/basic/message', '/mejs2/basic/event'],
    },
    {
      text: 'MEJS参考',
      children: ['/mejs2/reference/bot', '/mejs2/reference/compat', '/mejs2/reference/message'],
    },
    {
      text: '支持库',
      children: ['/mejs2/reference/libs/cac', '/mejs2/reference/libs/algebra.js'],
    },
    {
      text: 'API文档',
      link: 'https://docs.nekohouse.cafe/mejs2/reference/type/index.html',
    },
  ],
}
const medic = {
  text: 'Medic',
  children: [
    '/medic_docs/',
    '/medic_docs/getting-started',
    {
      text: '基础概念',
      children: [
        '/medic_docs/basic/dic',
        '/medic_docs/basic/entry',
        '/medic_docs/basic/value',
        '/medic_docs/basic/constant',
        '/medic_docs/basic/system',
        '/medic_docs/basic/mod',
      ],
    },
    {
      text: '参考',
      children: ['/medic_docs/reference/api', '/medic_docs/reference/toolkit'],
    },
    {
      text: '更新日志',
      link: '/medic_docs/changelog',
    },
  ],
}

module.exports = {
  base: '/',
  title: 'Medic使用文档',
  description: '快速Bot开发框架',

  bundler: '@vuepress/vite',

  themeConfig: {
    logo: '/images/logo.png',
    //repo: 'Miaow233/MEJS-Framework',
    docsRepo: 'https://github.com/Miaow233/MEJS-Framework',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '编辑此页面',
    lastUpdatedText: '最近更新时间',
    navbar: [
      mejs,
      medic,
      {
        text: '旧版文档',
        link: 'http://medicxd.top/',
      },
    ],
    sidebar: {
      '/mejs2/guide/': [guide, reference],
      '/mejs2/basic/': [guide, reference],
      '/mejs2/reference/': [reference],
      '/medic_docs/': [medic],
    },
  },

  plugins: [
    ['vuepress-plugin-clipboard'],
    [
      'medium-zoom',
      {
        selector: '.theme-default-content :not(a) > img:not(.no-zooming)',
      },
    ],
    ['@vuepress/pwa'],
    ['@vuepress/pwa-popup'],
  ],
}
