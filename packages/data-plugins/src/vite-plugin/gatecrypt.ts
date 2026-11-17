import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gatecrypt',
  description: 'Put a static site behind a sign-in on any host that only serves files (GitHub Pages, S3, ...). Encrypts the build; visitors sign in with Google or an emailed code, and your API gets a signed token that says who they are.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'static-site',
    'authentication',
    'sign-in',
    'password-protect',
    'encryption',
    'github-pages',
    'vite-plugin',
    'service-worker',
    'access-control',
    'jwt',
  ],
  links: {
    github: 'https://github.com/Gatecrypt/gatecrypt',
    npm: 'https://www.npmjs.com/package/gatecrypt',
    website: 'https://gatecrypt.dev',
  },
  source: {
    github: 'Gatecrypt/gatecrypt',
    npm: 'gatecrypt',
  },
})
