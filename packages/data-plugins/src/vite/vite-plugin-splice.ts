import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-splice',
  description: 'Trim web fonts to only the glyphs your site actually renders. Vite-integrated, no Python toolchain, no headless browser, watch-aware.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'madenowhere/vite-plugin-splice',
    npm: 'vite-plugin-splice',
  },
  links: {
    github: 'https://github.com/madenowhere/vite-plugin-splice',
    npm: 'https://www.npmjs.com/package/vite-plugin-splice',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 9,
    },
  },
})
