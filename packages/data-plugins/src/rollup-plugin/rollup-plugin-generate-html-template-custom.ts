import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-html-template-custom',
  description: 'Rollup plugin for automatically injecting a script tag with the final bundle into an html file.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle',
    'injection',
    'rollup',
    'modules',
    'html',
    'template',
  ],
  links: {
    github: 'https://github.com/bengsfort/rollup-plugin-generate-html-template',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-html-template-custom',
    website: 'https://github.com/bengsfort/rollup-plugin-generate-html-template#readme',
  },
  source: {
    github: 'bengsfort/rollup-plugin-generate-html-template',
    npm: 'rollup-plugin-generate-html-template-custom',
  },
  stats: {
    stars: 60,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
