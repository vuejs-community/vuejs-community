import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-browser-env',
  description: 'A Vite plugin to inject environment variables into the browser runtime',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'environment',
    'env',
    'browser',
  ],
  links: {
    github: 'https://github.com/charleslo1/vite-plugin-browser-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-browser-env',
    website: 'https://github.com/charleslo1/vite-plugin-browser-env#readme',
  },
  source: {
    github: 'charleslo1/vite-plugin-browser-env',
    npm: 'vite-plugin-browser-env',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
