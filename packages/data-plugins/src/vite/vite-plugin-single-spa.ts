import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-single-spa',
  description: 'Vite plugin to convert Vite-based projects to single-spa root or micro-frontend applications.',
  version: '2.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'single-spa',
    'mife',
    'mfe',
    'micro-frontend',
    'root-config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WJSoftware/vite-plugin-single-spa',
    npm: 'https://www.npmjs.com/package/vite-plugin-single-spa',
  },
  stats: {
    downloads: {
      monthly: 67316,
      weekly: 18276,
    },
  },
})
