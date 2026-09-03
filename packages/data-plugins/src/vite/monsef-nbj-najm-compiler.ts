import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@monsef-nbj/najm-compiler',
  description: 'The Najm compiler: .najm functional components → SSR string builders + hydration claim-walks. Includes the Vite plugin.',
  version: '1.1.0-rc.0',
  category: 'plugin',
  tags: [
    'compiler',
    'vite-plugin',
    'najm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Monsef-Noubadji/Najm',
    npm: 'https://www.npmjs.com/package/@monsef-nbj/najm-compiler',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 5,
    },
  },
})
