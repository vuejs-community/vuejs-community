import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thomas-adam-leigh/elenjical-vite-plugin',
  description: 'Uploads source maps and records releases in Elenjical from a Vite build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'elenjical',
    'vite',
    'vite-plugin',
    'source-maps',
    'releases',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@thomas-adam-leigh/elenjical-vite-plugin',
  },
  source: {
    npm: '@thomas-adam-leigh/elenjical-vite-plugin',
  },
})
