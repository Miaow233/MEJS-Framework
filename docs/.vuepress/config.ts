import { pwaPlugin } from '@vuepress/plugin-pwa'
import { defineUserConfig, viteBundler } from 'vuepress'
export const guide = {
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
export const reference = {
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
export const mejs = {
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
export const medic = {
  text: 'Medic',
  children: [
    '/medic_docs/',
    '/medic_docs/guide/getting-started',
    {
      text: '基础概念',
      children: [
        '/medic_docs/basic/dic',
        '/medic_docs/basic/entry',
        '/medic_docs/basic/variable',
        '/medic_docs/basic/constant',
        '/medic_docs/basic/system',
        '/medic_docs/basic/mod',
      ],
    },
    {
      text: '参考',
      children: [
        '/medic_docs/reference/api',
        '/medic_docs/reference/toolkit',
        '/medic_docs/reference/libs/dex',
        '/medic_docs/reference/libs/javascript',
        '/medic_docs/reference/libs/draw',
      ],
    },
    {
      text: '更新日志',
      link: '/medic_docs/changelog',
    },
  ],
}
export default defineUserConfig({
  base: '/',
  title: 'Medic使用文档',
  description: '快速Bot开发框架',

  bundler: viteBundler({}),
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  theme: require('./themeConfig'),
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
})
