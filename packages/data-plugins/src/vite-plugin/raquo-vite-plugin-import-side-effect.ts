import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@raquo/vite-plugin-import-side-effect',
  description: 'Vite plugin to import files for side effects only in Scala.js',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'scala',
    'scala-js',
  ],
  source: {
    github: 'raquo/vite-plugin-import-side-effect',
    npm: '@raquo/vite-plugin-import-side-effect',
  },
  links: {
    github: 'https://github.com/raquo/vite-plugin-import-side-effect',
    npm: 'https://www.npmjs.com/package/@raquo/vite-plugin-import-side-effect',
    website: 'https://github.com/raquo/vite-plugin-side-effect',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 479,
      weekly: 156,
    },
  },
})
