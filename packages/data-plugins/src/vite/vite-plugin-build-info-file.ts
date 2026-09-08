import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-info-file',
  description: 'Vite plugin that generates build information and outputs it as a json file',
  icon: 'logos:vite-icon',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'LukeHackett/vite-plugin-build-info-file',
    npm: 'vite-plugin-build-info-file',
  },
  links: {
    github: 'https://github.com/LukeHackett/vite-plugin-build-info-file',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-info-file',
  },
  stats: {
    downloads: {
      monthly: 90,
      weekly: 43,
    },
  },
})
