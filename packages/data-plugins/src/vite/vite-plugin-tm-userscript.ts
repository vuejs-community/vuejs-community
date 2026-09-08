import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tm-userscript',
  description: 'A vite plugin to build userscripts mainly for Tampermonkey.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'asadahimeka/vite-plugin-tm-userscript',
    npm: 'vite-plugin-tm-userscript',
  },
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
