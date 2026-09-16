import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tm-userscript',
  description: 'A vite plugin to build userscripts mainly for Tampermonkey.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'userscript',
    'userscripts',
    'tampermonkey',
    'vite-plugin',
    'vite',
  ],
  source: {
    github: 'asadahimeka/vite-plugin-tm-userscript',
    npm: 'vite-plugin-tm-userscript',
  },
  links: {
    github: 'https://github.com/asadahimeka/vite-plugin-tm-userscript',
    npm: 'https://www.npmjs.com/package/vite-plugin-tm-userscript',
    website: 'https://github.com/asadahimeka/vite-plugin-tm-userscript#readme',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
