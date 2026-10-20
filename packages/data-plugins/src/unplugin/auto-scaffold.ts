import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'auto-scaffold',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'scaffold',
    'template',
    'dev-tools',
  ],
  links: {
    github: 'https://github.com/posva/auto-scaffold',
    npm: 'https://www.npmjs.com/package/auto-scaffold',
    website: 'https://github.com/posva/auto-scaffold#readme',
  },
  source: {
    github: 'posva/auto-scaffold',
    npm: 'auto-scaffold',
  },
  stats: {
    stars: 30,
    downloads: {
      monthly: 309,
      weekly: 23,
    },
  },
})
