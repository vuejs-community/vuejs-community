import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ata-project/unplugin',
  description: 'Build-time JSON Schema for Vite, Webpack, Rollup, Rolldown, esbuild and Rspack. compileAway takes the runtime compiler out of the bundle.',
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
  links: {
    github: 'https://github.com/ata-core/unplugin-ata',
    npm: 'https://www.npmjs.com/package/@ata-project/unplugin',
    website: 'https://github.com/ata-core/unplugin-ata#readme',
  },
  source: {
    github: 'ata-core/unplugin-ata',
    npm: '@ata-project/unplugin',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
