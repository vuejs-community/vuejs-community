import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kern-extra-icons',
  description: 'Vite plugin to load material icons not bundled with @kern-ux/native dynamically',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'KERN',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Dataport/vite-plugin-kern-extra-icons',
    npm: 'vite-plugin-kern-extra-icons',
  },
  links: {
    github: 'https://github.com/Dataport/vite-plugin-kern-extra-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-kern-extra-icons',
  },
  stats: {
    downloads: {
      monthly: 205,
      weekly: 18,
    },
  },
})
