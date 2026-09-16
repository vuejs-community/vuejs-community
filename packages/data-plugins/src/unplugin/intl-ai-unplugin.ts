import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@intl-ai/unplugin',
  description: 'AI-powered i18n translation plugin for all bundlers',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'ai',
    'esbuild',
    'i18n',
    'intl',
    'rollup',
    'translation',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'sigilco/intl-ai',
    npm: '@intl-ai/unplugin',
  },
  links: {
    github: 'https://github.com/sigilco/intl-ai',
    npm: 'https://www.npmjs.com/package/@intl-ai/unplugin',
    website: 'https://intl-ai.pages.dev',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 75,
      weekly: 2,
    },
  },
})
