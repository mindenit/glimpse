<script lang="ts" setup>
import { Text, Heading, Button } from '@mindenit/ui'
import Marquee from '~/components/TheMarquee.vue'
import { users } from '~/assets/mockDataUsers'

definePageMeta({
  layout: 'main',
})
</script>

<template>
  <main
    class="container flex flex-col items-center justify-center w-full h-full px-6 py-12 text-center"
  >
    <div class="space-y-7 mb-20">
      <Text
        class="px-10 py-2 mb-8 border rounded-3xl inline-block shadow-md bg-white/70 border-gray-300 text-gray-800 dark:bg-gray-800/70 dark:border-gray-600 dark:text-gray-200"
        size="large"
      >
        Вітаємо в бета версії!
      </Text>
      <Heading size="large" class="font-bold text-gray-800">
        Всі бариги в одному місці
      </Heading>
      <Text size="subtitle" class="text-gray-600 max-w-[585px] px-10 leading-5">
        Надійність — понад усе! Переглядайте реальні відгуки, обирайте найкращих
        спеціалістів або демонструйте свої навички тисячам клієнтів. Все просто,
        прозоро й швидко!
      </Text>
      <Button class="mt-10" size="lg" variant="primary" :as-child="true">
        <NuxtLink to="/signup"> Почати безкоштовно </NuxtLink>
      </Button>
    </div>
    <Marquee :users="users" />
  </main>
</template>
