import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inflector/vite-plugin-keeno',
  description: 'Vite plugin for Keeno (.kn) single-file components, with file-based routing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'keeno',
    'vite',
    'vite-plugin',
    'kn',
  ],
  links: {
    github: 'https://github.com/iliesw/Keeno',
    npm: 'https://www.npmjs.com/package/@inflector/vite-plugin-keeno',
    website: 'https://keeno.inflector.io',
  },
  source: {
    github: 'iliesw/Keeno',
    npm: '@inflector/vite-plugin-keeno',
  },
})
