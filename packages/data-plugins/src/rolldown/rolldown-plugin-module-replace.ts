import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-module-replace',
  description: 'Replace aliases for bundle dependencies',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rolldown',
    'rolldown-plugin',
    'alias',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/CyanSalt/rolldown-plugin-module-replace',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-module-replace',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
