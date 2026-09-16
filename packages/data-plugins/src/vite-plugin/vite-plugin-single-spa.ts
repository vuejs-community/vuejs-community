import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-single-spa',
  description: 'Vite plugin to convert Vite-based projects to single-spa root or micro-frontend applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'single-spa',
    'mife',
    'mfe',
    'micro-frontend',
    'root-config',
  ],
  source: {
    github: 'WJSoftware/vite-plugin-single-spa',
    npm: 'vite-plugin-single-spa',
  },
  links: {
    github: 'https://github.com/WJSoftware/vite-plugin-single-spa',
    npm: 'https://www.npmjs.com/package/vite-plugin-single-spa',
    website: 'https://github.com/WJSoftware/vite-plugin-single-spa#readme',
  },
  stats: {
    stars: 78,
    downloads: {
      monthly: 60946,
      weekly: 10374,
    },
  },
})
