import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@smile-design/inspector',
  description: 'DOM Inspector engine for smile-design — TS/JSX AST property search & replace, Vite + Webpack source-map loaders, and the iframe-side runtime that powers hover / click / Alt+Click selection in Web preview.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'smile-design',
    'ai-design',
    'dom-inspector',
    'vite-plugin',
    'webpack-loader',
    'ast',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/smilezyl2023/smile-design',
    npm: 'https://www.npmjs.com/package/@smile-design/inspector',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
