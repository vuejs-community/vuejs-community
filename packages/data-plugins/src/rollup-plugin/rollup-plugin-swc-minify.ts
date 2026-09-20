import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-swc-minify',
  description: 'Rollup plugin to minify generated bundles using swc.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'minify',
    'swc',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-swc-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-swc-minify',
    website: 'http://github.com/prantlf/rollup-plugin-swc-minify/',
  },
  source: {
    github: 'prantlf/rollup-plugin-swc-minify',
    npm: 'rollup-plugin-swc-minify',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 253,
      weekly: 30,
    },
  },
})
