import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@olwiba/dx',
  description: 'Developer experience tooling for the Olwiba ecosystem',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Olwiba/olwibaDX',
    npm: 'https://www.npmjs.com/package/@olwiba/dx',
    website: 'https://github.com/Olwiba/olwibaDX#readme',
  },
  source: {
    github: 'Olwiba/olwibaDX',
    npm: '@olwiba/dx',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1781,
      weekly: 1020,
    },
  },
})
