import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gas-plugin/cli',
  description: 'Extensible CLI tool for scaffolding Google Apps Script projects',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'google-apps-script',
    'gas',
    'cli',
    'scaffold',
    'create',
    'unplugin',
  ],
  source: {
    github: 'wakita181009/gas-plugin',
    npm: '@gas-plugin/cli',
  },
  links: {
    github: 'https://github.com/wakita181009/gas-plugin',
    npm: 'https://www.npmjs.com/package/@gas-plugin/cli',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 46,
      weekly: 3,
    },
  },
})
