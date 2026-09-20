import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'en-vogue',
  description: 'Zero-runtime CSS-in-JS with static CSS extraction',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'css-in-js',
  ],
  links: {
    github: 'https://github.com/cyco130/en-vogue',
    npm: 'https://www.npmjs.com/package/en-vogue',
    website: 'https://github.com/cyco130/en-vogue#readme',
  },
  source: {
    github: 'cyco130/en-vogue',
    npm: 'en-vogue',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 21,
      weekly: 6,
    },
  },
})
