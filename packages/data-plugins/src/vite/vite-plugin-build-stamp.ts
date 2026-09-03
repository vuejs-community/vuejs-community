import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-stamp',
  description: 'Vite plugin that stamps build information (time, version, git commit, mode) into index.html as <meta> tags',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'meta',
    'stamp',
    'version',
    'git',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LouieJiang/vite-plugin-build-stamp',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-stamp',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
