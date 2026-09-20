import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-routes',
  description: 'A vite plugin support setup React Router by JSON config file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-react',
  ],
  links: {
    github: 'https://github.com/jtsang4/vite-plugin-react-routes',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-routes',
    website: 'https://github.com/jtsang4/vite-plugin-react-routes#readme',
  },
  source: {
    github: 'jtsang4/vite-plugin-react-routes',
    npm: 'vite-plugin-react-routes',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
