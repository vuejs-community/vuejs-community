import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'editrelay-stamp',
  description: 'Build plugin that marks a site\'s editable elements so EditRelay can edit them in place. Does nothing unless enabled.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'astro',
    'visual-editing',
    'cms',
    'editrelay',
  ],
  source: {
    github: 'EditRelay/webapp',
    npm: 'editrelay-stamp',
  },
  links: {
    github: 'https://github.com/EditRelay/webapp',
    npm: 'https://www.npmjs.com/package/editrelay-stamp',
    website: 'https://editrelay.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 152,
      weekly: 3,
    },
  },
})
