import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-custom-import',
  description: 'Customize the content of the imported module - not just the text',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'custom-import',
    'import',
    'string',
    'stringify',
    'template',
  ],
  links: {
    github: 'https://github.com/lingbopro/rollup-plugin-custom-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-custom-import',
    website: 'https://github.com/lingbopro/rollup-plugin-custom-import',
  },
  source: {
    github: 'lingbopro/rollup-plugin-custom-import',
    npm: 'rollup-plugin-custom-import',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
