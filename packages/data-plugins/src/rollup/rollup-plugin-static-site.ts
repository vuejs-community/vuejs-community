import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-static-site',
  description: 'generate html out of thin air (or with any templating engine) for your static site bundle',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'html',
    'rollup',
    'rollup-plugin',
    'static',
    'static-site',
    'site',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-static-site',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 9,
    },
  },
})
