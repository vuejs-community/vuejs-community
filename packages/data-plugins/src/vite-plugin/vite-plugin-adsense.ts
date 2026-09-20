import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-adsense',
  description: 'Insert Google AdSense script to `index.html` and create `ads.txt` file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'node',
    'vite',
    'vite-plugin',
    'google',
    'adsense',
    'advertisement',
  ],
  links: {
    github: 'https://github.com/guoyunhe/vite-plugin-adsense',
    npm: 'https://www.npmjs.com/package/vite-plugin-adsense',
    website: 'https://github.com/guoyunhe/vite-plugin-adsense#readme',
  },
  source: {
    github: 'guoyunhe/vite-plugin-adsense',
    npm: 'vite-plugin-adsense',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 84,
      weekly: 3,
    },
  },
})
