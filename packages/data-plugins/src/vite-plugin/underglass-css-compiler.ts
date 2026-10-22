import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@underglass/css-compiler',
  description: 'Opt-in build-time compiler that turns selected CSS animations into Underglass GPU programs, with Vite and webpack integrations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webgpu',
    'css',
    'animation',
    'vite-plugin',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/RaananW/underglass',
    npm: 'https://www.npmjs.com/package/@underglass/css-compiler',
    website: 'https://github.com/RaananW/underglass/tree/main/packages/css-compiler#readme',
  },
  source: {
    github: 'RaananW/underglass',
    npm: '@underglass/css-compiler',
  },
})
