import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-html-template-custom',
  description: 'Rollup plugin for automatically injecting a script tag with the final bundle into an html file.',
  version: '1.6.5',
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
  links: {
    github: 'https://github.com/bengsfort/rollup-plugin-generate-html-template',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-html-template-custom',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
