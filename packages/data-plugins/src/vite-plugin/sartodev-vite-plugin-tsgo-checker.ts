import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sartodev/vite-plugin-tsgo-checker',
  description: 'Vite plugin that type-checks with tsgo (TypeScript 7) and lints with Oxlint, with a browser overlay and formatted terminal output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tsgo',
    'typescript-go',
    'oxlint',
    'checker',
    'overlay',
  ],
  links: {
    github: 'https://github.com/SartoDev/vite-plugin-tsgo-checker',
    npm: 'https://www.npmjs.com/package/@sartodev/vite-plugin-tsgo-checker',
    website: 'https://github.com/SartoDev/vite-plugin-tsgo-checker#readme',
  },
  source: {
    github: 'SartoDev/vite-plugin-tsgo-checker',
    npm: '@sartodev/vite-plugin-tsgo-checker',
  },
})
