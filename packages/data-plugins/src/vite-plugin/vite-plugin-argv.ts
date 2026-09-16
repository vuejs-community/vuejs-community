import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-argv',
  description: 'Powerful CLI integration for Vite hooks. Run shell commands before/after serve/build via command-line arguments.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cli',
    'argv',
    'hooks',
    'build',
    'serve',
  ],
  source: {
    npm: 'vite-plugin-argv',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-argv',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
