import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-inline-edit',
  description: 'Edit text in the browser and have it written back to your .svelte source. No agent, no CMS — the compiler records where each string lives and the dev server splices the file.',
  icon: '',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'sveltekit',
    'inline-edit',
    'visual-editing',
    'contenteditable',
    'dx',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/optikalefx/vite-plugin-svelte-inline-edit',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-inline-edit',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
