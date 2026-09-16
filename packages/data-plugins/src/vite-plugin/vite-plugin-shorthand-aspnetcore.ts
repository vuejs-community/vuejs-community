import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shorthand-aspnetcore',
  description: 'A Vite plugin that sets up some basic settings for use with Shorthand.Vite NuGet package.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-shorthand-aspnetcore',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-shorthand-aspnetcore',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
