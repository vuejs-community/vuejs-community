import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-compression',
  description: 'Compress dist to `zip`, `tar`, `taz`.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'compression',
    'dist',
  ],
  source: {
    github: 'KeJunMao/unplugin-compression',
    npm: 'unplugin-compression',
  },
  links: {
    github: 'https://github.com/KeJunMao/unplugin-compression',
    npm: 'https://www.npmjs.com/package/unplugin-compression',
    website: 'https://github.com/KeJunMao/unplugin-compression',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 51,
      weekly: 7,
    },
  },
})
