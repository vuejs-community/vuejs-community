import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ismailnakkar/vite-obfuscator',
  description: 'Vite plugin that obfuscates the shipped JS island, with guards that fail the build on silent corruption.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'obfuscation',
    'javascript-obfuscator',
    'code-protection',
  ],
  links: {
    github: 'https://github.com/ismailnakkar/vite-obfuscator',
    npm: 'https://www.npmjs.com/package/@ismailnakkar/vite-obfuscator',
    website: 'https://github.com/ismailnakkar/vite-obfuscator',
  },
  source: {
    github: 'ismailnakkar/vite-obfuscator',
    npm: '@ismailnakkar/vite-obfuscator',
  },
})
