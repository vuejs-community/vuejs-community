import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sergeycoding/vite-plugin-sass-dts',
  description: 'A plugin that automatically creates a type file when using the css module type-safely.',
  version: '1.3.35',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'scss',
    'classnames',
    'clsx',
    'typescript',
    'generics',
    'cssmodules',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sergeycoding/vite-plugin-sass-dts',
    npm: 'https://www.npmjs.com/package/@sergeycoding/vite-plugin-sass-dts',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
