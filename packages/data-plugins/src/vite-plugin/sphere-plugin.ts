import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sphere-plugin',
  description: 'Dev-only Vite plugin that turns a picked Svelte element into a precise markdown prompt for a coding agent.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devtools',
    'prompt',
    'svelte',
    'sveltekit',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rodgco/sphere',
    npm: 'https://www.npmjs.com/package/sphere-plugin',
    website: 'https://github.com/rodgco/sphere#readme',
  },
  source: {
    github: 'rodgco/sphere',
    npm: 'sphere-plugin',
  },
})
