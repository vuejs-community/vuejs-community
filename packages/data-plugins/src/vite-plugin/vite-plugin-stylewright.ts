import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stylewright',
  description: 'Edit a Svelte component\'s CSS live in the browser and save it straight back into the .svelte <style> block. A dev-only Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svelte',
    'css',
    'devtools',
    'live-edit',
    'inspector',
    'hmr',
  ],
  source: {
    github: 'Greg-J/vite-plugin-stylewright',
    npm: 'vite-plugin-stylewright',
  },
  links: {
    github: 'https://github.com/Greg-J/vite-plugin-stylewright',
    npm: 'https://www.npmjs.com/package/vite-plugin-stylewright',
    website: 'https://github.com/Greg-J/vite-plugin-stylewright#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
