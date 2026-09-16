import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@monsef-nbj/najm-compiler',
  description: 'The Najm compiler: .najm functional components → SSR string builders + hydration claim-walks. Includes the Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'compiler',
    'vite-plugin',
    'najm',
  ],
  source: {
    github: 'Monsef-Noubadji/Najm',
    npm: '@monsef-nbj/najm-compiler',
  },
  links: {
    github: 'https://github.com/Monsef-Noubadji/Najm',
    npm: 'https://www.npmjs.com/package/@monsef-nbj/najm-compiler',
    website: 'https://github.com/Monsef-Noubadji/Najm#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 33,
      weekly: 5,
    },
  },
})
