import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gas-plugin/cli',
  description: 'Extensible CLI tool for scaffolding Google Apps Script projects',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'google-apps-script',
    'gas',
    'cli',
    'scaffold',
    'create',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wakita181009/gas-plugin',
    npm: 'https://www.npmjs.com/package/@gas-plugin/cli',
  },
  stats: {
    downloads: {
      monthly: 102,
      weekly: 6,
    },
  },
})
