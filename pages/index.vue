<script lang="ts" setup>
import { Button, Heading, Text } from '@mindenit/ui'
import { users } from '~/assets/mockDataUsers'
import Marquee from '~/components/TheMarquee.vue'
</script>

<template>
  <main
    class="container flex h-full w-full flex-col items-center justify-center px-6 py-12 text-center"
  >
    <div class="mb-20 space-y-7">
      <Text
        class="mb-8 inline-block rounded-3xl border border-fiord-300 bg-fiord-100 px-10 py-2 text-black shadow-md dark:border-fiord-700 dark:bg-fiord-900 dark:text-white"
        size="large"
      >
        Вітаємо в бета версії!
      </Text>
      <Heading size="large" class="font-bold text-gray-800">
        Всі бариги в одному місці
      </Heading>
      <Text size="subtitle" class="max-w-[585px] px-10 leading-5 text-gray-600">
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
