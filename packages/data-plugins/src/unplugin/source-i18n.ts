import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'source-i18n',
  description: 'i18n without keys: write t(\'your text\'), get catalogs generated and machine-translated automatically.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'localization',
    'translation',
    'machine-translation',
    'typescript',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'unplugin',
    'rspack',
  ],
  links: {
    github: 'https://github.com/wreckglow/source-i18n',
    npm: 'https://www.npmjs.com/package/source-i18n',
    website: 'https://sourcei18n.deploybrain.cn',
  },
  source: {
    github: 'wreckglow/source-i18n',
    npm: 'source-i18n',
  },
})
