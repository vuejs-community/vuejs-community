import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unframework.dev/unplugin',
  description: 'The Unframework bundler plugin: imports of .uf.tsx files compile to the selected framework, and that framework\'s own plugin finishes the job.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'astro',
    'rolldown',
    'rollup',
    'unframework',
    'unplugin',
    'vite',
    'webpack',
  ],
  links: {
    github: 'https://github.com/uxfront-com/unframework',
    npm: 'https://www.npmjs.com/package/@unframework.dev/unplugin',
    website: 'https://github.com/uxfront-com/unframework/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'uxfront-com/unframework',
    npm: '@unframework.dev/unplugin',
  },
})
