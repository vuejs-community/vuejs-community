import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esbuild-minify',
  description: 'Rollup plugin to minify or clean up generated bundles using esbuild.',
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
    'esbuild',
  ],
  source: {
    github: 'prantlf/rollup-plugin-esbuild-minify',
    npm: 'rollup-plugin-esbuild-minify',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-esbuild-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esbuild-minify',
    website: 'http://github.com/prantlf/rollup-plugin-esbuild-minify/',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 220494,
      weekly: 47357,
    },
  },
})
