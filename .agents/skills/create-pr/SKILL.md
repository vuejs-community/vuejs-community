---
name: create-pr
description: Create pull requests for vuejs-community following the repository's Conventional Commits style and PR body conventions. MUST be used immediately when the user says "创建 PR"、"提交 PR"、"开个 PR"、"提个 PR"、"帮我发起 PR"、"create a PR"、"open a PR"、"make a PR"、"submit a PR" or any similar phrasing — do not re-confirm intent, do not answer with PR theory, enter this skill's workflow directly. Also use it when drafting PR title/body, summarizing branch changes for a PR, or otherwise preparing PR content. Only skip it when the user is discussing PR concepts without requesting an action.
---

# Vue Community PR 创建规范

## 目标

一、基于当前分支相对基线分支的全部改动生成 PR，不只看最后一个 commit。

二、仓库 `.github/` 下目前没有 PR 模板，PR 正文遵循本文档约定的固定结构（背景、改动内容、关联 Issue、验证方式），不要自行发明更复杂的结构。

三、PR 标题始终使用英文，并遵循仓库的 Conventional Commits 规范（与 `CONTRIBUTING.md` 一致；commit message 由 `verify-git-commit` 钩子校验，PR 标题保持同一风格）。

四、真正执行 `gh pr create` 之前，必须先把 `base`、`title`、`body` 给用户确认，确认后才能创建 PR。

## 基本规则

### 一、按意图触发，命中话术直接进入工作流

只要能判断用户是在请求创建 PR，或为创建 PR 做准备，就应使用本 skill。

以下话术（含近似表达）出现时，**直接进入本 skill 的工作流**，不要追问"你是想创建 PR 吗"，也不要回答 PR 概念说明：

- 中文：「创建 PR」「提交 PR」「开个 PR」「提个 PR」「帮我发起 PR」「把改动提上去」「准备好提交审查」
- 英文：「create a PR」「open a PR」「make a PR」「submit a PR」「prepare a pull request」

不要把触发限制成固定说法。即使用户表达很短、很口语，或要求不完整（例如只说"提个 PR"而不说分支名），只要不是在单纯讨论 PR 概念，也应进入本 skill 的工作流；缺失的信息按"信息不足时不要硬写"的规则处理。

### 二、PR 正文遵循固定结构

仓库没有 PR 模板，正文统一使用以下结构：

```markdown
### 背景

为什么做这个改动。

### 改动内容

改了什么，关键取舍。

### 关联 Issue

close #xxxx / None

### 验证方式

如何验证本次改动（lint、typecheck、运行了哪些生成脚本、手动验证步骤等）。
```

不要自创 section，也不要删掉上述主结构。可按 PR 类型精简内容：纯数据类 PR 无 UI 变化时，"验证方式"写运行了哪些生成脚本即可。

### 三、标题固定英文，遵循 Conventional Commits

按以下顺序判断正文语言：

1. 用户当前请求主要是中文 -> 正文用中文
2. 用户当前请求主要是英文 -> 正文用英文
3. 若当前请求混合，但历史上下文明显偏中文 -> 正文用中文
4. 若无法判断，再询问用户，不要猜

但无论正文选中文还是英文：

- `PR title` 都必须是英文
- `PR title` 要符合本文档的标题规范（Conventional Commits）
- `PR body` 跟随用户语言习惯

### 四、先分析分支，再写 PR

创建 PR 前，必须先看：

- 当前分支名
- 基线分支
- 当前分支相对基线分支的 commit 列表
- `base...HEAD` 的完整 diff

不要只根据工作区未提交内容写 PR，也不要只根据最近一个 commit 写 PR。

### 五、先给草稿，后创建 PR

无论用户是否说"直接帮我创建 PR"，都要先完成以下步骤：

1. 生成 `base`、`title`、`body` 草稿
2. 明确告诉用户：这是准备提交的 PR 内容
3. 让用户确认是否继续创建，或先修改
4. 只有用户明确确认后，才能真正执行 `gh pr create`

若用户中途要求修改标题、类型、目标分支等，应先更新草稿，再次确认。

### 六、标题和正文要分工明确

- PR 标题：用英文一句话概括本分支最主要的变动
- PR 正文：说明背景、改法、关联 issue、验证方式

正文不是逐文件流水账。要归纳"为什么改"和"改完后对开发者/用户有什么影响"。

### 七、信息不足时不要硬写

若以下内容缺失且无法从分支改动中可靠推断：

- 基线分支
- 关联 issue
- 变动性质
- 测试或验证方式

可以先给出草稿，并把无法确认的地方保留为待补充项；若用户要求直接创建 PR，也必须先说明缺失项并等待确认。

## 执行步骤

### 1. 检查仓库和 PR 环境

建议先确认：

```bash
git status --short
git branch --show-current
git remote -v
gh auth status
```

若 `gh` 不可用、未登录、当前不在 git 仓库、或当前分支不适合提 PR，应先说明问题，不要继续伪造结果。

### 2. 确定基线分支

不要默认就用 `master`，但要记住 `master` 是本仓库的默认分支，是最终兜底选项。按以下顺序判断：

1. 用户明确指定了 `base branch` -> 直接使用
2. 若当前分支存在可用的"来源线索"，优先根据真实 Git 信息推断：
   - `git branch -vv` 查看 tracking / upstream
   - `git reflog show <current-branch>` 查看是否能看出"从哪条分支 checkout 出来"
   - 必要时结合 `git merge-base HEAD <candidate-branch>` 比较分叉点
3. 若能较可靠判断"当前分支是从某条分支切出来的"，优先使用该分支作为 `base`
4. 若无法可靠推断，再退回 `master`

建议查看：

```bash
git branch --show-current
git branch -vv
git reflog show --date=local $(git branch --show-current)
git remote show origin
```

注意：

- tracking / upstream 只能作为线索，不等于绝对正确的"父分支"
- `reflog` 若已清理，可能无法得到结果
- 若推断结果不够确定，要在草稿中明确标注为"推断值"

#### 新功能分支的额外提醒

如果改动性质判断为 `feat` / 新功能，应提醒用户确认改动意图与目标分支是否匹配（例如本应只修正某个数据条目，却改动了站点逻辑）。

此提醒只用于确认工作流，不要擅自改 base。

### 3. 收集本分支全部改动

至少查看：

```bash
git log --oneline <base>..HEAD
git diff --stat <base>...HEAD
git diff <base>...HEAD
```

必要时再看：

```bash
git diff --name-only <base>...HEAD
```

归纳时要覆盖该分支会进入 PR 的全部提交，而不是只写最后一次改动。

### 4. 判断 PR 类型

必须根据"主目的"判断，不要仅因为改动里包含逻辑变更就默认写成 `fix`。

优先判断顺序：

1. 是否主要是文档、说明文本改动（`CONTRIBUTING.md`、README、注释）
   - 是：优先考虑 `docs`
2. 是否主要是 CI、workflow、脚本、数据同步、生成流程等改动
   - 是：优先考虑 `ci` / `build` / `chore`
3. 是否主要是数据收录与修正（`packages/data-*` 下的条目）
   - 是：考虑 `feat(data-*)` / `fix(data-*)` / `chore(data-*)`
4. 是否主要是站点 UI 或服务端接口的真实缺陷修复
   - 是：考虑 `fix`
5. 是否主要是站点新增能力
   - 是：考虑 `feat`
6. 是否主要是重构、类型、性能等专项改动
   - 是：使用 `refactor` / `perf`

判断时以"用户感知的主结果"为准，不要被单个文件或单个 commit 干扰。

例如：

- 新增/修正一个 Vite 插件收录条目 -> `feat(data-plugins)` / `fix(data-plugins)`
- 修 index.db 生成逻辑 -> `fix(db)`
- 数据类型定义调整 -> `refactor(schema)`
- 官网页面样式或交互问题 -> `fix(ui)`
- workflow / action 调整 -> `ci`
- 依赖升级 -> `chore(deps)`

### 5. 归纳 PR 的核心信息

至少整理出：

- 变动性质：用标题的 `type(scope)` 表达
- 关联 Issue：填 issue 链接或 `close #xxxx` / `fix #xxxx`
- 背景：说明问题背景与处理方式
- 验证方式：说明如何确认改动生效

### 6. 检查本地验证

生成草稿前建议确认本地已通过：

```bash
pnpm lint
pnpm typecheck
```

数据类改动还需确认已运行 `pnpm generate:db` 且 `server/assets` 下的 index.db 已更新。

另外注意仓库的 Git 钩子：

- **pre-commit** 的 `lint-staged` 会对暂存文件自动执行 `eslint --fix`
- **commit-msg** 的 `verify-git-commit` 会校验提交信息格式

若分支上存在不符合 Conventional Commits 的历史提交，无法逐个重写时，PR 标题也应保持规范，不要跟随坏提交的风格。

### 7. 生成 PR 标题

标题要求：

- 按下方"写法要求 -> 标题"生成
- 覆盖整条分支的主要目标
- 不要照搬单个 commit message
- `type` 要与第 4 步判断一致

### 8. 按固定结构产出 PR 正文草稿

填写时遵守：

- 保留"背景 / 改动内容 / 关联 Issue / 验证方式"四个 section
- 内容尽量具体，但不要写成长篇说明
- 若涉及 UI 变化，提醒可补截图或 GIF
- 若某信息尚未确认，要显式标出来，不要假装确定

### 9. 先给用户确认

输出时至少包含：

- `Base branch`
- `PR title`
- `PR body`
- 需要用户补充或确认的点

明确询问用户是否：

- 直接创建 PR
- 先修改后再创建

没有明确确认前，不得执行 `gh pr create`。

### 10. 创建 PR

只有在用户明确确认后，才执行。

执行前再次检查：

```bash
git branch -vv
git remote -v
gh repo view --json nameWithOwner
```

要求：

1. 确认当前分支的 tracking remote 和远端分支正确
2. 确认 PR 的目标仓库是 `vuejs-community/vuejs-community`，不要依赖 `gh` 默认推断
3. 若 tracking remote 缺失、指向不明确、或不是预期 fork，先向用户确认，不要默认推送
4. 只有在推送目标 remote 明确无误时，才推送当前分支
5. 使用已确认过的标题和正文执行 `gh pr create`

若需要推送，优先使用明确的远端与分支名，例如：

```bash
git push -u <remote> HEAD
```

建议形式：

```bash
gh pr create --repo vuejs-community/vuejs-community --base <base> --title "<title>" --body "$(cat <<'EOF'
<body>
EOF
)"
```

创建成功后，返回 PR 链接，并提醒用户：

- CI 会自动执行 `pnpm lint`；autofix 机器人若发现可修复项会直接提交到 PR，无需为 lint 报错反复手动修改
- 数据类 PR 可能与每日数据同步工作流（github-actions[bot] 的自动提交）冲突，合并前注意 rebase

## 写法要求

### 标题

- 必须是英文
- 默认先判断 `type`，再决定是否需要 `scope`
- 优先使用 `type: subject` 或 `type(scope): subject`
- 优先写结果，不写过程
- 避免 `update`, `fix issues`, `misc changes` 这类空话
- 若分支包含多类小改动，提炼一个更高层概括

常用 `type` 参考（与 `CONTRIBUTING.md` 提交规范一致）：

- `feat`：新增能力
- `fix`：修复问题
- `docs`：文档或说明
- `style`：格式调整
- `refactor`：重构
- `perf`：性能优化
- `test`：测试改动
- `build`：构建或生成流程
- `ci`：CI 或 workflow
- `chore`：杂项维护
- `revert`：回滚

`scope` 使用规则：

- 改动集中在单个包或模块时再加，如 `feat(data-nuxt): ...`
- 常用 `scope`：`db`、`data-nuxt`、`data-plugins`、`data-component`、`data-hooks`、`data-ui`、`schema`、`shared`、`ui`、`deps`
- 若没有明显聚焦对象，就不要硬加 `scope`
- 不要把目录名机械塞进 `scope`

### 背景

- 先写要解决的问题
- 再写采用了什么方案
- 若涉及站点交互、数据展示或生成产物的变化，点明外部可感知差异

### 改动内容

- 归纳为条目，不逐文件流水账
- 数据类 PR 注明影响的条目（新增/修正了哪些收录项）

### 验证方式

- 说明已运行 `pnpm lint`、`pnpm typecheck`
- 数据类改动说明是否运行了 `pnpm generate:db`
- UI 改动建议附截图或 GIF

## 参考

更多类型判断、基线分支建议、确认话术与标题示例见 `references/notes-and-examples.md`。
