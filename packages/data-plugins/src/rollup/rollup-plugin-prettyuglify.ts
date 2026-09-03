import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-prettyuglify',
  description: 'Rollup plugin to minify generated bundle into the shape of an SVG\'s paths',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lwiseman/rollup-plugin-prettyuglify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-prettyuglify',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
