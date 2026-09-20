import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ivanheral/vite-plugin-angular',
  description: 'Vite plugin to inline Angular templateUrl and styleUrls, compile Angular decorators, and apply the Angular Linker.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'angular',
    'templateUrl',
    'styleUrls',
    'ivy',
    'linker',
    'decorators',
    'hmr',
    'aot',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@ivanheral/vite-plugin-angular',
  },
  source: {
    npm: '@ivanheral/vite-plugin-angular',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 4,
    },
  },
})
