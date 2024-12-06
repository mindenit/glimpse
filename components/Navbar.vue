<script lang="ts" setup>
const links = [
  { name: 'Головна', path: '/' },
  { name: 'Користувачі', path: '/users' },
  { name: 'FAQ', path: '/faq' },
]
</script>

<template>
  <header
    class="grid grid-cols-[auto_auto] md:grid-cols-[1fr_auto_1fr] w-full items-center relative px-4 py-2"
  >
    <div class="flex items-center">
      <Logo />
    </div>

    <div
      class="z-50 flex justify-center items-center h-14 px-10 bg-fiord-50 border-fiord-300 dark:bg-fiord-900 rounded-xl border dark:border-fiord-700 gap-10 max-md:fixed max-md:bottom-4 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 dark:text-white"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="hover:text-royal-blue-500 transition"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <div class="flex justify-end items-center">
      <ThemeSwitcher />
    </div>
  </header>
</template>
