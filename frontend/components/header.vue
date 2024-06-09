<script setup lang="ts">
const route = useRoute();
const buttonStyle = (href: string) => computed(() => route.path === href ? 'primary' : 'secondary');

const headerLinks = [
  { href: '/', label: 'All feedbacks' },
  { href: '/new', label: 'New feedback' },
];
</script>

<template>
  <header class="border-b border-slate-200 px-2 md:px-4 select-none overflow-hidden flex-none">
    <div class="mx-auto flex flex-wrap items-center justify-between h-16">
      <NuxtLink href="/" class="text-2xl font-bold text-slate-900 flex items-center gap-2">
        <NuxtImg src="/logo/logo.png" alt="Suggestion Box" class="h-12 w-12" />
        <h1 class="text-lg font-bold text-emerald-800 hidden md:block">
          Suggestion Box
        </h1>
      </NuxtLink>

      <nav class="flex gap-5">
        <LinkButton v-for="link in headerLinks" :key="link.href" :href="link.href"
          :ButtonStyleType="buttonStyle(link.href).value" :ariaLabel="link.label">
          {{ link.label }}
        </LinkButton>
      </nav>

    </div>
  </header>
</template>
