import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@goatsoft/aurora-unplugin',
  description: 'Import .aurora files in Vite, Rollup, Rolldown, esbuild, webpack and Rspack: validated at build time, typed, hot-reloaded.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aurora',
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'rspack-plugin',
  ],
  links: {
    github: 'https://github.com/goatsoft/aurora',
    npm: 'https://www.npmjs.com/package/@goatsoft/aurora-unplugin',
    website: 'https://aurora.goatsoft.io/docs/guide/getting-started',
  },
  source: {
    github: 'goatsoft/aurora',
    npm: '@goatsoft/aurora-unplugin',
  },
})
