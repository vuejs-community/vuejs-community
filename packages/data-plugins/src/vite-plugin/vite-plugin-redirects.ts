import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-redirects',
  description: 'A lightweight Vite plugin that adds redirect support for dev and preview servers, and generates static HTML redirect pages on build. Compatible with Vite and VitePress.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'redirect',
  ],
  source: {
    github: 'dragomano/vite-plugin-redirects',
    npm: 'vite-plugin-redirects',
  },
  links: {
    github: 'https://github.com/dragomano/vite-plugin-redirects',
    npm: 'https://www.npmjs.com/package/vite-plugin-redirects',
    website: 'https://github.com/dragomano/vite-plugin-redirects',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
