import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'triggerkit',
  description: 'A plugin to connect SvelteKit functions to your trigger.dev tasks',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'sveltekit',
    'trigger.dev',
    'functions',
  ],
  source: {
    github: 'EnoughXP/vite-plugin-triggerkit',
    npm: 'triggerkit',
  },
  links: {
    github: 'https://github.com/EnoughXP/vite-plugin-triggerkit',
    npm: 'https://www.npmjs.com/package/triggerkit',
    website: 'http://triggerkit.pages.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 130,
      weekly: 9,
    },
  },
})
