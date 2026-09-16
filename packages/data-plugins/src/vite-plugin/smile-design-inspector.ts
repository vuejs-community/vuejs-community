import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@smile-design/inspector',
  description: 'DOM Inspector engine for smile-design — TS/JSX AST property search & replace, Vite + Webpack source-map loaders, and the iframe-side runtime that powers hover / click / Alt+Click selection in Web preview.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'smile-design',
    'ai-design',
    'dom-inspector',
    'vite-plugin',
    'webpack-loader',
    'ast',
  ],
  source: {
    github: 'smilezyl2023/smile-design',
    npm: '@smile-design/inspector',
  },
  links: {
    github: 'https://github.com/smilezyl2023/smile-design',
    npm: 'https://www.npmjs.com/package/@smile-design/inspector',
    website: 'https://github.com/smilezyl2023/smile-design',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
