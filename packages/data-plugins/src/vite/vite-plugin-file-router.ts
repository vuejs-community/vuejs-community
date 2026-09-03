import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-router',
  description: 'Vite plugin: scan pages/ to generate routes.ts or routes.js for React Router / Vue Router. TypeScript and JavaScript projects supported; hand-edits preserved on regen.',
  version: '2.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'file-based-routing',
    'react-router',
    'vue-router',
    'capacitor',
    'spa',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-file-router',
  },
  stats: {
    downloads: {
      monthly: 155,
      weekly: 21,
    },
  },
})
