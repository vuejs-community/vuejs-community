import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stylewright',
  description: 'Edit a Svelte component\'s CSS live in the browser and save it straight back into the .svelte <style> block. A dev-only Vite plugin.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'svelte',
    'css',
    'devtools',
    'live-edit',
    'inspector',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Greg-J/vite-plugin-stylewright',
    npm: 'https://www.npmjs.com/package/vite-plugin-stylewright',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 6,
    },
  },
})
