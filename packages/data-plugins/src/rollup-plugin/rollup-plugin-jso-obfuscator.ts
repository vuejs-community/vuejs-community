import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jso-obfuscator',
  description: 'Obfuscate and protect your Rollup bundle with JavaScript Obfuscator. Official Rollup plugin for javascriptobfuscator.com: string encryption, control-flow flattening, member renaming.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'obfuscator',
    'rollup-obfuscator',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-jso-obfuscator',
    website: 'https://javascriptobfuscator.com/docs/npmcli.aspx',
  },
  source: {
    github: 'richtexteditor/jso-protector',
    npm: 'rollup-plugin-jso-obfuscator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 370,
      weekly: 17,
    },
  },
})
