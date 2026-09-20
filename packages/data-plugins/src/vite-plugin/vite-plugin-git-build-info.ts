import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-build-info',
  description: 'Inject stable Git and build metadata into Vite build outputs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'build-info',
    'git-info',
    'version',
    'metadata',
  ],
  links: {
    github: 'https://github.com/lei-mu/vite-plugin-git-build-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-build-info',
    website: 'https://github.com/lei-mu/vite-plugin-git-build-info#readme',
  },
  source: {
    github: 'lei-mu/vite-plugin-git-build-info',
    npm: 'vite-plugin-git-build-info',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 324,
      weekly: 9,
    },
  },
})
