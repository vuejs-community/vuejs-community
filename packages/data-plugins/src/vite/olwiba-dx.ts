import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@olwiba/dx',
  description: 'Developer experience tooling for the Olwiba ecosystem',
  version: '0.0.23',
  category: 'plugin',
  tags: [
    'olwiba',
    'dx',
    'developer-experience',
    'vite-plugin',
    'tsup',
    'dev-banner',
    'ascii',
    'figlet',
    'eslint-config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Olwiba/olwibaDX',
    npm: 'https://www.npmjs.com/package/@olwiba/dx',
  },
  stats: {
    downloads: {
      monthly: 768,
      weekly: 266,
    },
  },
})
