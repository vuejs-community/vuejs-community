import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-css-to-js',
  description: 'Combine this with the Vite build.cssCodeSplit CSS code splitting capability to build css into individual js files instead of using css links.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite4',
    'vite-plugin',
    'vite-plugin-inject-css-to-js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Levix/vite-plugin-inject-css-to-js',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-css-to-js',
  },
  stats: {
    downloads: {
      monthly: 63,
      weekly: 21,
    },
  },
})
