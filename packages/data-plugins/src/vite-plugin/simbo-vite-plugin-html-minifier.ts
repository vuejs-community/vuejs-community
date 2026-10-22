import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@simbo/vite-plugin-html-minifier',
  description: 'Minify generated Vite HTML assets with shared defaults and typed html-minifier-terser options.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'html',
    'minify',
    'html-minifier-terser',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@simbo/vite-plugin-html-minifier',
    website: 'https://github.com/simbo/packages/tree/main/packages/vite-plugin-html-minifier',
  },
  source: {
    npm: '@simbo/vite-plugin-html-minifier',
  },
})
