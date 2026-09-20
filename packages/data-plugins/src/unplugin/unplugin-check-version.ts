import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-check-version',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  links: {
    github: 'https://github.com/CoutinhoTTS/unplugin-versions-check',
    npm: 'https://www.npmjs.com/package/unplugin-check-version',
    website: 'https://github.com/CoutinhoTTS/unplugin-versions-check#readme',
  },
  source: {
    github: 'CoutinhoTTS/unplugin-versions-check',
    npm: 'unplugin-check-version',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
