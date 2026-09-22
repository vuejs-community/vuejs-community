import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-html',
  description: 'Creates HTML files to serve Rollup bundles',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'html',
    'template',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-html',
    website: 'https://github.com/rollup/plugins/tree/master/packages/html#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-html',
  },
})
