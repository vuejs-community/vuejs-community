import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@studiokloek/vite-assets-plugin',
  description: 'Vite plugin and CLI that packs sprites, sounds and fonts from tagged asset directories.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pixi',
    'spritesheet',
    'texturepacker',
    'sounds',
    'ffmpeg',
    'assets',
  ],
  links: {
    github: 'https://github.com/studiokloek/vite-assets-plugin',
    npm: 'https://www.npmjs.com/package/@studiokloek/vite-assets-plugin',
    website: 'https://github.com/studiokloek/vite-assets-plugin#readme',
  },
  source: {
    github: 'studiokloek/vite-assets-plugin',
    npm: '@studiokloek/vite-assets-plugin',
  },
})
