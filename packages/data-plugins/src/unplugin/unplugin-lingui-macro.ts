import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lingui-macro',
  description: 'Bundler plugin for compiling Lingui macros in plain JavaScript and TypeScript modules.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/SegaraRai/lingui-for',
    npm: 'https://www.npmjs.com/package/unplugin-lingui-macro',
    website: 'https://lingui-for.roundtrip.dev/guides/install-and-first-translation',
  },
  source: {
    github: 'SegaraRai/lingui-for',
    npm: 'unplugin-lingui-macro',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1533,
      weekly: 650,
    },
  },
})
