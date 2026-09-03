import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'triggerkit',
  description: 'A plugin to connect SvelteKit functions to your trigger.dev tasks',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'sveltekit',
    'trigger.dev',
    'functions',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/EnoughXP/vite-plugin-triggerkit',
    npm: 'https://www.npmjs.com/package/triggerkit',
  },
  stats: {
    downloads: {
      monthly: 121,
      weekly: 98,
    },
  },
})
