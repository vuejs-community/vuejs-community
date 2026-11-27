import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'flexui-vite',
  description: 'Vite plugin that compiles FlexUI stylesheets for dev and build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'flexui',
    'vite-plugin',
    'css',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/flexui-vite',
  },
  source: {
    npm: 'flexui-vite',
  },
})
