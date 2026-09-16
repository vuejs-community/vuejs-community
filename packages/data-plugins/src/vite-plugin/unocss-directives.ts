import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unocss-directives',
  description: 'CSS Directive support for UnoCss',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unocss',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'wheatjs/unocss-directives',
    npm: 'unocss-directives',
  },
  links: {
    github: 'https://github.com/wheatjs/unocss-directives',
    npm: 'https://www.npmjs.com/package/unocss-directives',
    website: 'https://github.com/wheatjs/unocss-directives#readme',
  },
  stats: {
    stars: 30,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
