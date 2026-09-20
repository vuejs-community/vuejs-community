import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preview-watch',
  description: 'Watch mode for `vite preview` - rebuilds the production bundle on source changes and full-page reloads open preview tabs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'preview',
    'watch',
    'rebuild',
    'live-reload',
  ],
  links: {
    github: 'https://github.com/andrzej-stepien/vite-plugin-preview-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-preview-watch',
    website: 'https://github.com/andrzej-stepien/vite-plugin-preview-watch#readme',
  },
  source: {
    github: 'andrzej-stepien/vite-plugin-preview-watch',
    npm: 'vite-plugin-preview-watch',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
