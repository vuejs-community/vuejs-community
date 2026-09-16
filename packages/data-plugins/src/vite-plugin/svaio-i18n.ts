import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svaio/i18n',
  description: 'Zero-config i18n plugin for Vite and Sveltekit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'pigeonposse',
    'pp',
    'sv',
    'svelte',
    'sveltekit',
    'toolkit',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'pigeonposse/svaio',
    npm: '@svaio/i18n',
  },
  links: {
    github: 'https://github.com/pigeonposse/svaio',
    npm: 'https://www.npmjs.com/package/@svaio/i18n',
    website: 'https://svaio.pigeonposse.com/guide/i18n',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 52,
      weekly: 5,
    },
  },
})
