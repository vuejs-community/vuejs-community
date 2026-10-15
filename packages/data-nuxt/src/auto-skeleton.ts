import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'auto-skeleton',
  description: 'Auto-generated skeleton loaders that mirror a component\'s real rendered layout. Zero authoring, always in sync.',
  icon: 'icon:auto-skeleton',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/oleksiizlotnik/AutoSkeleton',
    npm: 'https://npmjs.com/package/auto-skeleton-vue',
    website: 'https://oleksiizlotnik.github.io/AutoSkeleton/',
  },
  source: {
    github: 'oleksiizlotnik/AutoSkeleton',
    npm: 'auto-skeleton-vue',
  },
})
