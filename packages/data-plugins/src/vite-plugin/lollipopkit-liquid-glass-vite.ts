import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lollipopkit/liquid-glass-vite',
  description: 'Vite plugin and virtual modules for generating liquid glass filter assets.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'liquid-glass',
    'vite-plugin',
    'svg-filter',
    'virtual-module',
    'visual-effects',
  ],
  source: {
    github: 'lollipopkit/liquid-glass',
    npm: '@lollipopkit/liquid-glass-vite',
  },
  links: {
    github: 'https://github.com/lollipopkit/liquid-glass',
    npm: 'https://www.npmjs.com/package/@lollipopkit/liquid-glass-vite',
    website: 'https://github.com/lollipopkit/liquid-glass#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 8,
    },
  },
})
