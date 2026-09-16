import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@si-ic/thisone',
  description: 'Point at any element in your dev preview and hand your AI agent its exact source location and a screenshot. Vite, webpack, Rspack, Rollup, esbuild.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'rspack',
    'rollup-plugin',
    'esbuild-plugin',
    'unplugin',
    'ai',
    'agent',
    'llm',
    'context',
    'devtools',
    'inspector',
    'vue',
    'react',
  ],
  source: {
    github: 'SI-IC/thisone',
    npm: '@si-ic/thisone',
  },
  links: {
    github: 'https://github.com/SI-IC/thisone',
    npm: 'https://www.npmjs.com/package/@si-ic/thisone',
    website: 'https://github.com/SI-IC/thisone#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 282,
      weekly: 10,
    },
  },
})
