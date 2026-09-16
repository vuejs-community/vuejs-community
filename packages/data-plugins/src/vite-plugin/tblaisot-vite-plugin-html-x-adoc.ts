import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tblaisot/vite-plugin-html-x-adoc',
  description: 'A Vite plugin that processes AsciiDoc files and injects them into HTML files with full Hot Module Replacement (HMR) support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'asciidoc',
    'asciidoctor',
    'html',
    'hmr',
    'hot-module-replacement',
  ],
  source: {
    github: 'tblaisot/vite-plugin-html-x-adoc',
    npm: '@tblaisot/vite-plugin-html-x-adoc',
  },
  links: {
    github: 'https://github.com/tblaisot/vite-plugin-html-x-adoc',
    npm: 'https://www.npmjs.com/package/@tblaisot/vite-plugin-html-x-adoc',
    website: 'https://github.com/tblaisot/vite-plugin-html-x-adoc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
