import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@web-remarq/unplugin',
  description: 'Unplugin for web-remarq source location injection (Vite/webpack/Rollup/esbuild/Rspack)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'web-remarq',
    'source-location',
    'annotation',
  ],
  source: {
    github: 'DPostnik/web-remarq',
    npm: '@web-remarq/unplugin',
  },
  links: {
    github: 'https://github.com/DPostnik/web-remarq',
    npm: 'https://www.npmjs.com/package/@web-remarq/unplugin',
    website: 'https://github.com/DPostnik/web-remarq#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 234,
      weekly: 184,
    },
  },
})
