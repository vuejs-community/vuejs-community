import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-envsubst',
  description: 'Vite plugin that transforms environmental variables into a global statement that can be replaced with `envsubst` or Caddy\'s templating engine.',
  icon: 'logos:vite-icon',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'caddy',
    'docker',
    'kubernetes',
    'nginx',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'abhiaagarwal/vite-plugin-envsubst',
    npm: 'vite-plugin-envsubst',
  },
  links: {
    github: 'https://github.com/abhiaagarwal/vite-plugin-envsubst',
    npm: 'https://www.npmjs.com/package/vite-plugin-envsubst',
  },
  stats: {
    downloads: {
      monthly: 3872,
      weekly: 1434,
    },
  },
})
