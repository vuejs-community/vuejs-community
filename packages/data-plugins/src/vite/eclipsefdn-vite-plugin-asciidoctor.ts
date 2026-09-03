import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@eclipsefdn/vite-plugin-asciidoctor',
  description: 'This vite plugin allows you to use Asciidoctor.js to convert AsciiDoc files into HTML, making it easy to integrate AsciiDoc content into your Vite projects.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'asciidoctor',
    'asciidoc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@eclipsefdn/vite-plugin-asciidoctor',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 7,
    },
  },
})
