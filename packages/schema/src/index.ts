import type { CommunityProject } from './types.ts'

export type { CommunityProject } from './types'

export function defineProjectMeta<T extends CommunityProject>(project: T): T {
  return project
}

export const metaDataSchemaFilters = [
  {
    id: 'Styled',
    label: 'Styled',
    icon: 'tabler:palette',
    help: 'Styled components come with opinionated style. You usually customize them by overriding these styles.',
    autoDisable: 'FUnstyled',
  },
  {
    id: 'Unstyled',
    label: 'Unstyled',
    icon: 'tabler:palette-off',
    help: 'Unstyled components come with no style and force you to write your own.',
    autoDisable: 'FStyled',
  },
  {
    id: 'Imported',
    label: 'Imported',
    icon: 'mdi:import',
    help: 'You depends on an external library from which you import components. You benefits from library updates but can not directly customize components since it\'s not your own code.',
    autoDisable: 'FPasted',
  },
  {
    id: 'Pasted',
    label: 'Pasted',
    icon: 'mdi:content-paste',
    help: 'You depends on no external library and need to copy paste component code into your own project. After pasting the code, it\'s yours and you can customize it as you want. However, you can\'t benefit from the updates automatically.',
    autoDisable: 'FImported',
  },
  {
    id: 'Components',
    label: 'Components',
    icon: 'icon-park-outline:components',
    help: 'Provide Vue components handling both logic and styling (or logic only if unstyled), but it is coupled to the Vue framework.',
    autoDisable: 'FCSS',
  },
  {
    id: 'CSS',
    label: 'CSS only',
    icon: 'ph:file-css',
    help: 'Only provide CSS classes to inject into your own Vue components. You get no logic, but the library can be used with any framework (not only Vue).',
    autoDisable: 'FComponents',
  },
  // Old filters when Nuxt UI was the single incomaptible lib with Vue itself.
  // {
  //   id: "FVue" as const,
  //   label: "Vue/Nuxt",
  //   icon: "mdi:vuejs",
  //   help: "Made for Vue framework, can be used with Nuxt too.",
  //   autoDisable: "FNuxt",
  // },
  // {
  //   id: "FNuxt" as const,
  //   label: "Nuxt only",
  //   icon: "simple-icons:nuxtdotjs",
  //   help: "Dedicated to Nuxt framework, can't be used with Vue.",
  //   autoDisable: "FVue",
  // },
  {
    id: 'Tailwind',
    label: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    help: 'The library uses Tailwind CSS itself and allows you to use it to customize components. As a Tailwind CSS user, this allows to keep a unique tool for all your styling.',
  },
  {
    id: 'Free',
    label: 'Free',
    icon: 'material-symbols:money-off',
    help: 'The UI Library is entirely free for all available components.',
  },
  {
    id: 'Accessible',
    label: 'Fully Accessible',
    icon: 'material-symbols:accessibility-new',
    help: 'All components are designed with accessibility in mind.',
  },
  {
    id: 'BuiltinThemes',
    label: 'Built-in Themes',
    icon: 'solar:palette-outline',
    help: 'Provide different themes ready to be used.',
  },
  {
    id: 'ThemeGenerator',
    label: 'Theme Generator',
    icon: 'fluent:wand-24-regular',
    help: 'Provide a tool to help developers generate new themes in an easy way.',
  },
  {
    id: 'DarkMode',
    label: 'Dark Mode',
    icon: 'mdi:weather-night',
    help: 'Components are designed to support both a light and dark version.',
  },
  {
    id: 'SemanticColors',
    label: 'Semantic Colors',
    icon: 'mingcute:color-filter-line',
    help: 'Colors can be associated with particular meanings, like \'primary\', \'secondary\', etc.',
  },
  {
    id: 'Figma',
    label: 'Figma files',
    icon: 'ph:figma-logo',
    help: 'Figma is the leading design tool. Figma files contain the same components that the UI Library, so that designers can create designs without coding skills.',
  },
  {
    id: 'Official',
    label: 'Official',
    icon: 'solar:medal-ribbon-linear',
    help: 'Made by a team responsible for managing a framework itself.',
  },
  {
    id: 'Roadmap',
    label: 'Public Roadmap',
    icon: 'tabler:road',
    help: 'A public roadmap is available to help you see next library features.',
  },
  {
    id: 'RTLSupport',
    label: 'RTL support',
    icon: 'material-symbols:keyboard-tab-rtl-rounded',
    help: 'Ability to display text that is written from right to left (Arabic, Hebrew, etc.)',
  },
  {
    id: 'Typed',
    label: 'Fully Typed',
    icon: 'tabler:brand-typescript',
    help: 'Provided components are all typed to help developers with auto-completion and potential errors.',
  },
  {
    id: 'Form',
    label: 'Form Helpers',
    icon: 'material-symbols:dynamic-form-outline',
    help: 'Provided tools or examples for integration with form management libraries (Vee-Validate, Zod, Yup, etc.)',
  },
] as const
