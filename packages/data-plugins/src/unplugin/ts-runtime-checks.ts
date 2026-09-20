import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ts-runtime-checks',
  description: 'A typescript transformer which automatically generates validation code from your types.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'typescript',
    'typecheck',
    'runtime',
    'check',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/GoogleFeud/ts-runtime-checks',
    npm: 'https://www.npmjs.com/package/ts-runtime-checks',
    website: 'https://github.com/GoogleFeud/ts-runtime-checks#readme',
  },
  source: {
    github: 'GoogleFeud/ts-runtime-checks',
    npm: 'ts-runtime-checks',
  },
  stats: {
    stars: 406,
    downloads: {
      monthly: 1819,
      weekly: 525,
    },
  },
})
