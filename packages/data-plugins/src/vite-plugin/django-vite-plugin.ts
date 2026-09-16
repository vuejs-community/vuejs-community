import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'django-vite-plugin',
  description: 'Django plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'django',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'protibimbok/django-vite-plugin',
    npm: 'django-vite-plugin',
  },
  links: {
    github: 'https://github.com/protibimbok/django-vite-plugin',
    npm: 'https://www.npmjs.com/package/django-vite-plugin',
    website: 'https://github.com/protibimbok/django-vite-plugin#readme',
  },
  stats: {
    stars: 154,
    downloads: {
      monthly: 3348,
      weekly: 548,
    },
  },
})
