import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minisite',
  description: 'Vite plugin that compiles a folder of Markdown files plus optional assets into a single self-contained minisite (single index.html with hash routing)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'minisite',
    'markdown',
    'static-site',
  ],
  links: {
    github: 'https://github.com/shadowdara/samengine',
    npm: 'https://www.npmjs.com/package/vite-plugin-minisite',
    website: 'https://github.com/shadowdara/samengine#readme',
  },
  source: {
    github: 'shadowdara/samengine',
    npm: 'vite-plugin-minisite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
