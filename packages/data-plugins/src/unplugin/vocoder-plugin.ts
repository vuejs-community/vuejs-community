import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vocoder/plugin',
  description: 'Build plugin for Vocoder — injects translations as virtual modules at build time',
  version: '0.21.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/vocoder-i18n/sdk',
    npm: 'https://www.npmjs.com/package/@vocoder/plugin',
  },
  stats: {
    downloads: {
      monthly: 399,
      weekly: 269,
    },
  },
})
