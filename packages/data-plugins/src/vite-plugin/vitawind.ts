import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitawind',
  description: 'Install and Setting Tailwindcss automatically for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitawind',
    'vite',
    'vitejs',
    'vite plugin',
    'vitejs plugin',
    'vite-plugin',
    'tailwind',
    'tailwindcss',
    'hmr',
  ],
  source: {
    github: 'huibizhang/vitawind',
    npm: 'vitawind',
  },
  links: {
    github: 'https://github.com/huibizhang/vitawind',
    npm: 'https://www.npmjs.com/package/vitawind',
    website: 'https://vitawind.vercel.app/guide-for-vitawind/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 945,
      weekly: 161,
    },
  },
})
