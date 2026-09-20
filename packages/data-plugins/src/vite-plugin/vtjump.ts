import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vtjump',
  description: 'A vite plugin for vtjump',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'jump',
    'code-navigation',
  ],
  links: {
    github: 'https://github.com/yourusername/vtjump',
    npm: 'https://www.npmjs.com/package/vtjump',
    website: 'https://github.com/yourusername/vtjump#readme',
  },
  source: {
    github: 'yourusername/vtjump',
    npm: 'vtjump',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 54,
      weekly: 2,
    },
  },
})
