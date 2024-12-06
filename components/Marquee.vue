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
  <div class="marquee-container">
    <div class="marquee">
      <div
        v-for="user in users.concat(users)"
        :key="user.id"
        class="w-72 h-44 bg-gray-100 rounded-xl p-4 flex-col inline-block mr-4"
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
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100vw;
}

.marquee {
  display: inline-flex;
  animation: marquee-scroll 40s linear infinite;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
