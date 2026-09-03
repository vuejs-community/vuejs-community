import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ogs-gmbh/rolldown-plugin-assets',
  description: 'A Rolldown plugin that emits static assets (files and directories) to the output directory during the build process.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'assets',
    'build',
    'bundler',
    'plugin',
    'rolldown',
    'rolldown-plugin',
    'static-assets',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/OGS-GmbH/rolldown-plugin-assets',
    npm: 'https://www.npmjs.com/package/@ogs-gmbh/rolldown-plugin-assets',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 10,
    },
  },
})
