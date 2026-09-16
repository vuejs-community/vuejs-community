import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@m-f2e/vite-plugin-css-injected-bundle',
  description: 'vite plugin将css注入js',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
  ],
  source: {
    github: 'mistjs/vite-plugin-starter',
    npm: '@m-f2e/vite-plugin-css-injected-bundle',
  },
  links: {
    github: 'https://github.com/mistjs/vite-plugin-starter',
    npm: 'https://www.npmjs.com/package/@m-f2e/vite-plugin-css-injected-bundle',
    website: 'https://github.com/m-f2e/vite-plugin-css-injected-bundle.git#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
