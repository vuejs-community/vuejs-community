import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'absolutify-paths-vite-react',
  description: 'Vite plugin to transform relative paths to absolute for WordPress theme development with HMR support',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'wordpress',
    'hmr',
    'paths',
    'absolute-paths',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/saroroce/absolutify-paths-vite-react',
    npm: 'https://www.npmjs.com/package/absolutify-paths-vite-react',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 17,
    },
  },
})
