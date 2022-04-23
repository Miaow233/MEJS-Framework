const { execSync } = require('child_process')
const { resolve } = require('path')
// const { remove: removeDiacritics } = require('diacritics')

const guide = {
  text: '指南',
  children: [
    '/guide/introduce',
    '/guide/getting-started',
    '/basic/',
    {
      text: '基础概念',
      children: ['/basic/bot', '/basic/compat', '/basic/message', '/basic/event'],
    },
  ],
}

const reference = {
  text: '参考',
  children: [
    {
      text: 'MEJS Api',
      children: ['/reference/bot', '/reference/compat', '/reference/message'],
    },
    {
      text: '支持库',
      children: ['/reference/libs/cac', '/reference/libs/algebra.js'],
    },
    {
      text: 'API文档',
      link: 'https://docs.nekohouse.cafe/reference/type/index.html',
    },
  ],
}

const medic = {
  text: 'Medic',
  children: [
    '/medic/',
    '/medic/getting-started',
    {
      text: '基础概念',
      children: [
        '/medic/basic/dic',
        '/medic/basic/entry',
        '/medic/basic/value',
        '/medic/basic/constant',
        '/medic/basic/system',
        '/medic/basic/mod',
      ],
    },
    {
      text: '参考',
      children: ['/medic/reference/api', '/medic/reference/toolkit'],
    },
    {
      text: '更新日志',
      link: '/medic/changelog',
    },
  ],
}

const advance = {
  text: '高级',
  children: ['/guide/plugin/plugin-manager'],
}

const more = {
  text: '更多',
  children: ['/about/history'],
}
module.exports = {
  base: '/',
  title: 'MEJS使用文档',
  description: 'MEJS快速Bot开发框架',

  bundler: '@vuepress/vite',
  // theme: resolve(__dirname, 'theme'),

  themeConfig: {
    logo: '/images/logo.png',
    repo: 'Miaow233/MEJS-Framework',
    docsRepo: 'https://github.com/Miaow233/MEJS-Framework',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '编辑此页面',
    lastUpdatedText: '最近更新时间',
    navbar: [
      guide,
      reference,
      medic,
      {
        text: '参与文档编写',
        link: 'https://github.com/Miaow233/MEJS-Framework/docs',
      },
    ],
    sidebar: {
      '/guide/': [guide, advance, more],
      '/basic/': [guide, advance],
      '/reference/': [reference],
      '/medic/': [medic],
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
    [
      '@vuepress/container',
      {
        type: 'code-group',
        before: (info) => {
          const [type] = info.split(' ', 1)
          const title = info.slice(type.length).trimStart()
          return `<panel-view class="code" type=${JSON.stringify(type)} title=${JSON.stringify(title)}>`
        },
        after: () => '</panel-view>',
      },
    ],
  ],
}
