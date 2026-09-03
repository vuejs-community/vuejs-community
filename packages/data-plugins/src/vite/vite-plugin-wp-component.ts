import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wp-component',
  description: 'Vite plugin + CLI for building WordPress components: bundle with Vite, generate PHP, deploy via FTP, and inject with WordPress shortcodes.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'shortcodes',
    'php',
    'ftp',
    'cli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gabsruff/create-wp-component',
    npm: 'https://www.npmjs.com/package/vite-plugin-wp-component',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 15,
    },
  },
})
