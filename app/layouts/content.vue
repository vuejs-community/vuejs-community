<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main class="flex-1">
      <div class="container px-0 border-x">
        <slot />
        <CtaContent />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
