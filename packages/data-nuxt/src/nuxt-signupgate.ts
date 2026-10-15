import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-signupgate',
  description: 'Check signup emails, domains and IPs against the SignupGate risk API.',
  icon: '',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Mokkapps/nuxt-signupgate',
    npm: 'https://npmjs.com/package/nuxt-signupgate',
    website: 'https://github.com/Mokkapps/nuxt-signupgate',
  },
  source: {
    github: 'Mokkapps/nuxt-signupgate',
    npm: 'nuxt-signupgate',
  },
})
