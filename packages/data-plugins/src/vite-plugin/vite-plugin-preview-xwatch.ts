import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preview-xwatch',
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
    github: 'https://github.com/cromat/vite-plugin-preview-xwatch',
    npm: 'https://www.npmjs.com/package/vite-plugin-preview-xwatch',
    website: 'https://github.com/cromat/vite-plugin-preview-xwatch#readme',
  },
  source: {
    github: 'cromat/vite-plugin-preview-xwatch',
    npm: 'vite-plugin-preview-xwatch',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 197,
      weekly: 2,
    },
  },
})
