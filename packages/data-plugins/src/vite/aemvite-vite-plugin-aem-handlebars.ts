import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-handlebars',
  description: 'Vite plugin that precompiles `.template.hbs` files into Handlebars runtime functions and stubs Storybook/non-template `.hbs` partials, mirroring webpack handlebars-loader + IgnorePlugin for AEM clientlib builds.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'aem',
    'clientlib',
    'vite',
    'vite-plugin',
    'handlebars',
    'handlebars-loader',
    'precompile',
    'templates',
    'storybook',
    'aemvite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-handlebars',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
