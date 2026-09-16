import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-handlebars',
  description: 'Vite plugin that precompiles `.template.hbs` files into Handlebars runtime functions and stubs Storybook/non-template `.hbs` partials, mirroring webpack handlebars-loader + IgnorePlugin for AEM clientlib builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aem',
    'aemvite',
    'clientlib',
    'handlebars',
    'handlebars-loader',
    'precompile',
    'storybook',
    'templates',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'LucaNerlich/aem-vite',
    npm: '@aemvite/vite-plugin-aem-handlebars',
  },
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-handlebars',
    website: 'https://github.com/LucaNerlich/aem-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 2,
    },
  },
})
