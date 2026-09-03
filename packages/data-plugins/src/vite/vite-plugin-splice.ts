import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-splice',
  description: 'Trim web fonts to only the glyphs your site actually renders. Vite-integrated, no Python toolchain, no headless browser, watch-aware.',
  version: '0.1.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/madenowhere/vite-plugin-splice',
    npm: 'https://www.npmjs.com/package/vite-plugin-splice',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
