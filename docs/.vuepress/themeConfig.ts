import { mejs, medic, guide, reference } from './config'

import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
  // @ts-ignore
  theme: defaultTheme({
    // default theme config

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
        link: 'http://medicxd.top/medic_docs/wiki.html',
      },
    ],
    sidebar: {
      '/mejs2/guide/': [guide, reference],
      '/mejs2/basic/': [guide, reference],
      '/mejs2/reference/': [reference],
      '/medic_docs/': [medic],
    },
  }),
}
