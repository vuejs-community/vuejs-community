import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-info-file',
  description: 'Vite plugin that generates build information and outputs it as a json file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  source: {
    github: 'LukeHackett/vite-plugin-build-info-file',
    npm: 'vite-plugin-build-info-file',
  },
  links: {
    github: 'https://github.com/LukeHackett/vite-plugin-build-info-file',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-info-file',
    website: 'https://github.com/LukeHackett/vite-plugin-build-info-file#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 110,
      weekly: 8,
    },
  },
})
