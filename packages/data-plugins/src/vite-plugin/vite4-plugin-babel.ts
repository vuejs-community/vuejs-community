import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite4-plugin-babel',
  description: 'Runs Babel in Vite during all commands',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'babel',
  ],
  source: {
    github: 'owlsdepartment/vite-plugin-babel',
    npm: 'vite4-plugin-babel',
  },
  links: {
    github: 'https://github.com/owlsdepartment/vite-plugin-babel',
    npm: 'https://www.npmjs.com/package/vite4-plugin-babel',
    website: 'https://github.com/owlsdepartment/vite-plugin-babel#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
