<script lang="ts" setup>
import { Text, Heading, Button } from '@mindenit/ui'
import Marquee from '~/components/Marquee.vue'
import { users } from '~/assets/mockDataUsers'

definePageMeta({
  layout: 'main',
})

const router = useRouter()

const redirectToSignup = () => router.push('/signup')
</script>

<template>
  <main
    class="container flex flex-col items-center justify-center w-full h-full px-6 py-12 text-center"
  >
    <div class="space-y-7 mb-20">
      <Text
        class="px-10 py-2 mb-8 border rounded-md border-gray-500 inline-block"
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
      <Button
        class="mt-10"
        size="lg"
        variant="primary"
        @click="redirectToSignup"
      >
        Почати безкоштовно
      </Button>
    </div>
    <Marquee :users="users" />
  </main>
</template>
