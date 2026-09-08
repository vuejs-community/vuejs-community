import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-argv',
  description: 'Powerful CLI integration for Vite hooks. Run shell commands before/after serve/build via command-line arguments.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-argv',
  },
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
