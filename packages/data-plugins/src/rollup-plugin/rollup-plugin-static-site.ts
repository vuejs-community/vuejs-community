import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-static-site',
  description: 'generate html out of thin air (or with any templating engine) for your static site bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'html',
    'rollup',
    'rollup-plugin',
    'static',
    'static-site',
    'site',
    'template',
  ],
  source: {
    npm: 'rollup-plugin-static-site',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-static-site',
    website: 'https://gitlab.com/thekelvinliu/rollup-plugin-static-site#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 70,
      weekly: 14,
    },
  },
})
