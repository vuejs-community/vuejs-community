import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ivanheral/vite-plugin-angular',
  description: 'Vite plugin to inline Angular templateUrl and styleUrls, compile Angular decorators, and apply the Angular Linker.',
  version: '1.0.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@ivanheral/vite-plugin-angular',
  },
  stats: {
    downloads: {
      monthly: 55,
      weekly: 11,
    },
  },
})
