import { docsearchPlugin } from  '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

const plugins = [
    pwaPlugin({
      skipWaiting: true,
    }),
    googleAnalyticsPlugin({
      id: 'G-JELJKYM6YC', // XD
      // id: 'G-5X9RWSNK51', // OWN
    }),
    docsearchPlugin({
apiKey: 'bcd69cca53642b95d65f4ec80a9a8d44',
appId:'IEXIOYKZY6',
indexName:'medic',
    }),
  ]

export default plugins
