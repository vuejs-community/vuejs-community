import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ogygia/compiler',
  description: 'The compiler of ogygia (SSR islands for SvelteKit): the region transform, the build\'s link step and the Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'compiler',
    'ogygia',
    'sveltekit',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ogygiajs/ogygia',
    npm: 'https://www.npmjs.com/package/@ogygia/compiler',
    website: 'https://ogygiajs.dev',
  },
  source: {
    github: 'ogygiajs/ogygia',
    npm: '@ogygia/compiler',
  },
})
