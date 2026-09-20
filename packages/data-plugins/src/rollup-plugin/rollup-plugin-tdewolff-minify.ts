import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tdewolff-minify',
  description: 'Rollup plugin to minify generated es bundle using tdewolff minifier',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'minify',
  ],
  links: {
    github: 'https://github.com/dotcore64/rollup-plugin-tdewolff-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tdewolff-minify',
    website: 'https://github.com/dotcore64/rollup-plugin-tdewolff-minify#readme',
  },
  source: {
    github: 'dotcore64/rollup-plugin-tdewolff-minify',
    npm: 'rollup-plugin-tdewolff-minify',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
