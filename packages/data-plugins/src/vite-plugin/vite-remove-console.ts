import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-remove-console',
  description: 'Removes specified `console` methods (e.g., `log`, `info`, `warn`, `error`)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'console',
    'remove console',
  ],
  source: {
    github: 'lunaticscode/vite-remove-console',
    npm: 'vite-remove-console',
  },
  links: {
    github: 'https://github.com/lunaticscode/vite-remove-console',
    npm: 'https://www.npmjs.com/package/vite-remove-console',
    website: 'https://github.com/lunaticscode/vite-remove-console#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
