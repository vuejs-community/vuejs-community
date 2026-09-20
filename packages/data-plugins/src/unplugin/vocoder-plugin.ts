import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vocoder/plugin',
  description: 'Build plugin for Vocoder — injects translations as virtual modules at build time',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'translation',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'nextjs',
  ],
  links: {
    github: 'https://github.com/vocoder-i18n/sdk',
    npm: 'https://www.npmjs.com/package/@vocoder/plugin',
    website: 'https://github.com/vocoder-i18n/sdk#readme',
  },
  source: {
    github: 'vocoder-i18n/sdk',
    npm: '@vocoder/plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 914,
      weekly: 510,
    },
  },
})
