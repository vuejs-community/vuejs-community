import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minify-lit-templates',
  description: '📦 A Vite plugin to minify Lit HTML and CSS templates for smaller bundle size.',
  icon: 'logos:vite-icon',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'minify',
    'lit',
    'lit-html',
    'templates',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'femincan/vite-plugin-minify-lit-templates',
    npm: 'vite-plugin-minify-lit-templates',
  },
  links: {
    github: 'https://github.com/femincan/vite-plugin-minify-lit-templates',
    npm: 'https://www.npmjs.com/package/vite-plugin-minify-lit-templates',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
