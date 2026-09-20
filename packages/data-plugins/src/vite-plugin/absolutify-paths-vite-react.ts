import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'absolutify-paths-vite-react',
  description: 'Vite plugin to transform relative paths to absolute for WordPress theme development with HMR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'wordpress',
    'hmr',
    'paths',
    'absolute-paths',
  ],
  links: {
    github: 'https://github.com/saroroce/absolutify-paths-vite-react',
    npm: 'https://www.npmjs.com/package/absolutify-paths-vite-react',
    website: 'https://github.com/saroroce/absolutify-paths-vite-react#readme',
  },
  source: {
    github: 'saroroce/absolutify-paths-vite-react',
    npm: 'absolutify-paths-vite-react',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 39,
      weekly: 2,
    },
  },
})
