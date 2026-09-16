import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-fluent-vue',
  description: 'unplugin for fluent-vue. Adds support for custom blocks in Vue SFC and external ftl files.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vue',
    'fluent-vue',
    'ftl',
    'fluent',
    'webpack',
    'vite',
    'i18n',
    'plural',
  ],
  source: {
    github: 'fluent-vue/unplugin-fluent-vue',
    npm: 'unplugin-fluent-vue',
  },
  links: {
    github: 'https://github.com/fluent-vue/unplugin-fluent-vue',
    npm: 'https://www.npmjs.com/package/unplugin-fluent-vue',
    website: 'https://fluent-vue.demivan.me/integrations/unplugin.html',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 2092,
      weekly: 337,
    },
  },
})
