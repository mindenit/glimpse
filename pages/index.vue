<script lang="ts" setup>
import { Button, Heading, Text } from '@mindenit/ui'
import { users } from '~/assets/mockDataUsers'
import Marquee from '~/components/TheMarquee.vue'

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
        class="px-10 py-2 mb-8 border rounded-3xl inline-block shadow-md bg-fiord-100 dark:bg-fiord-900 text-black dark:text-white border-fiord-300 dark:border-fiord-700"
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
