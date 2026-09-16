import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'monaco-editor-nls-adapter',
  description: 'Multi-language NLS adapter for Monaco Editor 0.50.0+ (Self-hosted)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'monaco-editor',
    'nls',
    'localization',
    'internationalization',
    'i18n',
    'vite-plugin',
    'webpack-loader',
  ],
  source: {
    github: 'leepule/monaco-editor-nls-adapter',
    npm: 'monaco-editor-nls-adapter',
  },
  links: {
    github: 'https://github.com/leepule/monaco-editor-nls-adapter',
    npm: 'https://www.npmjs.com/package/monaco-editor-nls-adapter',
    website: 'https://github.com/leepule/monaco-editor-nls-adapter#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 102,
      weekly: 12,
    },
  },
})
