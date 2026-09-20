import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'reatom-naming-plugin',
  description: 'Babel & Vite plugin that auto-injects debug names into Reatom factories (atom, action, computed, reatom*) from the variable/property name.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/matpaul/reatom-naming-plugin',
    npm: 'https://www.npmjs.com/package/reatom-naming-plugin',
    website: 'https://github.com/matpaul/reatom-naming-plugin#readme',
  },
  source: {
    github: 'matpaul/reatom-naming-plugin',
    npm: 'reatom-naming-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
