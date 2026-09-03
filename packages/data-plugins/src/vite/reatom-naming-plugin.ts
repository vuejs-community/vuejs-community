import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'reatom-naming-plugin',
  description: 'Babel & Vite plugin that auto-injects debug names into Reatom factories (atom, action, computed, reatom*) from the variable/property name.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'reatom',
    'babel-plugin',
    'vite-plugin',
    'babel',
    'vite',
    'debug',
    'naming',
    'state-manager',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/matpaul/reatom-naming-plugin',
    npm: 'https://www.npmjs.com/package/reatom-naming-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
