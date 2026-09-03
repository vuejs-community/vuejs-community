import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-envsubst',
  description: 'Vite plugin that transforms environmental variables into a global statement that can be replaced with `envsubst` or Caddy\'s templating engine.',
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
