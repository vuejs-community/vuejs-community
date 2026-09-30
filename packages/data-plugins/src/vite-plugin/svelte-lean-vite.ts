import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svelte-lean/vite',
  description: 'Vite integration for Svelte Lean: discovers data-slean behaviors in Svelte markup at build time and injects only the registration modules that are used.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'svelte5',
    'svelte-lean',
    'sveltekit',
    'tree-shaking',
    'code-splitting',
  ],
  links: {
    github: 'https://github.com/say16/svelte-lean',
    npm: 'https://www.npmjs.com/package/@svelte-lean/vite',
    website: 'https://svelte-lean.vercel.app/docs/architecture/build-time-discovery',
  },
  source: {
    github: 'say16/svelte-lean',
    npm: '@svelte-lean/vite',
  },
})
