import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-adsense',
  description: 'Insert Google AdSense script to `index.html` and create `ads.txt` file',
  icon: 'logos:vite-icon',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'node',
    'vite',
    'vite-plugin',
    'google',
    'adsense',
    'advertisement',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'guoyunhe/vite-plugin-adsense',
    npm: 'vite-plugin-adsense',
  },
  links: {
    github: 'https://github.com/guoyunhe/vite-plugin-adsense',
    npm: 'https://www.npmjs.com/package/vite-plugin-adsense',
  },
  stats: {
    downloads: {
      monthly: 115,
      weekly: 65,
    },
  },
})
