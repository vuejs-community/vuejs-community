import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-minista',
  description: 'Start a [minista](https://minista.dev/) project with a simple command.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'static-site-generator',
    'ssg',
    'react',
    'vite-plugin',
    'minista',
  ],
  links: {
    github: 'https://github.com/qrac/minista',
    npm: 'https://www.npmjs.com/package/create-minista',
    website: 'https://minista.dev',
  },
  source: {
    github: 'qrac/minista',
    npm: 'create-minista',
  },
  stats: {
    stars: 209,
    downloads: {
      monthly: 632,
      weekly: 44,
    },
  },
})
