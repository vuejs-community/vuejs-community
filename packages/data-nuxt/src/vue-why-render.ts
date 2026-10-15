import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-why-render',
  description: 'See which Vue components re-render and why: highlights re-renders and names the exact reactive dependency that triggered them.',
  icon: 'icon:vue-why-render',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dadashi44/vue-why-render',
    npm: 'https://npmjs.com/package/vue-why-render',
    website: 'https://dadashi44.github.io/vue-why-render/',
  },
  source: {
    github: 'dadashi44/vue-why-render',
    npm: 'vue-why-render',
  },
})
