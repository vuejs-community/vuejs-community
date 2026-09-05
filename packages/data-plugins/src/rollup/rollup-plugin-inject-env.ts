import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inject-env',
  description: 'Statically inject environment variables from the dotenv file.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'environment',
    'variable',
    'injection',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inject-env',
  },
  stats: {
    downloads: {
      monthly: 188,
      weekly: 45,
    },
  },
})
