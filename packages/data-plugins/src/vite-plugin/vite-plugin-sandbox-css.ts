import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sandbox-css',
  description: 'Vite plugin that adds CSS namespace prefixes with overlay support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'namespace',
    'selector-prefix',
    'prefix',
    'postcss',
    'postcss-prefix-selector',
    'overlay',
    'portal',
    'teleport',
    'micro-frontend',
    'scoped-css',
  ],
  source: {
    github: 'zhanghongen/vite-plugin-sandbox',
    npm: 'vite-plugin-sandbox-css',
  },
  links: {
    github: 'https://github.com/zhanghongen/vite-plugin-sandbox',
    npm: 'https://www.npmjs.com/package/vite-plugin-sandbox-css',
    website: 'https://github.com/zhanghongen/vite-plugin-sandbox#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 61,
      weekly: 1,
    },
  },
})
