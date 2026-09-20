import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'webfunny-vite-plugin',
  description: 'Vite plugin for uploading source maps to Webfunny monitoring system',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'upload',
    'webfunny',
    'monitoring',
  ],
  links: {
    github: 'https://github.com/a597873885/webfunny-vite-plugin',
    npm: 'https://www.npmjs.com/package/webfunny-vite-plugin',
    website: 'https://github.com/a597873885/webfunny-vite-plugin#readme',
  },
  source: {
    github: 'a597873885/webfunny-vite-plugin',
    npm: 'webfunny-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 219,
      weekly: 10,
    },
  },
})
