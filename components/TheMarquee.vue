<script lang="ts" setup>
import { Avatar, Text } from '@mindenit/ui'

interface User {
  id: number
  username: string
  avatar: string
  comment: string
}

defineProps<{
  users: User[]
}>()
</script>

<template>
  <div class="w-screen overflow-hidden whitespace-nowrap">
    <div class="inline-flex animate-marqueeScroll gap-4">
      <div
        v-for="user in users.concat(users)"
        :key="user.id"
        class="inline-block h-32 w-72 flex-col rounded-xl border border-fiord-300 bg-fiord-100 p-4 text-black shadow-lg dark:border-fiord-700 dark:bg-fiord-900 dark:text-white"
      >
        <div class="flex items-center gap-2 pb-1">
          <Avatar
            :url="user.avatar || '/default-avatar.png'"
            alt="User Avatar"
          />
          <Text size="small" class="text-sm font-semibold">{{
            user.username
          }}</Text>
        </div>
        <Text
          size="small"
          class="line-clamp-3 w-full overflow-hidden overflow-ellipsis whitespace-normal text-left"
        >
          {{ user.comment }}
        </Text>
      </div>
    </div>
  </div>
</template>
