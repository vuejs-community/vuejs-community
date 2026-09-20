import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ajv-compile',
  description: 'Vite plugin to compile AJV validators as virtual modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ajv',
    'compile',
    'vite',
    'vite-plugin',
    'plugin',
    'json',
    'schema',
    'validator',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-ajv-compile',
    website: 'https://gitlab.com/hperchec/vite-plugin-ajv-compile',
  },
  source: {
    npm: 'vite-plugin-ajv-compile',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
