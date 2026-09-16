import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'storybook-vue-addon',
  description: 'Storybook stories in native Vue format',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'storybook',
    'storybook-addon',
    'unplugin',
    'vite',
    'vue',
    'webpack',
  ],
  source: {
    github: 'tobiasdiez/storybook-vue-addon',
    npm: 'storybook-vue-addon',
  },
  links: {
    github: 'https://github.com/tobiasdiez/storybook-vue-addon',
    npm: 'https://www.npmjs.com/package/storybook-vue-addon',
    website: 'https://github.com/tobiasdiez/storybook-vue-addon#readme',
  },
  stats: {
    stars: 62,
    downloads: {
      monthly: 5127,
      weekly: 1373,
    },
  },
})
