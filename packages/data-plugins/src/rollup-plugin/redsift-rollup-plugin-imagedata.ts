import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@redsift/rollup-plugin-imagedata',
  description: 'Import image data and metadata into a rollup JavaScript bundle.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'modules',
    'image',
    'metadata',
  ],
  links: {
    github: 'https://github.com/redsift/rollup-plugin-imagedata',
    npm: 'https://www.npmjs.com/package/@redsift/rollup-plugin-imagedata',
    website: 'https://github.com/redsift/rollup-plugin-imagedata',
  },
  source: {
    github: 'redsift/rollup-plugin-imagedata',
    npm: '@redsift/rollup-plugin-imagedata',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 96,
      weekly: 1,
    },
  },
})
