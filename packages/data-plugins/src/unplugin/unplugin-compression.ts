import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-compression',
  description: 'Compress dist to `zip`, `tar`, `taz`.',
  icon: 'icon:dark-unplugin',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'unplugin',
    'compression',
    'dist',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'KeJunMao/unplugin-compression',
    npm: 'unplugin-compression',
  },
  links: {
    github: 'https://github.com/KeJunMao/unplugin-compression',
    npm: 'https://www.npmjs.com/package/unplugin-compression',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 13,
    },
  },
})
