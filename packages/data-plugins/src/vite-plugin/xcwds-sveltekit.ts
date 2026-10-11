import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xcwds/sveltekit',
  description: 'Binds the @xcwds kernel to SvelteKit: a Vite plugin, svelte.config and server hooks, the <App> component, Svelte 5 persist() and reactive settings, and a route registry.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pwa',
    'offline-first',
    'sveltekit',
    'vite-plugin',
    'xcwds',
  ],
  links: {
    github: 'https://github.com/xcwds/xcwds',
    npm: 'https://www.npmjs.com/package/@xcwds/sveltekit',
    website: 'https://github.com/xcwds/xcwds#readme',
  },
  source: {
    github: 'xcwds/xcwds',
    npm: '@xcwds/sveltekit',
  },
})
