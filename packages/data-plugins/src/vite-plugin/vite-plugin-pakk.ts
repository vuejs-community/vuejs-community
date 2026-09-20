import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pakk',
  description: 'Automatically fills out your package.json for both local and published version',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'javascript',
    'js',
    'managed-by-autotool',
    'ts',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AlexAegis/js-tooling',
    npm: 'https://www.npmjs.com/package/vite-plugin-pakk',
    website: 'https://www.github.com/AlexAegis/js-tooling#readme',
  },
  source: {
    github: 'AlexAegis/js-tooling',
    npm: 'vite-plugin-pakk',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 81,
      weekly: 7,
    },
  },
})
