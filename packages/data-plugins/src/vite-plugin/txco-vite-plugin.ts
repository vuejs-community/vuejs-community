import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@txco/vite-plugin',
  description: 'Vite plugin for Thanks, Computer (txco): after `vite build`, writes a Web ABI build — your dist/ as public/, the ops a browser-routed app needs as ops/, and txco-web.json — for `txco apply` to install.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'spa',
    'txco',
    'thanks-computer',
    'static',
    'web-abi',
  ],
  links: {
    github: 'https://github.com/LoremLabs/thanks-computer',
    npm: 'https://www.npmjs.com/package/@txco/vite-plugin',
    website: 'https://github.com/LoremLabs/thanks-computer/tree/master/sdk/vite-plugin#readme',
  },
  source: {
    github: 'LoremLabs/thanks-computer',
    npm: '@txco/vite-plugin',
  },
})
