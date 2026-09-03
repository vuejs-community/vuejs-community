import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lingui-macro',
  description: 'Bundler plugin for compiling Lingui macros in plain JavaScript and TypeScript modules.',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'esbuild',
    'i18n',
    'lingui',
    'rolldown',
    'rollup',
    'rspack',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/SegaraRai/lingui-for',
    npm: 'https://www.npmjs.com/package/unplugin-lingui-macro',
  },
  stats: {
    downloads: {
      monthly: 890,
      weekly: 322,
    },
  },
})
