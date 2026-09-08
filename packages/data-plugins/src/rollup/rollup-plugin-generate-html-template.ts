import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-html-template',
  description: 'Rollup plugin for automatically injecting a script tag with the final bundle into an html file.',
  icon: 'logos:rollupjs',
  version: '1.7.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'bundle',
    'injection',
    'rollup',
    'modules',
    'html',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'bengsfort/rollup-plugin-generate-html-template',
    npm: 'rollup-plugin-generate-html-template',
  },
  links: {
    github: 'https://github.com/bengsfort/rollup-plugin-generate-html-template',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-html-template',
  },
  stats: {
    downloads: {
      monthly: 28784,
      weekly: 8012,
    },
  },
})
