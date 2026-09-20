import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inject-env',
  description: 'Statically inject environment variables from the dotenv file.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'environment',
    'variable',
    'injection',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-inject-env',
  },
  source: {
    npm: 'rollup-plugin-inject-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 138,
      weekly: 31,
    },
  },
})
