import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'eyes-sourcemap-vite',
  description: 'A Vite plugin for uploading source maps to monitoring services. Simplify source map management and error tracking in production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sourcemap',
    'sourcemap-upload',
    'source-map-plugin',
    'vite-source-map',
    'vite-plugin',
  ],
  source: {
    github: 'mobei01/eyes-sourcemap-vite',
    npm: 'eyes-sourcemap-vite',
  },
  links: {
    github: 'https://github.com/mobei01/eyes-sourcemap-vite',
    npm: 'https://www.npmjs.com/package/eyes-sourcemap-vite',
    website: 'https://github.com/mobei01/eyes-sourcemap-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
