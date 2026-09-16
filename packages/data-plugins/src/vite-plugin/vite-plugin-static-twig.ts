import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-twig',
  description: 'Vite plugin that renders Twig templates into static HTML pages, with dev-server HMR and multi-locale support.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'twig',
    'static-site',
    'html',
    'i18n',
  ],
  source: {
    github: 'michaeldk/vite-plugin-static-twig',
    npm: 'vite-plugin-static-twig',
  },
  links: {
    github: 'https://github.com/michaeldk/vite-plugin-static-twig',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-twig',
    website: 'https://github.com/michaeldk/vite-plugin-static-twig#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 1,
    },
  },
})
