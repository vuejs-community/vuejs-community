import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sass-dts',
  description: 'A plugin that automatically creates a type file when using the css module type-safely.',
  icon: 'logos:vite-icon',
  version: '1.3.39',
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
  source: {
    github: 'activeguild/vite-plugin-sass-dts',
    npm: 'vite-plugin-sass-dts',
  },
  links: {
    github: 'https://github.com/activeguild/vite-plugin-sass-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-sass-dts',
  },
  stats: {
    downloads: {
      monthly: 150043,
      weekly: 34100,
    },
  },
})
