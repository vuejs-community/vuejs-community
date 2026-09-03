import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@web-remarq/unplugin',
  description: 'Unplugin for web-remarq source location injection (Vite/webpack/Rollup/esbuild/Rspack)',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'web-remarq',
    'source-location',
    'annotation',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DPostnik/web-remarq',
    npm: 'https://www.npmjs.com/package/@web-remarq/unplugin',
  },
  stats: {
    downloads: {
      monthly: 116,
      weekly: 7,
    },
  },
})
