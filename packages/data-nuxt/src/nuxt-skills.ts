import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-skills',
  description: 'Expose a local skills/ directory as Agent Skills discovery files under /.well-known/skills/.',
  icon: '',
  category: 'nuxt',
  types: [
    'AI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Barbapapazes/unplugin-skills',
    npm: 'https://npmjs.com/package/nuxt-skills',
    website: 'https://github.com/Barbapapazes/unplugin-skills/tree/main/packages/nuxt-skills#readme',
  },
  source: {
    github: 'Barbapapazes/unplugin-skills',
    npm: 'nuxt-skills',
  },
})
