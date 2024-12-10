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
  <div class="overflow-hidden whitespace-nowrap w-screen">
    <div class="animate-marqueeScroll inline-flex gap-4">
      <div
        v-for="user in users.concat(users)"
        :key="user.id"
        class="w-72 h-32 bg-fiord-100 dark:bg-fiord-900 text-black dark:text-white rounded-xl p-4 flex-col inline-block border border-fiord-300 dark:border-fiord-700 shadow-lg"
      >
        <div class="flex items-center gap-2 pb-1">
          <Avatar
            :url="user.avatar || '/default-avatar.png'"
            alt="User Avatar"
          />
          <Text size="small" class="font-semibold text-sm">{{
            user.username
          }}</Text>
        </div>
        <Text
          size="small"
          class="w-full overflow-ellipsis whitespace-normal overflow-hidden text-left line-clamp-3"
        >
          {{ user.comment }}
        </Text>
      </div>
    </div>
  </div>
</template>
