import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'svelte-static-git-cms',
  description: 'Simple plugin for git-based CMS with Svelte with Vite as layout',
  version: '0.5.7',
  category: 'plugin',
  tags: [
    'svelte',
    'sveltekit',
    'cms',
    'git',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/svelte-static-git-cms',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
