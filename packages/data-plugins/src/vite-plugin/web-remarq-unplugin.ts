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
  links: {
    github: 'https://github.com/DPostnik/web-remarq',
    npm: 'https://www.npmjs.com/package/@web-remarq/unplugin',
    website: 'https://github.com/DPostnik/web-remarq#readme',
  },
  source: {
    github: 'DPostnik/web-remarq',
    npm: '@web-remarq/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 234,
      weekly: 184,
    },
  },
})
