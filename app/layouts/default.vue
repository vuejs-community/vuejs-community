<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />

    <!-- Main -->
    <!-- border-x border-dashed -->
    <main class="mx-auto w-full max-w-7xl flex-1">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
