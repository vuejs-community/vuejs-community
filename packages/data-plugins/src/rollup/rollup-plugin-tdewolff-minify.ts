import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tdewolff-minify',
  description: 'Rollup plugin to minify generated es bundle using tdewolff minifier',
  icon: 'logos:rollupjs',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'dotcore64/rollup-plugin-tdewolff-minify',
    npm: 'rollup-plugin-tdewolff-minify',
  },
  links: {
    github: 'https://github.com/dotcore64/rollup-plugin-tdewolff-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tdewolff-minify',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 3,
    },
  },
})
