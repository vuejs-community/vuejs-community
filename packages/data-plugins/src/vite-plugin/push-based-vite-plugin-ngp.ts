import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@push-based/vite-plugin-ngp',
  description: 'Vite plugin that compiles Angular with ngp, Angular\'s hybrid Rust/TypeScript preprocessor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'angular',
    'ngp',
    'hmr',
    'ssr',
  ],
  links: {
    github: 'https://github.com/push-based/vite-plugin-ngp',
    npm: 'https://www.npmjs.com/package/@push-based/vite-plugin-ngp',
    website: 'https://push-based.github.io/vite-plugin-ngp/',
  },
  source: {
    github: 'push-based/vite-plugin-ngp',
    npm: '@push-based/vite-plugin-ngp',
  },
})
