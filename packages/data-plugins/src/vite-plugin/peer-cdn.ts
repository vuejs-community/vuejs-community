import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'peer-cdn',
  description: 'A peer-to-peer CDN for your site: a service worker serves assets from other visitors\' caches over WebRTC before asking your server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cdn',
    'vite-plugin',
    'peer-to-peer',
    'p2p',
    'webrtc',
    'service-worker',
    'cache',
    'offline',
  ],
  links: {
    github: 'https://github.com/vardius/peer-cdn',
    npm: 'https://www.npmjs.com/package/peer-cdn',
    website: 'https://vardius.github.io/peer-cdn/',
  },
  source: {
    github: 'vardius/peer-cdn',
    npm: 'peer-cdn',
  },
})
