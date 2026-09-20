import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-inspector-plugin',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/varHarrie/vue-inspector-plugin',
    npm: 'https://www.npmjs.com/package/vue-inspector-plugin',
    website: 'https://github.com/varHarrie/vue-inspector-plugin#readme',
  },
  source: {
    github: 'varHarrie/vue-inspector-plugin',
    npm: 'vue-inspector-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 93,
      weekly: 36,
    },
  },
})
