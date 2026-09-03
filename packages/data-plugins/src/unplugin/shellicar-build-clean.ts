import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@shellicar/build-clean',
  description: 'Build plugin that automatically cleans unused files from output directories.',
  version: '1.3.6',
  category: 'plugin',
  tags: [
    'esbuild',
    'tsup',
    'build',
    'clean',
    'plugin',
    'unplugin',
    'rolldown',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/shellicar/ecosystem',
    npm: 'https://www.npmjs.com/package/@shellicar/build-clean',
  },
  stats: {
    downloads: {
      monthly: 653,
      weekly: 141,
    },
  },
})
