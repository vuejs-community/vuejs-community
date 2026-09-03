import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nexus-cms/compiler',
  description: 'Build-time transform for Nexus CMS: auto ids, directive handling, collection detection, and cms-schema.json emission.',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'cms',
    'nextjs',
    'babel',
    'unplugin',
    'nexus-cms',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/forged-tools/cms',
    npm: 'https://www.npmjs.com/package/@nexus-cms/compiler',
  },
  stats: {
    downloads: {
      monthly: 535,
      weekly: 20,
    },
  },
})
