import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'flusterduck-vite-plugin',
  description: 'Vite plugin for rage click detection and UX friction tracking. Auto-injects Flusterduck SDK. Works with React, Vue, Svelte, Solid.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vitejs',
    'rage-click',
    'dead-click',
    'click-tracking',
    'ux-analytics',
    'friction',
    'flusterduck',
    'auto-inject',
    'build-plugin',
    'bundler-plugin',
    'react-vite',
    'vue-vite',
    'svelte-vite',
  ],
  source: {
    github: 'creayo-dev/flusterduck',
    npm: 'flusterduck-vite-plugin',
  },
  links: {
    github: 'https://github.com/creayo-dev/flusterduck',
    npm: 'https://www.npmjs.com/package/flusterduck-vite-plugin',
    website: 'https://docs.flusterduck.com/pkg-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 893,
      weekly: 178,
    },
  },
})
