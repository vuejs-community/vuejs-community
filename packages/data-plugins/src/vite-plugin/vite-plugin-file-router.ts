import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-router',
  description: 'Vite plugin: scan pages/ to generate routes.ts or routes.js for React Router / Vue Router. TypeScript and JavaScript projects supported; hand-edits preserved on regen.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'file-based-routing',
    'react-router',
    'vue-router',
    'capacitor',
    'spa',
  ],
  source: {
    npm: 'vite-plugin-file-router',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-file-router',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 74,
      weekly: 9,
    },
  },
})
