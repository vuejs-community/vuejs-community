import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tm-userscript',
  description: 'A vite plugin to build userscripts mainly for Tampermonkey.',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'userscript',
    'userscripts',
    'tampermonkey',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/asadahimeka/vite-plugin-tm-userscript',
    npm: 'https://www.npmjs.com/package/vite-plugin-tm-userscript',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 2,
    },
  },
})
