import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wroud/vite-plugin-asset-resolver',
  description: 'A Vite plugin for custom asset resolution, mapping \'dist\' to \'src\' directories and resolving files like SVG, images, and other resources. Supports multiple directory aliases and file extensions for flexible module resolution.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'asset',
    'resolver',
    'assets',
    'javascript',
    'typescript',
    'resources',
    'module-alias',
    'file-alias',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Wroud/foundation',
    npm: 'https://www.npmjs.com/package/@wroud/vite-plugin-asset-resolver',
  },
  stats: {
    downloads: {
      monthly: 2976,
      weekly: 710,
    },
  },
})
