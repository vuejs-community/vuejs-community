import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@beqa/unplugin-transform-react-slots',
  description: 'JSX to slot function transpilation plugin for some of the common build systems',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'react-slots',
  ],
  links: {
    github: 'https://github.com/Flammae/react-slots',
    npm: 'https://www.npmjs.com/package/@beqa/unplugin-transform-react-slots',
    website: 'https://github.com/Flammae/react-slots#readme',
  },
  source: {
    github: 'Flammae/react-slots',
    npm: '@beqa/unplugin-transform-react-slots',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 191,
      weekly: 56,
    },
  },
})
