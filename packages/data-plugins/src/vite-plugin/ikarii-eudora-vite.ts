import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ikarii/eudora-vite',
  description: 'Vite plugin and CLI for Eudora, the SvelteKit-native design-system studio.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'design-system',
    'storybook-alternative',
    'eudora',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@ikarii/eudora-vite',
    website: 'https://gitlab.com/ikarii/open-source/eudora-alpha#readme',
  },
  source: {
    npm: '@ikarii/eudora-vite',
  },
})
