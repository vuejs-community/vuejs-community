import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-mangle',
  description: 'Vite plugin that renames Tailwind CSS classes to short opaque names in production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailwindcss',
    'mangle',
    'minify',
    'css',
  ],
  links: {
    github: 'https://github.com/sileanhell/vite-plugin-tailwind-mangle',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-mangle',
  },
  source: {
    github: 'sileanhell/vite-plugin-tailwind-mangle',
    npm: 'vite-plugin-tailwind-mangle',
  },
})
