<script setup lang="ts">
import { Avatar, Heading, Badge, Text, Button, Link } from '@mindenit/ui'

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
  services: string[]
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
  services: [
    'АтСс',
    'АтЗс',
    'ITJ',
    'АтСс',
    'АтЗс',
    'ITJ',
    'ITJ',
    'АтСс',
    'АтЗс',
    'ITJ',
  ],
}

const handleContact = () => {
  alert("Ви натиснули кнопку 'Зв'язатись'")
}

const handleReport = () => {
  alert("Ви натиснули кнопку 'Поскаржитися'")
}

const handleGiveFeedback = () => {
  alert("Ви натиснули кнопку 'Відгукнутися'")
}
</script>

<template>
  <main class="flex flex-col text-white">
    <div class="container max-w-screen-xl mx-auto bg-fiord-800 rounded-t-xl">
      <div class="flex flex-col lg:flex-row">
        <!-- Left Section | Sidebar -->
        <section class="flex flex-col lg:w-1/3 p-5 bg-fiord-900 gap-10">
          <!-- General Info -->
          <div class="flex flex-col gap-10">
            <div class="flex flex-row gap-5 items-center">
              <div class="text-black">
                <Avatar fallback="JD" size="80px" class="rounded-md" />
              </div>
              <div>
                <Heading size="small">{{ mockData.nickname }}</Heading>
                <div class="mt-3 flex gap-2 flex-wrap">
                  <Badge color="success">
                    <Icon name="ph:calendar-blank" />
                    {{ mockData.registeredAt }}
                  </Badge>
                  <Badge color="danger">
                    <Icon name="ph:warning" />
                    Підозріла людина
                  </Badge>
                  <Badge color="success">
                    <Icon name="ph:circle-wavy-check" />
                    Перевірений користувач
                  </Badge>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="w-full">
                <Text size="subtitle" type="subtitle">{{
                  mockData.description
                }}</Text>
              </div>
              <div class="flex justify-center mt-10 gap-10">
                <Button
                  variant="primary"
                  aria-label="Contact User"
                  @click="handleContact"
                >
                  <Icon name="ph:chat-circle-dots" />
                  Зв'язатись
                </Button>
                <Button
                  variant="danger"
                  aria-label="Report User"
                  @click="handleReport"
                >
                  <Icon name="ph:warning-circle" />
                  Поскаржитися
                </Button>
              </div>
            </div>
          </div>

          <hr class="border-t border-fiord-700" />

          <!-- Payment Details Section -->
          <div class="flex flex-col gap-5">
            <Heading size="medium">Реквізити для оплати</Heading>
            <div class="flex flex-col gap-1 w-full">
              <Text size="small">
                Посилання:
                <Link as-child>
                  <NuxtLink to="https://www.privat24.ua/send/00b59">
                    https://www.privat24.ua/send/00b59
                  </NuxtLink>
                </Link>
              </Text>
            </div>
          </div>

          <hr class="border-t border-fiord-700" />

          <!-- Services Section -->
          <div class="flex flex-col gap-5">
            <Heading size="medium">Послуги</Heading>
            <div
              class="flex flex-wrap gap-2 border-2 rounded-lg border-fiord-800 py-5 px-2"
            >
              <div
                v-if="!mockData.services.length"
                class="text-center text-fiord-400"
              >
                Немає послуг
              </div>
              <div v-for="(service, index) in mockData.services" :key="index">
                <Badge size="small">{{ service }}</Badge>
              </div>
            </div>
          </div>
        </section>

        <!-- Right Side Section -->
        <section class="flex flex-col lg:w-2/3">
          <!-- Statistics Section -->
          <div class="p-5">
            <Heading size="medium" class="text-center text-fiord-300 mb-5"
              >Статистика</Heading
            >
            <div class="grid grid-cols-2 gap-5">
              <div
                class="flex flex-col items-center bg-fiord-700 p-4 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-fiord-700 hover:shadow-lg cursor-pointer"
              >
                <div class="text-4xl font-bold text-green-400">
                  {{ mockData.numOfFeedbacks }}
                </div>
                <Text size="small" class="text-fiord-300 mt-2 text-center"
                  >Кількість відгуків</Text
                >
              </div>
              <div
                class="flex flex-col items-center bg-fiord-700 p-4 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-fiord-700 hover:shadow-lg cursor-pointer"
              >
                <div class="text-4xl font-bold text-amaranth-400">
                  {{ mockData.numOfComplaints }}
                </div>
                <Text size="small" class="text-fiord-300 mt-2 text-center"
                  >Кількість скарг</Text
                >
              </div>
            </div>
          </div>
          <!-- Feedback Section -->
          <div class="p-5 rounded-b-3xl">
            <div
              class="flex flex-col items-center justify-between lg:flex-row lg:mb-0 mb-5"
            >
              <Heading
                size="large"
                class="text-4xl text-black my-5 lg:my-5 lg:py-5 rounded-lg break-words sm:truncate lg:break-normal text-center lg:text-start"
              >
                Відгуки про {{ mockData.nickname }}
              </Heading>
              <Button
                variant="outlined"
                aria-label="Give feedback"
                @click="handleGiveFeedback"
              >
                <Icon name="ph:megaphone" />
                Залишити відгук
              </Button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                v-if="!mockData.feedbacks.length"
                class="text-center text-fiord-400"
              >
                Немає відгуків
              </div>
              <FeedbackCard
                v-for="(feedback, index) in mockData.feedbacks"
                :key="index"
                :feedback="feedback"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
