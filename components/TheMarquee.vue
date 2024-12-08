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
  <div
    class="overflow-hidden whitespace-nowrap w-screen bg-black/10 dark:bg-white/10 backdrop-blur-lg rounded-xl p-5"
  >
    <div class="marqueeScroll animate-marqueeScroll inline-flex">
      <div
        v-for="user in users.concat(users)"
        :key="user.id"
        class="w-72 h-32 bg-gray-100 rounded-xl p-4 flex-col inline-block mr-4"
      >
        <div class="flex items-center gap-2 pb-1">
          <Avatar
            :url="user.avatar || '/default-avatar.png'"
            alt="User Avatar"
          />
          <Text size="small" class="font-semibold dark:text-black">{{
            user.username
          }}</Text>
        </div>
        <Text
          size="small"
          class="text-gray-600 dark:text-gray-800 w-full text-ellipsis overflow-hidden text-justify"
        >
          {{ user.comment }}
        </Text>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
