import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-css-to-js',
  description: 'Combine this with the Vite build.cssCodeSplit CSS code splitting capability to build css into individual js files instead of using css links.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite4',
    'vite-plugin',
    'vite-plugin-inject-css-to-js',
  ],
  links: {
    github: 'https://github.com/Levix/vite-plugin-inject-css-to-js',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-css-to-js',
    website: 'https://github.com/Levix/vite-plugin-inject-css-to-js',
  },
  source: {
    github: 'Levix/vite-plugin-inject-css-to-js',
    npm: 'vite-plugin-inject-css-to-js',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 112,
      weekly: 71,
    },
  },
})
