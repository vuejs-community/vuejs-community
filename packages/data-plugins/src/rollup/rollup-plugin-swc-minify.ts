import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-swc-minify',
  description: 'Rollup plugin to minify generated bundles using swc.',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'minify',
    'swc',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-swc-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-swc-minify',
  },
  stats: {
    downloads: {
      monthly: 301,
      weekly: 69,
    },
  },
})
