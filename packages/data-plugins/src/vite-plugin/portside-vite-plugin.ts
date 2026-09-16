import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'portside-vite-plugin',
  description: 'Vite plugin powering Portside extension builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browser-extension',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: '0xSalik/portside',
    npm: 'portside-vite-plugin',
  },
  links: {
    github: 'https://github.com/0xSalik/portside',
    npm: 'https://www.npmjs.com/package/portside-vite-plugin',
    website: 'https://github.com/0xSalik/portside#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 324,
      weekly: 324,
    },
  },
})
