import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dist-zip-pack',
  description: 'Package the build products and support Webpack, Vue-CLI, Vite, Rollup, esbuild, Astro, Nuxt, and Rspack. Support adding passwords to the packaged zip files.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/zengjunlin2022/unplugin-dist-zip-pack',
    npm: 'https://www.npmjs.com/package/unplugin-dist-zip-pack',
    website: 'https://github.com/zengjunlin2022/unplugin-dist-zip-pack#readme',
  },
  source: {
    github: 'zengjunlin2022/unplugin-dist-zip-pack',
    npm: 'unplugin-dist-zip-pack',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
