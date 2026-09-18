import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-absolute-dynamic-imports',
  description: 'Rewrites relative import specifiers in built chunks to absolute URLs — useful when your build output is served from a different base path than where it\'s built (e.g. AEM clientlibs).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'aem',
    'clientlib',
    'dynamic-import',
    'absolute-url',
  ],
  source: {
    github: 'ramirezcgn/vite-plugin-absolute-dynamic-imports',
    npm: 'vite-plugin-absolute-dynamic-imports',
  },
  links: {
    github: 'https://github.com/ramirezcgn/vite-plugin-absolute-dynamic-imports',
    npm: 'https://www.npmjs.com/package/vite-plugin-absolute-dynamic-imports',
    website: 'https://github.com/ramirezcgn/vite-plugin-absolute-dynamic-imports#readme',
  },
})
