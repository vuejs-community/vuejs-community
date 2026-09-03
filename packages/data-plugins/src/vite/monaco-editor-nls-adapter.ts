import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'monaco-editor-nls-adapter',
  description: 'Multi-language NLS adapter for Monaco Editor 0.50.0+ (Self-hosted)',
  version: '2.3.1',
  category: 'plugin',
  tags: [
    'monaco-editor',
    'nls',
    'localization',
    'internationalization',
    'i18n',
    'vite-plugin',
    'webpack-loader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leepule/monaco-editor-nls-adapter',
    npm: 'https://www.npmjs.com/package/monaco-editor-nls-adapter',
  },
  stats: {
    downloads: {
      monthly: 176,
      weekly: 25,
    },
  },
})
