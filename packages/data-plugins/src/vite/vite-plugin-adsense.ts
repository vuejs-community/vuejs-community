import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-adsense',
  description: 'Insert Google AdSense script to `index.html` and create `ads.txt` file',
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
  links: {
    github: 'https://github.com/guoyunhe/vite-plugin-adsense',
    npm: 'https://www.npmjs.com/package/vite-plugin-adsense',
  },
  stats: {
    downloads: {
      monthly: 116,
      weekly: 64,
    },
  },
})
