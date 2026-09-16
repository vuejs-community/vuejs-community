import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ajv-build-tools',
  description: 'A tool to manage compiling json schemas with ajv to integrate with build tools like rollup and vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'qurafi/ajv-tools',
    npm: 'ajv-build-tools',
  },
  links: {
    github: 'https://github.com/qurafi/ajv-tools',
    npm: 'https://www.npmjs.com/package/ajv-build-tools',
    website: 'https://github.com/qurafi/ajv-tools#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
