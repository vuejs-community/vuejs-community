import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tailwind-prefixer',
  description: 'Prefix Tailwind classes in your source code at build time using any bundler compatible with Unplugin.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'tailwindcss',
    'prefix',
    'plugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/dantxal/unplugin-tailwind-prefixer',
    npm: 'https://www.npmjs.com/package/unplugin-tailwind-prefixer',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
