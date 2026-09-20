import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-splice',
  description: 'Trim web fonts to only the glyphs your site actually renders. Vite-integrated, no Python toolchain, no headless browser, watch-aware.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'font-subset',
    'subset-font',
    'webfont',
    'fontwhittle',
    'glyphhanger',
    'harfbuzz',
    'woff2',
    'performance',
  ],
  links: {
    github: 'https://github.com/madenowhere/vite-plugin-splice',
    npm: 'https://www.npmjs.com/package/vite-plugin-splice',
    website: 'https://github.com/madenowhere/vite-plugin-splice#readme',
  },
  source: {
    github: 'madenowhere/vite-plugin-splice',
    npm: 'vite-plugin-splice',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
