import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unifycss/vite',
  description: 'High-speed Vite plugin for UnifyCSS with instant HMR & on-demand CSS generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unifycss',
    'vite',
    'vite-plugin',
    'hmr',
    'hot-module-replacement',
    'react-vite',
    'vue-vite',
    'svelte-vite',
    'solid-vite',
    'css-plugin',
    'zero-config',
  ],
  links: {
    github: 'https://github.com/unifycss-org/unifycss',
    npm: 'https://www.npmjs.com/package/@unifycss/vite',
    website: 'https://unifycss.dev',
  },
  source: {
    github: 'unifycss-org/unifycss',
    npm: '@unifycss/vite',
  },
})
