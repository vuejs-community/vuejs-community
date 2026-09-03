import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'minwind',
  description: 'Build-time CSS name compression for Tailwind and CSS Modules: renames and consolidates classes across JS/TS, SFC, HTML, and CSS, with optional custom-property aliases. Vite and webpack/rspack plugins plus a post-build CLI.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'tailwind',
    'tailwindcss',
    'classname',
    'classnames',
    'minify',
    'compression',
    'vite',
    'vite-plugin',
    'css',
    'css-modules',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jonkwheeler/minwind',
    npm: 'https://www.npmjs.com/package/minwind',
  },
  stats: {
    downloads: {
      monthly: 653,
      weekly: 42,
    },
  },
})
