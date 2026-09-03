import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@roeefl/vite-plugin-react-css-modules',
  description: 'automatically transform component-scoped *.css|scss files to *.module.css|scss',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'rollup',
    'css-modules',
    'vite-plugin',
    'rollup-plugin',
    'vite-plugin-react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Roeefl/vite-plugin-react-css-modules',
    npm: 'https://www.npmjs.com/package/@roeefl/vite-plugin-react-css-modules',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 37,
    },
  },
})
