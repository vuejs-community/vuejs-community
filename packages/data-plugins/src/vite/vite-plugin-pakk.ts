import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pakk',
  description: 'Automatically fills out your package.json for both local and published version',
  icon: 'logos:vite-icon',
  version: '0.14.1',
  category: 'plugin',
  tags: [
    'javascript',
    'js',
    'managed-by-autotool',
    'ts',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'AlexAegis/js-tooling',
    npm: 'vite-plugin-pakk',
  },
  links: {
    github: 'https://github.com/AlexAegis/js-tooling',
    npm: 'https://www.npmjs.com/package/vite-plugin-pakk',
  },
  stats: {
    downloads: {
      monthly: 165,
      weekly: 42,
    },
  },
})
