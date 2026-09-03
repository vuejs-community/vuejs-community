import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-argv',
  description: 'Powerful CLI integration for Vite hooks. Run shell commands before/after serve/build via command-line arguments.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cli',
    'argv',
    'hooks',
    'build',
    'serve',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-argv',
  },
  stats: {
    downloads: {
      monthly: 1,
      weekly: 0,
    },
  },
})
