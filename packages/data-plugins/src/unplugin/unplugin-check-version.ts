import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-check-version',
  description: '',
  icon: 'icon:dark-unplugin',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'CoutinhoTTS/unplugin-versions-check',
    npm: 'unplugin-check-version',
  },
  links: {
    github: 'https://github.com/CoutinhoTTS/unplugin-versions-check',
    npm: 'https://www.npmjs.com/package/unplugin-check-version',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
