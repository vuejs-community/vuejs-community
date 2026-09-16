import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sass-dts-plus',
  description: 'A plugin that automatically creates a type file when using the css module type-safely.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'activeguild/vite-plugin-sass-dts',
    npm: 'vite-plugin-sass-dts-plus',
  },
  links: {
    github: 'https://github.com/activeguild/vite-plugin-sass-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-sass-dts-plus',
    website: 'https://github.com/activeguild/vite-plugin-sass-dts#readme',
  },
  stats: {
    stars: 133,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
