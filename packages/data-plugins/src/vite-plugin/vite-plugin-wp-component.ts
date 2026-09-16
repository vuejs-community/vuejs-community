import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wp-component',
  description: 'Vite plugin + CLI for building WordPress components: bundle with Vite, generate PHP, deploy via FTP, and inject with WordPress shortcodes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'shortcodes',
    'php',
    'ftp',
    'cli',
  ],
  source: {
    github: 'gabsruff/create-wp-component',
    npm: 'vite-plugin-wp-component',
  },
  links: {
    github: 'https://github.com/gabsruff/create-wp-component',
    npm: 'https://www.npmjs.com/package/vite-plugin-wp-component',
    website: 'https://github.com/gabsruff/create-wp-component.git#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 2,
    },
  },
})
