import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tblaisot/vite-plugin-html-x-adoc',
  description: 'A Vite plugin that processes AsciiDoc files and injects them into HTML files with full Hot Module Replacement (HMR) support',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'asciidoc',
    'asciidoctor',
    'html',
    'hmr',
    'hot-module-replacement',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tblaisot/vite-plugin-html-x-adoc',
    npm: 'https://www.npmjs.com/package/@tblaisot/vite-plugin-html-x-adoc',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
