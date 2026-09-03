import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-declare',
  description: 'Auto-declare composable bindings in Vue <script setup> for Vite and Webpack',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'esbuild',
    'vue',
    'vue-i18n',
    'i18n',
    'auto-import',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/BobbieGoede/unplugin-auto-declare',
    npm: 'https://www.npmjs.com/package/unplugin-auto-declare',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
