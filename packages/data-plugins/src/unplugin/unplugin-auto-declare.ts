import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-declare',
  description: 'Auto-declare composable bindings in Vue <script setup> for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/BobbieGoede/unplugin-auto-declare',
    npm: 'https://www.npmjs.com/package/unplugin-auto-declare',
    website: 'https://github.com/BobbieGoede/unplugin-auto-declare#readme',
  },
  source: {
    github: 'BobbieGoede/unplugin-auto-declare',
    npm: 'unplugin-auto-declare',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
