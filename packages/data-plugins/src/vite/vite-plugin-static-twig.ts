import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-twig',
  description: 'Vite plugin that renders Twig templates into static HTML pages, with dev-server HMR and multi-locale support.',
  version: '1.4.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'twig',
    'static-site',
    'html',
    'i18n',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/michaeldk/vite-plugin-static-twig',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-twig',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 1,
    },
  },
})
