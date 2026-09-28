import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cuesheet/vite',
  description: 'Vite plugin for cuesheet — handler auto-registration with HMR, dev-only injection, and typed scenarios.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cuesheet',
    'msw',
    'mock',
    'vite',
    'vite-plugin',
    'hmr',
    'devtools',
  ],
  links: {
    github: 'https://github.com/GUMBOKIM/cuesheet',
    npm: 'https://www.npmjs.com/package/@cuesheet/vite',
    website: 'https://github.com/GUMBOKIM/cuesheet#readme',
  },
  source: {
    github: 'GUMBOKIM/cuesheet',
    npm: '@cuesheet/vite',
  },
})
