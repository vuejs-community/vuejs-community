import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@blockquote/vite-plugin-prevent-rewrite-imports-type-module',
  description: 'A Vite plugin that prevents Vite from rewriting ES module imports by targeting `<script type="module">`',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/oscarmarina/vite-plugin-prevent-rewrite-imports-type-module',
    npm: 'https://www.npmjs.com/package/@blockquote/vite-plugin-prevent-rewrite-imports-type-module',
  },
  stats: {
    downloads: {
      monthly: 63,
      weekly: 12,
    },
  },
})
