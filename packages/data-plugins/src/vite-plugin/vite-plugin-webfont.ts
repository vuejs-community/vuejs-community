import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webfont',
  description: 'Vite plugin for downloading and injecting webfonts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'web-font',
    'webfont',
    'webfont-download',
    'google-fonts',
    'bunny-fonts',
    'fontshare',
    'vue',
    'react',
  ],
  source: {
    github: 'feat-agency/vite-plugin-webfont-dl',
    npm: 'vite-plugin-webfont',
  },
  links: {
    github: 'https://github.com/feat-agency/vite-plugin-webfont-dl',
    npm: 'https://www.npmjs.com/package/vite-plugin-webfont',
    website: 'https://webfont-dl.feat.agency',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 43,
      weekly: 9,
    },
  },
})
