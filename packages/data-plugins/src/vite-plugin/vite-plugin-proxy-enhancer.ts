import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-enhancer',
  description: 'A powerful Vite plugin that enhances the dev server proxy with cookie rewriting (Domain/Path/Secure/SameSite), proper multiple Set-Cookie handling, per-proxy defaults, WebSocket logging, and granular request monitoring.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'dev-server',
    'http-proxy',
    'cookie',
    'cookie-rewrite',
    'set-cookie',
    'samesite',
    'cors',
    'websocket',
    'logging',
  ],
  links: {
    github: 'https://github.com/unknownman/vite-plugin-proxy-enhancer',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-enhancer',
    website: 'https://github.com/unknownman/vite-plugin-proxy-enhancer#readme',
  },
  source: {
    github: 'unknownman/vite-plugin-proxy-enhancer',
    npm: 'vite-plugin-proxy-enhancer',
  },
})
