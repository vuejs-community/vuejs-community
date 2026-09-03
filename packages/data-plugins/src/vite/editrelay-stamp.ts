import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'editrelay-stamp',
  description: 'Build plugin that marks a site\'s editable elements so EditRelay can edit them in place. Does nothing unless enabled.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'astro',
    'visual-editing',
    'cms',
    'editrelay',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/EditRelay/webapp',
    npm: 'https://www.npmjs.com/package/editrelay-stamp',
  },
  stats: {
    downloads: {
      monthly: 142,
      weekly: 142,
    },
  },
})
