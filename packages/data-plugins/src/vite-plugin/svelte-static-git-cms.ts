import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svelte-static-git-cms',
  description: 'Simple plugin for git-based CMS with Svelte with Vite as layout',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'cms',
    'git',
    'vite-plugin',
  ],
  source: {
    npm: 'svelte-static-git-cms',
  },
  links: {
    npm: 'https://www.npmjs.com/package/svelte-static-git-cms',
    website: 'https://codeberg.org/svelte-static-git-cms/plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
