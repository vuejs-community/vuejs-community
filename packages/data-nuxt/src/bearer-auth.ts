import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bearer-auth',
  description: 'Server-side bearer authentication for Nuxt with Redis-backed sessions, HTTP-only cookies, CSRF protection, social login, OTP verification, password reset, session management, SSR hydration, and optional ability-based authorization.',
  icon: '',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth',
    npm: 'https://npmjs.com/package/nuxt-bearer-auth',
    website: 'https://nuxt-bearer-auth.vercel.app/',
  },
  source: {
    github: 'paaqwesilowelltetteh/nuxt-bearer-auth',
    npm: 'nuxt-bearer-auth',
  },
})
