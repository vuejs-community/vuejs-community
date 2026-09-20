import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-killer-instincts',
  description: 'Vite plugin that detects and optionally kills processes blocking your dev server port',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'port',
    'kill',
    'strictPort',
    'dev-server',
  ],
  links: {
    github: 'https://github.com/wesbos/vite-plugin-killer-instincts',
    npm: 'https://www.npmjs.com/package/vite-plugin-killer-instincts',
    website: 'https://github.com/wesbos/vite-plugin-killer-instincts#readme',
  },
  source: {
    github: 'wesbos/vite-plugin-killer-instincts',
    npm: 'vite-plugin-killer-instincts',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 8449,
      weekly: 1492,
    },
  },
})
