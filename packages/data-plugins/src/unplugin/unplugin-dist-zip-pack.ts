import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dist-zip-pack',
  description: 'Package the build products and support Webpack, Vue-CLI, Vite, Rollup, esbuild, Astro, Nuxt, and Rspack. Support adding passwords to the packaged zip files.',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'zip',
    'pack',
    'unplugin',
    'vue-cli',
    'webpack',
    'vite',
    'rollup',
    'esbuild',
    'nuxt',
    'rspack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/zengjunlin2022/unplugin-dist-zip-pack',
    npm: 'https://www.npmjs.com/package/unplugin-dist-zip-pack',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
