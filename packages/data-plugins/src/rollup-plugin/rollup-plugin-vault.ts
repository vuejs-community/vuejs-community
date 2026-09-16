import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-vault',
  description: 'Encrypts text to be decrypted at runtime',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'corrodedHash/rollup-plugin-vault',
    npm: 'rollup-plugin-vault',
  },
  links: {
    github: 'https://github.com/corrodedHash/rollup-plugin-vault',
    npm: 'https://www.npmjs.com/package/rollup-plugin-vault',
    website: 'https://github.com/corrodedHash/rollup-plugin-vault#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
