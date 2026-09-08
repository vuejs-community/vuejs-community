import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preview-watch',
  description: 'Watch mode for `vite preview` - rebuilds the production bundle on source changes and full-page reloads open preview tabs.',
  icon: 'logos:vite-icon',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'preview',
    'watch',
    'rebuild',
    'live-reload',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'andrzej-stepien/vite-plugin-preview-watch',
    npm: 'vite-plugin-preview-watch',
  },
  links: {
    github: 'https://github.com/andrzej-stepien/vite-plugin-preview-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-preview-watch',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 3,
    },
  },
})
