<script lang="ts" setup>
import { Avatar, Text } from '@mindenit/ui'
import TheStar from './ui/TheStar.vue'
defineProps({
  name: String,
  username: String,
  avatarUrl: String,
  description: String,
  stars: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="h-full w-full rounded-3xl border border-fiord-300 bg-fiord-100 p-4 px-4 py-4 text-black shadow-lg dark:border-fiord-700 dark:bg-fiord-900 dark:text-white sm:px-6 sm:py-6"
  >
    <div class="flex items-start justify-between gap-4 pb-2 sm:gap-3">
      <div class="flex min-w-0 gap-3 text-left">
        <Avatar
          size="48px"
          :url="avatarUrl || '/default-avatar.png'"
          :alt="`${name} Avatar`"
          class="h-12 w-12 sm:h-16 sm:w-16"
        />
        <div class="">
          <Text size="large" class="text-lg font-semibold sm:text-xl">
            {{ name }}
          </Text>
          <Text
            size="small"
            class="text-sm font-semibold text-gray-500 sm:text-base"
          >
            {{ username }}
          </Text>
        </div>
      </div>
      <div class="flex-shrink-0">
        <TheStar :model-value="stars" :max-stars="5" />
      </div>
    </div>

    <Text
      size="small"
      class="line-clamp-3 w-full overflow-hidden overflow-ellipsis whitespace-normal text-left text-sm text-gray-700 sm:text-base"
    >
      {{ description }}
    </Text>
  </div>
</template>
