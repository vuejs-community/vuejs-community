import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sass-dts-plus',
  description: 'A plugin that automatically creates a type file when using the css module type-safely.',
  version: '1.3.7',
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
    github: 'https://github.com/activeguild/vite-plugin-sass-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-sass-dts-plus',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
