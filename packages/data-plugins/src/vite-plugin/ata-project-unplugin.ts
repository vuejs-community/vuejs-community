import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ata-project/unplugin',
  description: 'Compile JSON, JS and TS schema files to ata-validator standalone modules at build time, in Vite, Webpack, Rollup, Rolldown, esbuild and Rspack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'rspack-plugin',
    'json-schema',
    'ata-validator',
    'typescript',
    'codegen',
  ],
  source: {
    github: 'ata-core/unplugin-ata',
    npm: '@ata-project/unplugin',
  },
  links: {
    github: 'https://github.com/ata-core/unplugin-ata',
    npm: 'https://www.npmjs.com/package/@ata-project/unplugin',
    website: 'https://github.com/ata-core/unplugin-ata#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
