import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'minwind',
  description: 'Build-time CSS name compression for Tailwind and CSS Modules: renames and consolidates classes across JS/TS, SFC, HTML, and CSS, with optional custom-property aliases. Vite and webpack/rspack plugins plus a post-build CLI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'jonkwheeler/minwind',
    npm: 'minwind',
  },
  links: {
    github: 'https://github.com/jonkwheeler/minwind',
    npm: 'https://www.npmjs.com/package/minwind',
    website: 'https://github.com/jonkwheeler/minwind#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 264,
      weekly: 17,
    },
  },
})
