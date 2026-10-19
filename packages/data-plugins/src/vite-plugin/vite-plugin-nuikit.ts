import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nuikit',
  description: 'Make shadcn/ui and Tailwind v4 render in FiveM\'s Chromium 103 NUI, plus in-game hot reload.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fivem',
    'nui',
    'vite-plugin',
    'tailwindcss',
    'tailwind-v4',
    'shadcn',
    'oklch',
    'color-mix',
    'cef',
    'chromium-103',
    'redm',
  ],
  links: {
    github: 'https://github.com/belibathan/nuikit',
    npm: 'https://www.npmjs.com/package/vite-plugin-nuikit',
    website: 'https://nuikit.vercel.app',
  },
  source: {
    github: 'belibathan/nuikit',
    npm: 'vite-plugin-nuikit',
  },
})
