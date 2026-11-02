import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'playdb-vite',
  description: 'Vite integration for PlayLite (PHP) and PlayGoLite (Go).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'playlite',
    'playgolite',
    'playdb',
    'php',
    'go',
  ],
  links: {
    github: 'https://github.com/romycantara/playdb-vite',
    npm: 'https://www.npmjs.com/package/playdb-vite',
    website: 'https://github.com/romycantara/playdb-vite#readme',
  },
  source: {
    github: 'romycantara/playdb-vite',
    npm: 'playdb-vite',
  },
})
