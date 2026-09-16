import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-tsconfig-paths',
  description: '> A Vite plugin to resolve paths from tsconfig.json in style imports(less, sass, scss, stylus, css)',
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
    'less',
    'stylus',
    'typescript',
    'tsconfig',
    'paths',
    'alias',
  ],
  source: {
    github: 'WangYuLue/vite-plugin-style-tsconfig-paths',
    npm: 'vite-plugin-style-tsconfig-paths',
  },
  links: {
    github: 'https://github.com/WangYuLue/vite-plugin-style-tsconfig-paths',
    npm: 'https://www.npmjs.com/package/vite-plugin-style-tsconfig-paths',
    website: 'https://github.com/WangYuLue/vite-plugin-style-tsconfig-paths#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
