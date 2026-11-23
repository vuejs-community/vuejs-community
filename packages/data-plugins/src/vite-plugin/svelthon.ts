import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svelthon',
  description: 'Svelte and SvelteKit in Python',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'python',
    'brython',
    'vite-plugin',
    'svelte-preprocessor',
    'compiler',
  ],
  links: {
    github: 'https://github.com/svelthon/svelthon',
    npm: 'https://www.npmjs.com/package/svelthon',
    website: 'https://svelthon.dev',
  },
  source: {
    github: 'svelthon/svelthon',
    npm: 'svelthon',
  },
})
