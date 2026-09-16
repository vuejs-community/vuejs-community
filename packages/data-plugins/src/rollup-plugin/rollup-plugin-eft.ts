import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eft',
  description: 'eft loader for rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'ef.js',
    'template',
    'rollup',
    'eft',
    'efml',
    'loader',
    'rollup-plugin',
  ],
  source: {
    github: 'TheNeuronProject/rollup-plugin-eft',
    npm: 'rollup-plugin-eft',
  },
  links: {
    github: 'https://github.com/TheNeuronProject/rollup-plugin-eft',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eft',
    website: 'https://github.com/TheNeuronProject/rollup-plugin-eft#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 61,
      weekly: 8,
    },
  },
})
