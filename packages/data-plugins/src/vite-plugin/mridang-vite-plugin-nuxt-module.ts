import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mridang/vite-plugin-nuxt-module',
  description: 'A Vite plugin that builds a Nuxt module the way @nuxt/module-builder does: a bundled module with declarations, a per-file runtime, module.json and types.d.mts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nuxt',
    'nuxt-module',
  ],
  links: {
    github: 'https://github.com/mridang/vite-plugin-nuxt-module',
    npm: 'https://www.npmjs.com/package/@mridang/vite-plugin-nuxt-module',
    website: 'https://github.com/mridang/vite-plugin-nuxt-module',
  },
  source: {
    github: 'mridang/vite-plugin-nuxt-module',
    npm: '@mridang/vite-plugin-nuxt-module',
  },
})
