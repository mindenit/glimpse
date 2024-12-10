<script lang="ts" setup>
import { Avatar } from '@mindenit/ui'

const links = [
  { name: 'Головна', path: '/' },
  { name: 'Користувачі', path: '/users' },
  { name: 'FAQ', path: '/faq' },
]

const isLoggedIn = ref(false)

const router = useRouter()

const handleAvatarClick = () => {
  if (isLoggedIn.value) {
    router.push('/profile')
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <header
    class="relative grid w-full grid-cols-[auto_auto] items-center px-4 py-2 md:grid-cols-[1fr_auto_1fr]"
  >
    <div class="flex items-center">
      <TheLogo />
    </div>

    <div
      class="z-50 flex h-14 items-center justify-center gap-10 rounded-xl border border-fiord-300 bg-fiord-50 px-10 dark:border-fiord-700 dark:bg-fiord-900 dark:text-white max-md:fixed max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2 max-md:transform"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="transition hover:text-royal-blue-500"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <div class="flex items-center justify-end gap-4">
      <ThemeSwitcher />

      <div
        class="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full"
        @click="handleAvatarClick"
      >
        <Avatar
          size="40px"
          :url="'/default-avatar.png'"
          alt="User Avatar"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </header>
</template>
