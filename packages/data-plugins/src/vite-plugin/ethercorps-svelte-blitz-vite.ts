import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ethercorps/svelte-blitz-vite',
  description: 'Vite preset and file-based router for svelte-blitz apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'blitz',
    'vite',
    'vite-plugin',
    'router',
    'desktop',
  ],
  links: {
    github: 'https://github.com/etherCorps/svelte-blitz',
    npm: 'https://www.npmjs.com/package/@ethercorps/svelte-blitz-vite',
    website: 'https://github.com/etherCorps/svelte-blitz#readme',
  },
  source: {
    github: 'etherCorps/svelte-blitz',
    npm: '@ethercorps/svelte-blitz-vite',
  },
})
