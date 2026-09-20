import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wistia/vite-plugin-ruby',
  description: 'Fork of vite-plugin-ruby to work with vite-rolldown',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plugin',
    'rails',
    'ruby',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  links: {
    github: 'https://github.com/wistia/vite_ruby',
    npm: 'https://www.npmjs.com/package/@wistia/vite-plugin-ruby',
    website: 'https://github.com/wistia/vite_ruby/blob/main/vite-plugin-ruby',
  },
  source: {
    github: 'wistia/vite_ruby',
    npm: '@wistia/vite-plugin-ruby',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 345,
      weekly: 21,
    },
  },
})
