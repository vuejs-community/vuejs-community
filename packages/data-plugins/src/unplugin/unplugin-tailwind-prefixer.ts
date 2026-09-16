import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tailwind-prefixer',
  description: 'Prefix Tailwind classes in your source code at build time using any bundler compatible with Unplugin.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'dantxal/unplugin-tailwind-prefixer',
    npm: 'unplugin-tailwind-prefixer',
  },
  links: {
    github: 'https://github.com/dantxal/unplugin-tailwind-prefixer',
    npm: 'https://www.npmjs.com/package/unplugin-tailwind-prefixer',
    website: 'https://github.com/dantxal/unplugin-tailwind-prefixer#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
