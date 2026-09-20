import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-prettyuglify',
  description: 'Rollup plugin to minify generated bundle into the shape of an SVG\'s paths',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify',
    'minify',
  ],
  links: {
    github: 'https://github.com/lwiseman/rollup-plugin-prettyuglify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-prettyuglify',
    website: 'https://github.com/lwiseman/rollup-plugin-prettyuglify#readme',
  },
  source: {
    github: 'lwiseman/rollup-plugin-prettyuglify',
    npm: 'rollup-plugin-prettyuglify',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
