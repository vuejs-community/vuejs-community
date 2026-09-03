import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-redirects',
  description: 'A lightweight Vite plugin that adds redirect support for dev and preview servers, and generates static HTML redirect pages on build. Compatible with Vite and VitePress.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'redirect',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dragomano/vite-plugin-redirects',
    npm: 'https://www.npmjs.com/package/vite-plugin-redirects',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
