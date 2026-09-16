import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@shellicar/build-clean',
  description: 'Build plugin that automatically cleans unused files from output directories.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'esbuild',
    'tsup',
    'build',
    'clean',
    'plugin',
    'unplugin',
    'rolldown',
  ],
  source: {
    github: 'shellicar/ecosystem',
    npm: '@shellicar/build-clean',
  },
  links: {
    github: 'https://github.com/shellicar/ecosystem',
    npm: 'https://www.npmjs.com/package/@shellicar/build-clean',
    website: 'https://github.com/shellicar/ecosystem/tree/main/packages/build-clean#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 476,
      weekly: 78,
    },
  },
})
