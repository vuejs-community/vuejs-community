import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ajv-build-tools',
  description: 'A tool to manage compiling json schemas with ajv to integrate with build tools like rollup and vite',
  version: '1.0.0-next.9',
  category: 'plugin',
  tags: [
    'ajv',
    'jsonschema',
    'validation',
    'vite',
    'rollup',
    'unplugin',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/qurafi/ajv-tools',
    npm: 'https://www.npmjs.com/package/ajv-build-tools',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 5,
    },
  },
})
