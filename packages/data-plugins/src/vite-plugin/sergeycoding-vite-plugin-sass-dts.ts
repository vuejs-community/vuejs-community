import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sergeycoding/vite-plugin-sass-dts',
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
    github: 'sergeycoding/vite-plugin-sass-dts',
    npm: '@sergeycoding/vite-plugin-sass-dts',
  },
  links: {
    github: 'https://github.com/sergeycoding/vite-plugin-sass-dts',
    npm: 'https://www.npmjs.com/package/@sergeycoding/vite-plugin-sass-dts',
    website: 'https://github.com/sergeycoding/vite-plugin-sass-dts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
