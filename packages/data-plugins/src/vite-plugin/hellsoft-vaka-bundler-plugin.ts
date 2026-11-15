import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hellsoft/vaka-bundler-plugin',
  description: 'Upload source maps to Vaka from Vite, Rollup and webpack builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vaka',
    'sourcemaps',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/ErikHellman/vaka',
    npm: 'https://www.npmjs.com/package/@hellsoft/vaka-bundler-plugin',
    website: 'https://github.com/ErikHellman/vaka#readme',
  },
  source: {
    github: 'ErikHellman/vaka',
    npm: '@hellsoft/vaka-bundler-plugin',
  },
})
