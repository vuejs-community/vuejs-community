import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'storybook-vue-csf-addon',
  description: 'A Storybook Addon to write Storybook\'s stories using Vue SFC syntax and automatically convert them to Storybook CSF',
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
    'storybook',
    'vue',
    'vue3',
  ],
  links: {
    github: 'https://github.com/floroz/storybook-vue-csf-addon',
    npm: 'https://www.npmjs.com/package/storybook-vue-csf-addon',
    website: 'https://github.com/floroz/storybook-vue-csf-addon#readme',
  },
  source: {
    github: 'floroz/storybook-vue-csf-addon',
    npm: 'storybook-vue-csf-addon',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
