import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jso-obfuscator',
  description: 'Obfuscate and protect your Vite build output with JavaScript Obfuscator. Official Vite plugin for javascriptobfuscator.com: string encryption, control-flow flattening, member renaming.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'obfuscator',
    'vite-obfuscator',
    'javascript-obfuscator',
    'obfuscation',
    'javascript',
    'code-protection',
    'source-code-protection',
    'anti-tamper',
    'minify',
    'protect',
    'javascriptobfuscator-com',
    'bundle',
    'javascriptobfuscator',
  ],
  links: {
    github: 'https://github.com/richtexteditor/jso-protector',
    npm: 'https://www.npmjs.com/package/vite-plugin-jso-obfuscator',
    website: 'https://javascriptobfuscator.com/docs/npmcli.aspx',
  },
  source: {
    github: 'richtexteditor/jso-protector',
    npm: 'vite-plugin-jso-obfuscator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 377,
      weekly: 16,
    },
  },
})
