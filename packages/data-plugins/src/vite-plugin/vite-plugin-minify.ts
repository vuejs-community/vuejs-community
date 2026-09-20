import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minify',
  description: 'Minify html in production',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'minify',
    'minify-html',
    'vite-plugin',
    'vite-plugin-minify',
  ],
  links: {
    github: 'https://github.com/zhuweiyou/vite-plugin-minify',
    npm: 'https://www.npmjs.com/package/vite-plugin-minify',
    website: 'https://github.com/zhuweiyou/vite-plugin-minify#readme',
  },
  source: {
    github: 'zhuweiyou/vite-plugin-minify',
    npm: 'vite-plugin-minify',
  },
  stats: {
    stars: 55,
    downloads: {
      monthly: 144525,
      weekly: 30520,
    },
  },
})
