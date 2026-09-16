import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plexinc/vite-plugin-msdf-fontgen',
  description: 'Vite plugin for generating MSDF fonts for use in Lightningjs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'plexinc/react-lightning',
    npm: '@plexinc/vite-plugin-msdf-fontgen',
  },
  links: {
    github: 'https://github.com/plexinc/react-lightning',
    npm: 'https://www.npmjs.com/package/@plexinc/vite-plugin-msdf-fontgen',
    website: 'https://github.com/plexinc/react-lightning#readme',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
