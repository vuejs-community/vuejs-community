import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'atomizer-plugins',
  description: 'Atomizer plugins for esbuild, Rollup, Vite and Webpack',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'atomizer',
    'plugin',
    'rollup',
    'rollup-plugin',
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/acss-io/atomizer',
    npm: 'https://www.npmjs.com/package/atomizer-plugins',
    website: 'https://github.com/acss-io/atomizer#readme',
  },
  source: {
    github: 'acss-io/atomizer',
    npm: 'atomizer-plugins',
  },
  stats: {
    stars: 1548,
    downloads: {
      monthly: 132,
      weekly: 29,
    },
  },
})
