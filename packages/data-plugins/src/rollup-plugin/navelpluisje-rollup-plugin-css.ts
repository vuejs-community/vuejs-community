import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@navelpluisje/rollup-plugin-css',
  description: 'Currently this plugin does nothing more then passing the content of the css file. There will be a chance a postprocessor will be added. Bu right now it does wath I wanted it to do for a project of mine.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
  ],
  source: {
    npm: '@navelpluisje/rollup-plugin-css',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@navelpluisje/rollup-plugin-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
