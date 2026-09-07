<div align="center">

<img src="public/logo.svg" alt="Vue Community logo" width="160" />

# Vue Community

**Discover the Vue Ecosystem** — an open, community-driven directory of the Vue ecosystem.

</div>

## ✨ Features

- 🗂 **3,500+ projects indexed** — the largest curated collection of the Vue ecosystem, spanning 8 categories: UI libraries, components, composables, Nuxt modules, build-tool plugins, starters, admin templates, and the uni-app ecosystem
- 📊 **Live ecosystem stats** — npm downloads and GitHub stars synced automatically every day by a scheduled GitHub Action, so you always see fresh numbers
- 🔍 **Rich filtering & sorting** — query by category, source, stars, or monthly / weekly downloads, with sorting built into the API
- ⚡ **Fast, data-driven API** — all data is compiled into a prebuilt SQLite index served by Nitro, no runtime database required
- 🤖 **Auto-generated data** — Nuxt modules are generated from `nuxt/modules`, and Vite / Rollup / Rolldown / Unplugin plugins are discovered from npm keywords, keeping the catalog wide and up to date
- 🛡 **Type-safe by design** — every entry is validated against `@vuejs-community/schema`, so the data stays consistent
- 🎨 **Modern UI** — built with Tailwind CSS v4, shadcn-vue (reka-ui), and smooth animations via motion-v
- 🌱 **Community-driven** — adding a project is as simple as one small TypeScript file, no database writes needed

## 🛠 Development

Clone and run the project locally:

```bash
# 1. Clone the project
git clone https://github.com/vuejs-community/vuejs-community.git

# 2. Enter the project directory
cd vuejs-community

# 3. Install dependencies
pnpm install

# 4. Start the dev server on http://localhost:3000
pnpm run docs:dev
```

## 📁 Project Structure

```
.
├── app/                     # Nuxt app (pages, components, layouts, assets)
│   ├── components/ui/       # Base UI components (shadcn-vue)
│   └── assets/icon/         # Custom icon collection (@nuxt/icon)
├── server/                  # Nitro server
│   ├── api/                 # API routes (/api/projects, /api/projects/stats)
│   └── assets/              # Generated index.db lives here
├── packages/
│   ├── data-ui/             # UI component libraries (vuetify, shadcn-vue, ...)
│   ├── data-component/      # Component libraries (tiptap, vue-flow, ...)
│   ├── data-hooks/          # Composables / hooks libraries (vueuse, ...)
│   ├── data-nuxt/           # Nuxt modules (auto-generated from nuxt/modules)
│   ├── data-plugins/        # Vite / Rollup / Rolldown / Unplugin plugins
│   ├── data-admin/          # Admin dashboard starters
│   ├── data-uniapp/         # uni-app ecosystem
│   ├── schema/              # Data types & defineProjectMeta helper
│   ├── shared/              # Data-syncing utilities (npm / GitHub stats)
│   └── tsconfig/            # Shared TypeScript config
├── scripts/                 # Data pipeline scripts (build DB, sync stats)
└── shared/                  # Server API types
```

## 🔄 Data Pipeline

Site data lives as TypeScript files under `packages/data-*`, one file per project, and is compiled into `server/assets/index.db`:

| Command | Purpose |
| --- | --- |
| `pnpm generate:db` | 🗄 Rebuild the SQLite index from all data-* packages |
| `pnpm sync:npm-git-data` | 📥 Refresh npm downloads & GitHub stars in data files |
| `pnpm generate:nuxt:modules` | 🧩 Re-generate Nuxt module data from nuxt/modules |
| `pnpm generate:plugins` | 🔌 Re-generate build-tool plugin data from npm |

A scheduled GitHub Action runs the sync and regeneration daily, so stats stay fresh automatically.

## 🤝 Contributing

Contributions are welcome! Whether you want to **add or fix a data entry**, **improve the site UI**, or **report an issue**, please read the [Contributing Guide](./CONTRIBUTING.md) first — it covers environment setup, project structure, common commands, and commit conventions.

## 📄 License

[MIT](./LICENSE)
