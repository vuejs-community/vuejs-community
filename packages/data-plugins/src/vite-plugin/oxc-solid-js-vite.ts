import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oxc-solid-js/vite',
  description: 'Vite plugin for @oxc-solid-js/compiler',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'solid',
    'solidjs',
    'jsx',
    'oxc',
    'rolldown',
  ],
  links: {
    github: 'https://github.com/taskylizard/oxc-solid-js',
    npm: 'https://www.npmjs.com/package/@oxc-solid-js/vite',
    website: 'https://github.com/taskylizard/oxc-solid-js#readme',
  },
  source: {
    github: 'taskylizard/oxc-solid-js',
    npm: '@oxc-solid-js/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
