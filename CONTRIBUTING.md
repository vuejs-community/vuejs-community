# 贡献指南（Contributing Guide）

感谢你愿意为 Vue Community 做出贡献！本文档介绍项目的环境搭建、目录结构、常用命令与提交规范，帮助你快速上手。

## 目录

- [环境要求](#环境要求)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [常用命令](#常用命令)
- [贡献方式](#贡献方式)
- [开发流程](#开发流程)
- [提交规范（Conventional Commits）](#提交规范conventional-commits)

## 环境要求

| 工具 | 版本要求 | 说明 |
| --- | --- | --- |
| Node.js | ≥ 22（推荐 LTS） | CI 使用 `lts/*` |
| pnpm | 11.x | 由 `packageManager` 字段锁定为 `pnpm@11.24.0`，可通过 `corepack enable` 或 `npm i -g pnpm` 安装 |
| Git | 较新版本 | 提交钩子依赖 `simple-git-hooks` |

## 快速开始

```bash
# 1. Fork 仓库后克隆（或直接克隆你已有的 fork）
git clone https://github.com/<your-username>/vuejs-community.git
cd vuejs-community

# 2. 使用项目锁定的 pnpm 版本
corepack enable

# 3. 安装依赖
#    postinstall 会自动执行 nuxt prepare，
#    prepare 脚本会注册 simple-git-hooks 提交钩子
pnpm install

# 4. 启动开发服务器（http://localhost:3000）
pnpm docs:dev
```

## 项目结构

```
.
├── app/                     # Nuxt 应用（页面、组件、布局、资源等）
│   ├── components/ui/       # shadcn-vue 生成的 UI 组件
│   └── assets/icon/         # 本地自定义图标（@nuxt/icon 自定义集合）
├── server/                  # Nitro 服务端
│   ├── api/                 # API 路由
│   ├── assets/              # 生成的 index.db 所在位置
│   └── generate-index-db.ts # SQLite 索引数据库生成脚本
├── packages/
│   ├── data-component/      # Vue 组件库数据
│   ├── data-hooks/          # Composables 数据
│   ├── data-nuxt/           # Nuxt 模块数据
│   ├── data-plugins/        # Vite / Rollup / Rolldown / Unplugin 插件数据
│   ├── data-ui/             # UI 组件库数据
│   ├── schema/              # @vuejs-community/schema 数据类型定义
│   ├── shared/              # @vuejs-community/shared 共享工具函数
│   └── tsconfig/            # 共享 TypeScript 配置
├── scripts/                 # 仓库级数据同步脚本
├── shared/                  # 顶层共享类型
└── turbo.json               # Turborepo 任务配置
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm docs:dev` | 启动 Nuxt 开发服务器（localhost:3000） |
| `pnpm build` | 生产构建 |
| `pnpm generate` | 静态站点生成 |
| `pnpm preview` | 预览生产构建 |
| `pnpm typecheck` | 运行 `nuxt typecheck` 类型检查 |
| `pnpm lint` | ESLint 检查 |
| `pnpm lint:fix` | ESLint 自动修复 |
| `pnpm generate:plugins` | 同步 Vite / Rollup / Rolldown / Unplugin 插件数据 |
| `pnpm generate:nuxt:modules` | 同步 Nuxt 模块数据 |
| `pnpm generate:db` | 重建 `server/assets` 下的 index.db |
| `pnpm sync:npm-git-data` | 同步 npm 下载量与 GitHub Stars 数据 |
| `pnpm -F <package-name> run <script>` | 在指定 workspace 包内执行脚本，例如 `pnpm -F @vuejs-community/shared run dev` |

## 贡献方式

### 收录新项目 / 修正数据

站点数据以 TypeScript 文件形式存放在 `packages/data-*` 下，每个项目一个文件，使用 `@vuejs-community/schema` 提供的 `defineProjectMeta` 定义：

- Nuxt 模块：`packages/data-nuxt/src/<module-name>.ts`
- 插件：`packages/data-plugins/src/<vite|rollup|rolldown|unplugin>/<plugin-name>.ts`

```ts
import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'my-awesome-plugin',
  description: 'What it does, in one sentence',
  category: 'plugin',
  tags: ['vite'],
  types: ['vite-plugin'],
  links: {
    github: 'https://github.com/user/my-awesome-plugin',
    npm: 'https://www.npmjs.com/package/my-awesome-plugin',
  },
})
```

注意事项：

- `name`、`links.github`、`links.npm` 需与真实的仓库 / 包名一致，数据同步脚本依赖这些字段拉取信息。
- `stats`（Stars、下载量等）由定时任务自动同步，**无需手动维护**；也可以在本地运行 `pnpm sync:npm-git-data` 手动刷新。
- 新增或修改数据后，运行 `pnpm generate:db` 重建索引数据库，确保站点能读到最新数据。
- 仓库每日定时运行数据同步工作流，自动更新模块 / 插件数据与数据库，因此与统计数据相关的改动通常不需要手动提交。

### 改进站点功能与 UI

- 站点代码位于 `app/`，服务端接口位于 `server/api/`。
- UI 组件基于 shadcn-vue + Tailwind CSS v4，新增基础组件时请使用 shadcn-vue CLI 生成到 `app/components/ui/`。
- 图标使用 `@nuxt/icon`，本地自定义图标放在 `app/assets/icon/`。
- 数据类型统一从 `@vuejs-community/schema` 引入，如需新增字段请先更新 schema。

### 报告问题

提交 Issue 时请说明：预期行为、实际行为、复现步骤和环境信息（浏览器 / Node 版本）。如果发现数据收录有误，附上对应条目的文件路径或项目名称即可，不必附完整截图。

## 开发流程

1. 从最新的 `master` 拉出功能分支：

   ```bash
   git checkout -b feat/my-feature
   ```

2. 完成开发后，确保以下检查通过：

   ```bash
   pnpm lint
   pnpm typecheck
   ```

3. 提交 PR 到 `master`，并在描述中说明改动内容与动机；数据类 PR 请注明影响的条目。

## 提交规范（Conventional Commits）

仓库启用了 `verify-git-commit` 对提交信息做校验，格式不符合的提交会被拒绝：

```
type(scope): subject
```

- **type**：`feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`、`revert`
- **scope**（可选）：改动所在模块，如 `db`、`data-nuxt`、`data-plugins`、`schema`、`shared`、`ui`、`deps`
- **subject**：简短描述，小写开头、结尾不加句号

示例：

```
feat(data-plugins): add unplugin-icons entry
fix(db): handle missing tags in index db generation
chore(deps): update nuxt to latest
```

Git 钩子行为（由 `pnpm install` 自动注册）：

- **pre-commit**：`lint-staged` 对暂存文件自动执行 `eslint --fix`
- **commit-msg**：`verify-git-commit` 校验提交信息格式

## 参考

创建 PR 时直接使用仓库内置的 `create-pr` 技能（`.agents/skills/create-pr/SKILL.md`），其中约定了 PR 标题与正文的完整规范与示例：标题遵循上述 Conventional Commits，正文包含背景、改动内容、关联 Issue 与验证方式，并在创建前先输出草稿供确认。
