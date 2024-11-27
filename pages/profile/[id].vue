<template>
  <main class="flex flex-col text-white">
    <div class="container max-w-screen-xl mx-auto bg-fiord-800 rounded-t-xl">
      <div class="flex flex-col lg:flex-row">
        <!-- Sidebar -->
        <div class="flex flex-col lg:w-1/3 p-5 bg-fiord-900 gap-10">
          <!-- General Info -->
          <div class="flex flex-row gap-5 items-center">
            <div class="text-black">
              <Avatar fallback="JD" size="80px" class="rounded-md" />
            </div>
            <div>
              <Heading size="small">{{ mockData.nickname }}</Heading>
              <div class="mt-3 flex gap-2 flex-wrap">
                <Badge color="success">{{ mockData.registeredAt }}</Badge>
                <Badge color="danger">Підозріла людина</Badge>
                <Badge color="success">Перевірений користувач</Badge>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="w-full">
              <Text size="subtitle" type="subtitle">{{
                mockData.description
              }}</Text>
            </div>
            <div class="flex justify-end mt-5 gap-3">
              <Button
                variant="primary"
                aria-label="Contact User"
                @click="handleContact"
                >Зв'язатись</Button
              >
              <Button
                variant="danger"
                aria-label="Report User"
                @click="handleReport"
                >Поскаржитися</Button
              >
            </div>
          </div>
          <hr class="border-t border-fiord-700 my-5" />
          <!-- Statistics Section -->
          <div class="flex flex-col gap-5">
            <Heading size="medium">Статистика</Heading>
            <div class="flex flex-col">
              <Heading size="tiny"
                >Кількість відгуків: {{ mockData.numOfFeedbacks }}</Heading
              >
              <Heading size="tiny"
                >Кількість скарг: {{ mockData.numOfComplaints }}</Heading
              >
            </div>
          </div>
        </div>

        <!-- Feedback Section -->
        <div class="flex flex-col lg:w-2/3">
          <div class="p-5 rounded-b-3xl">
            <Heading
              size="large"
              class="text-black my-5 p-5 rounded-lg w-full break-words sm:truncate lg:break-normal"
            >
              Відгуки про {{ mockData.nickname }}
            </Heading>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                v-if="!mockData.feedbacks.length"
                class="text-center text-white"
              >
                Немає відгуків
              </div>
              <div
                v-for="(feedback, index) in mockData.feedbacks"
                :key="index"
                class="bg-fiord-900 rounded-md p-5 shadow-sm flex flex-col gap-3 cursor-pointer hover:shadow-xl hover:animate-zoomIn transition-all duration-300 h-56 lg:h-72"
              >
                <div class="flex items-center gap-3">
                  <Avatar
                    fallback="AU"
                    size="40px"
                    class="rounded-full bg-gray-200 flex-shrink-0"
                  />
                  <Heading size="tiny" class="truncate">{{
                    feedback.authorNickname
                  }}</Heading>
                </div>
                <Text size="small" class="mt-2 font-semibold"
                  >Оцінка: {{ feedback.rating }}</Text
                >
                <Text size="small" class="mt-2">{{ feedback.text }}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Avatar, Heading, Badge, Text, Button } from '@mindenit/ui'

interface Feedback {
  authorNickname: string
  rating: string
  text: string
}

interface MockData {
  nickname: string
  registeredAt: string
  description: string
  numOfFeedbacks: number
  numOfComplaints: number
  feedbacks: Feedback[]
}

const mockData: MockData = {
  nickname: 'StarJohn224',
  registeredAt: 'З вересня 2024 р.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna nec consectetur maximus. Fusce in euismod tempor inc tempor et just euismod. Fusce in euismod. Fusce in euism. Fusce in euismod.',
  numOfFeedbacks: 15,
  numOfComplaints: 0,
  feedbacks: [
    {
      authorNickname: 'HappyCustomer01',
      rating: '5/5',
      text: 'Відмінна співпраця! Все було зроблено вчасно.',
    },
    {
      authorNickname: 'GoodGuy123',
      rating: '4/5',
      text: 'Хороший результат, але були невеликі затримки.',
    },
    {
      authorNickname: 'TechGuru',
      rating: '5/5',
      text: 'Професійний підхід та відмінна якість!',
    },
    {
      authorNickname: 'QuickFix',
      rating: '3/5',
      text: 'Все добре, але очікував трохи кращого виконання.',
    },
    {
      authorNickname: 'FriendlyUser',
      rating: '5/5',
      text: 'Чудова робота, рекомендую до співпраці!',
    },
  ],
}

const handleContact = () => {
  alert("Ви натиснули кнопку 'Зв'язатись'")
}

const handleReport = () => {
  alert("Ви натиснули кнопку 'Поскаржитися'")
}
</script>
