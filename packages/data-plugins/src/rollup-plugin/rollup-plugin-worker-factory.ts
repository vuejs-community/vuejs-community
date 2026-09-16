import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-worker-factory',
  description: 'Bundle web workers that work in nodejs and the browser, without a separate build target.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'brandonocasey/rollup-plugin-worker-factory',
    npm: 'rollup-plugin-worker-factory',
  },
  links: {
    github: 'https://github.com/brandonocasey/rollup-plugin-worker-factory',
    npm: 'https://www.npmjs.com/package/rollup-plugin-worker-factory',
    website: 'https://github.com/brandonocasey/rollup-plugin-worker-factory',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 19257,
      weekly: 4939,
    },
  },
})
