import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kitva',
  description: 'Validation kit for SvelteKit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'validation',
    'forms',
    'form-validation',
    'vite-plugin',
    'jsonschema',
  ],
  links: {
    github: 'https://github.com/qurafi/kitva',
    npm: 'https://www.npmjs.com/package/kitva',
    website: 'https://github.com/qurafi/kitva#readme',
  },
  source: {
    github: 'qurafi/kitva',
    npm: 'kitva',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
