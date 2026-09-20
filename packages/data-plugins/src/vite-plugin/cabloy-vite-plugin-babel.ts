import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cabloy/vite-plugin-babel',
  description: 'Runs Babel in Vite during all commands',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'babel',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/owlsdepartment/vite-plugin-babel',
    npm: 'https://www.npmjs.com/package/@cabloy/vite-plugin-babel',
    website: 'https://github.com/owlsdepartment/vite-plugin-babel#readme',
  },
  source: {
    github: 'owlsdepartment/vite-plugin-babel',
    npm: '@cabloy/vite-plugin-babel',
  },
  stats: {
    stars: 68,
    downloads: {
      monthly: 1510,
      weekly: 189,
    },
  },
})
