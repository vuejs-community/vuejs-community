import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ethereal-ui/vite-plugin-react-preview',
  description: 'Quickly preview React components with Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
  ],
  links: {
    github: 'https://github.com/ethereal-ui/ethereal-ui',
    npm: 'https://www.npmjs.com/package/@ethereal-ui/vite-plugin-react-preview',
    website: 'https://github.com/ethereal-ui/ethereal-ui#readme',
  },
  source: {
    github: 'ethereal-ui/ethereal-ui',
    npm: '@ethereal-ui/vite-plugin-react-preview',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
