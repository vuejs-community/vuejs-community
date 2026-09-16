import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wroud/vite-plugin-asset-resolver',
  description: 'A Vite plugin for custom asset resolution, mapping \'dist\' to \'src\' directories and resolving files like SVG, images, and other resources. Supports multiple directory aliases and file extensions for flexible module resolution.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Wroud/foundation',
    npm: '@wroud/vite-plugin-asset-resolver',
  },
  links: {
    github: 'https://github.com/Wroud/foundation',
    npm: 'https://www.npmjs.com/package/@wroud/vite-plugin-asset-resolver',
    website: 'https://wroud.dev',
  },
  stats: {
    stars: 27,
    downloads: {
      monthly: 2240,
      weekly: 417,
    },
  },
})
