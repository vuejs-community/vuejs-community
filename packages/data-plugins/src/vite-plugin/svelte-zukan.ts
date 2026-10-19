import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svelte-zukan',
  description: 'Colocated component catalog for Svelte, served by a Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'vite-plugin',
    'component-catalog',
    'styleguide',
    'sveltekit',
  ],
  links: {
    github: 'https://github.com/oekazuma/svelte-zukan',
    npm: 'https://www.npmjs.com/package/svelte-zukan',
    website: 'https://oekazuma.github.io/svelte-zukan/',
  },
  source: {
    github: 'oekazuma/svelte-zukan',
    npm: 'svelte-zukan',
  },
})
