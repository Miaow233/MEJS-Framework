const guide = {
  text: '指南',
  children: [
    '/guide/introduce',
    '/guide/getting-started',
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
  ],
}

module.exports = {
  lang: 'zh-cn',
  title: 'MEJS使用文档',
  description: 'MEJS快速Bot开发框架',
  base: '/',
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'Miaow233/MEJS-Framework',
    docsRepo: 'https://github.com/Miaow233/MEJS-Framework',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '编辑此页面',
    lastUpdatedText: '最近更新时间',
    contributorsText: '贡献者',
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
      '/guide/': [guide],
      '/reference/': [reference],
      '/medic/': [medic],
    },
  },
  plugins: [['vuepress-plugin-clipboard', false]],
}
