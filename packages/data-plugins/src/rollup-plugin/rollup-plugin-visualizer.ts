import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-visualizer',
  description: 'Visualize and analyze your bundle to quickly see which modules are taking up space.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'visualizer',
    'network',
    'treemap',
    'sunburst',
    'diagram',
  ],
  source: {
    github: 'btd/rollup-plugin-visualizer',
    npm: 'rollup-plugin-visualizer',
  },
  links: {
    github: 'https://github.com/btd/rollup-plugin-visualizer',
    npm: 'https://www.npmjs.com/package/rollup-plugin-visualizer',
    website: 'https://github.com/btd/rollup-plugin-visualizer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27835941,
      weekly: 5556074,
    },
  },
})
