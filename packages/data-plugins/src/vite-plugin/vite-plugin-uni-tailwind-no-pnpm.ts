import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-tailwind-no-pnpm',
  description: '支持在 uni-app 中使用 TailwindCSS@3 原有语法开发',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'transform',
    'tailwind',
    'tailwindcss',
    'vite-plugin',
    'uni-app',
    'uniapp',
    'miniprogram',
    'mini-program',
  ],
  links: {
    github: 'https://github.com/uni-helper/vite-plugin-uni-tailwind',
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-tailwind-no-pnpm',
    website: 'https://github.com/uni-helper/vite-plugin-uni-tailwind#readme',
  },
  source: {
    github: 'uni-helper/vite-plugin-uni-tailwind',
    npm: 'vite-plugin-uni-tailwind-no-pnpm',
  },
  stats: {
    stars: 45,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
