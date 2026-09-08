import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-worker-factory',
  description: 'Bundle web workers that work in nodejs and the browser, without a separate build target.',
  icon: 'logos:rollupjs',
  version: '0.5.7',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'brandonocasey/rollup-plugin-worker-factory',
    npm: 'rollup-plugin-worker-factory',
  },
  links: {
    github: 'https://github.com/brandonocasey/rollup-plugin-worker-factory',
    npm: 'https://www.npmjs.com/package/rollup-plugin-worker-factory',
  },
  stats: {
    downloads: {
      monthly: 16987,
      weekly: 5008,
    },
  },
})
