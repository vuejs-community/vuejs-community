import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-custom-import',
  description: 'Customize the content of the imported module - not just the text',
  icon: 'logos:rollupjs',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'custom-import',
    'import',
    'string',
    'stringify',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'lingbopro/rollup-plugin-custom-import',
    npm: 'rollup-plugin-custom-import',
  },
  links: {
    github: 'https://github.com/lingbopro/rollup-plugin-custom-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-custom-import',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 8,
    },
  },
})
