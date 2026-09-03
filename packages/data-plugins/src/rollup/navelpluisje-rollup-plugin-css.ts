import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@navelpluisje/rollup-plugin-css',
  description: 'Currently this plugin does nothing more then passing the content of the css file. There will be a chance a postprocessor will be added. Bu right now it does wath I wanted it to do for a project of mine.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@navelpluisje/rollup-plugin-css',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
