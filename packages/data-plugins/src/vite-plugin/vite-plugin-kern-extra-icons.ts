import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kern-extra-icons',
  description: 'Vite plugin to load material icons not bundled with @kern-ux/native dynamically',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'KERN',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Dataport/vite-plugin-kern-extra-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-kern-extra-icons',
    website: 'https://github.com/Dataport/vite-plugin-kern-extra-icons#readme',
  },
  source: {
    github: 'Dataport/vite-plugin-kern-extra-icons',
    npm: 'vite-plugin-kern-extra-icons',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 223,
      weekly: 59,
    },
  },
})
