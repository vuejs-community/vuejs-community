import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-react-svg',
  description: 'Optimize svg and load it as a React Component',
  icon: 'logos:rollupjs',
  version: '3.0.3',
  category: 'plugin',
  tags: [
    'loader',
    'react',
    'react-svg-loader',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'boopathi/react-svg-loader',
    npm: 'rollup-plugin-react-svg',
  },
  links: {
    github: 'https://github.com/boopathi/react-svg-loader',
    npm: 'https://www.npmjs.com/package/rollup-plugin-react-svg',
  },
  stats: {
    downloads: {
      monthly: 11297,
      weekly: 2850,
    },
  },
})
