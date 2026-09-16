import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nexus-cms/compiler',
  description: 'Build-time transform for Nexus CMS: auto ids, directive handling, collection detection, and cms-schema.json emission.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'cms',
    'nextjs',
    'babel',
    'unplugin',
    'nexus-cms',
  ],
  source: {
    github: 'forged-tools/cms',
    npm: '@nexus-cms/compiler',
  },
  links: {
    github: 'https://github.com/forged-tools/cms',
    npm: 'https://www.npmjs.com/package/@nexus-cms/compiler',
    website: 'https://nexus.mkiteg.com/docs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 314,
      weekly: 7,
    },
  },
})
