import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-just-svgo',
  description: 'Simple vite plugin for svg files optimization',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svgo',
    'svg',
    'optimize',
    'minify',
  ],
  links: {
    github: 'https://github.com/muturgan/vite-plugin-just-svgo',
    npm: 'https://www.npmjs.com/package/vite-plugin-just-svgo',
    website: 'https://github.com/muturgan/vite-plugin-just-svgo#readme',
  },
  source: {
    github: 'muturgan/vite-plugin-just-svgo',
    npm: 'vite-plugin-just-svgo',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
