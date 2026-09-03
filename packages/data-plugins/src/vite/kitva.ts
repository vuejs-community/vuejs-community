import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'kitva',
  description: 'Validation kit for SvelteKit',
  version: '1.0.0-next.15',
  category: 'plugin',
  tags: [
    'svelte',
    'sveltekit',
    'validation',
    'forms',
    'form-validation',
    'vite-plugin',
    'jsonschema',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/qurafi/kitva',
    npm: 'https://www.npmjs.com/package/kitva',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 6,
    },
  },
})
