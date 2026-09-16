import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-inline-edit',
  description: 'Edit text in the browser and have it written back to your .svelte source. No agent, no CMS — the compiler records where each string lives and the dev server splices the file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'optikalefx/vite-plugin-svelte-inline-edit',
    npm: 'vite-plugin-svelte-inline-edit',
  },
  links: {
    github: 'https://github.com/optikalefx/vite-plugin-svelte-inline-edit',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-inline-edit',
    website: 'https://github.com/optikalefx/vite-plugin-svelte-inline-edit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 51,
      weekly: 51,
    },
  },
})
