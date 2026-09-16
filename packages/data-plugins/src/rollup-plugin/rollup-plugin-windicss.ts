import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-windicss',
  description: 'Windi CSS for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'windicss',
    'tailwindcss',
  ],
  source: {
    github: 'antfu/vite-plugin-windicss',
    npm: 'rollup-plugin-windicss',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-windicss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-windicss',
    website: 'https://github.com/antfu/vite-plugin-windicss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 189,
      weekly: 23,
    },
  },
})
