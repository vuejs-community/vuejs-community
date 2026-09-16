import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pack-info',
  description: 'Vite plugin generates an information file or fingerprint of a package after the construction is complete',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'version',
    'pack',
    'vite',
    'plugin',
    'vite-plugin',
    'files',
    'output',
    'packager',
    'bundler',
    'compressing',
  ],
  source: {
    github: 'laibin-wang/vite-plugin-pack-info',
    npm: 'vite-plugin-pack-info',
  },
  links: {
    github: 'https://github.com/laibin-wang/vite-plugin-pack-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-pack-info',
    website: 'https://github.com/laibin-wang/vite-plugin-pack-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
