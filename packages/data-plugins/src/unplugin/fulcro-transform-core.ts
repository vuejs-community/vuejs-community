import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fulcro/transform-core',
  description: 'Shared machinery behind the Fulcro compile time transformers. Installed for you; not meant to be depended on directly.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'typescript',
    'transformer',
    'ts-patch',
    'unplugin',
    'compiler',
  ],
  source: {
    github: 'DigUu-RL/fulcro',
    npm: '@fulcro/transform-core',
  },
  links: {
    github: 'https://github.com/DigUu-RL/fulcro',
    npm: 'https://www.npmjs.com/package/@fulcro/transform-core',
    website: 'https://github.com/DigUu-RL/fulcro/tree/main/packages/transform-core#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
