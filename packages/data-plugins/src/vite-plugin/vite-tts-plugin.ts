import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-tts/plugin',
  description: 'Vite plugin that transforms <tts> HTML tags to pre-generated audio files using AI TTS providers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tts',
    'text-to-speech',
    'sarvam',
    'ai',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@vite-tts/plugin',
  },
  source: {
    npm: '@vite-tts/plugin',
  },
})
