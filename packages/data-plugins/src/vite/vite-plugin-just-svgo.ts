import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-just-svgo',
  description: 'Simple vite plugin for svg files optimization',
  icon: 'logos:vite-icon',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svgo',
    'svg',
    'optimize',
    'minify',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'muturgan/vite-plugin-just-svgo',
    npm: 'vite-plugin-just-svgo',
  },
  links: {
    github: 'https://github.com/muturgan/vite-plugin-just-svgo',
    npm: 'https://www.npmjs.com/package/vite-plugin-just-svgo',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
