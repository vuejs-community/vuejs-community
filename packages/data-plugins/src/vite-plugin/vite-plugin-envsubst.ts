import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-envsubst',
  description: 'Vite plugin that transforms environmental variables into a global statement that can be replaced with `envsubst` or Caddy\'s templating engine.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'caddy',
    'docker',
    'kubernetes',
    'nginx',
    'vite-plugin',
  ],
  source: {
    github: 'abhiaagarwal/vite-plugin-envsubst',
    npm: 'vite-plugin-envsubst',
  },
  links: {
    github: 'https://github.com/abhiaagarwal/vite-plugin-envsubst',
    npm: 'https://www.npmjs.com/package/vite-plugin-envsubst',
    website: 'https://github.com/abhiaagarwal/vite-plugin-envsubst',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 4167,
      weekly: 1049,
    },
  },
})
