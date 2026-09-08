import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preview-xwatch',
  description: 'Watch mode for `vite preview` - rebuilds the production bundle on source changes and full-page reloads open preview tabs.',
  icon: 'logos:vite-icon',
  version: '0.5.1',
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
    github: 'cromat/vite-plugin-preview-xwatch',
    npm: 'vite-plugin-preview-xwatch',
  },
  links: {
    github: 'https://github.com/cromat/vite-plugin-preview-xwatch',
    npm: 'https://www.npmjs.com/package/vite-plugin-preview-xwatch',
  },
  stats: {
    downloads: {
      monthly: 191,
      weekly: 6,
    },
  },
})
