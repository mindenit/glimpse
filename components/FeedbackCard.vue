<template>
  <div
    class="bg-fiord-900 rounded-md p-5 shadow-sm flex flex-col gap-3 cursor-pointer hover:scale-105 hover:shadow-fiord-700 hover:shadow-lg transition-transform duration-300 h-40 lg:h-56"
  >
    <div class="flex items-center gap-3">
      <Avatar
        fallback="AU"
        size="40px"
        class="rounded-full bg-fiord-200 flex-shrink-0"
      />
      <Heading size="tiny" class="truncate text-christi-400">{{
        feedback.authorNickname
      }}</Heading>
    </div>
    <Text size="small" class="mt-2 font-semibold text-christi-500"
      >Оцінка: {{ feedback.rating }}</Text
    >
    <Text size="small" class="mt-2 text-fiord-400">{{ feedback.text }}</Text>
  </div>
</template>

<script setup lang="ts">
import { Avatar, Heading, Text } from '@mindenit/ui'

interface Feedback {
  authorNickname: string
  rating: string
  text: string
}

defineProps({
  feedback: {
    type: Object as () => Feedback,
    required: true,
  },
})
</script>