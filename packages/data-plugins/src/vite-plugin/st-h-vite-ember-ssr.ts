import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@st-h/vite-ember-ssr',
  description: 'Vite plugin and SSR runtime for Ember.js applications using HappyDOM',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ember',
    'emberjs',
    'ssr',
    'server-side-rendering',
    'happydom',
    'embroider',
  ],
  links: {
    github: 'https://github.com/evoactivity/vite-ember-ssr',
    npm: 'https://www.npmjs.com/package/@st-h/vite-ember-ssr',
    website: 'https://github.com/evoactivity/vite-ember-ssr/tree/main/packages/vite-ember-ssr#readme',
  },
  source: {
    github: 'evoactivity/vite-ember-ssr',
    npm: '@st-h/vite-ember-ssr',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 37,
      weekly: 9,
    },
  },
})
