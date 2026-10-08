import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'effect-atom-svelte-devtools',
  description: 'Developer tools for effect-atom-svelte: atom names from your source, and a live view of the registry',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devtools',
    'effect',
    'effect-atom',
    'effect-atom-svelte',
    'svelte',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jarrednorrisdev/effect-atom-svelte',
    npm: 'https://www.npmjs.com/package/effect-atom-svelte-devtools',
    website: 'https://atom.jarrednorris.dev',
  },
  source: {
    github: 'jarrednorrisdev/effect-atom-svelte',
    npm: 'effect-atom-svelte-devtools',
  },
})
