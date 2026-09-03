import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-build-info',
  description: 'Inject stable Git and build metadata into Vite build outputs.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'build-info',
    'git-info',
    'version',
    'metadata',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lei-mu/vite-plugin-git-build-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-build-info',
  },
  stats: {
    downloads: {
      monthly: 307,
      weekly: 21,
    },
  },
})
