import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ts-runtime-checks',
  description: 'A typescript transformer which automatically generates validation code from your types.',
  version: '0.6.3',
  category: 'plugin',
  tags: [
    'typescript',
    'typecheck',
    'runtime',
    'check',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/GoogleFeud/ts-runtime-checks',
    npm: 'https://www.npmjs.com/package/ts-runtime-checks',
  },
  stats: {
    downloads: {
      monthly: 1460,
      weekly: 318,
    },
  },
})
