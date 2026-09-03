import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@beqa/unplugin-transform-react-slots',
  description: 'JSX to slot function transpilation plugin for some of the common build systems',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'react-slots',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Flammae/react-slots',
    npm: 'https://www.npmjs.com/package/@beqa/unplugin-transform-react-slots',
  },
  stats: {
    downloads: {
      monthly: 229,
      weekly: 69,
    },
  },
})
