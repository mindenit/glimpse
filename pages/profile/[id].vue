<script lang="ts" setup>
import {
  Avatar,
  Badge,
  Button,
  Heading,
  IconButton,
  Text,
  TextAreaInput,
  TextAreaRoot,
} from '@mindenit/ui'
import TheStar from '~/components/ui/TheStar.vue'

const route = useRoute()
console.log(route.params.id)

const stars = ref(3)

interface Feedback {
  authorNickname: string
  rating: string
  text: string
}

interface BankLink {
  [bankName: string]: string
}

interface MockData {
  firstname: string
  lastname: string
  nickname: string
  registeredAt: string
  description: string
  bankLink: BankLink
  numOfComplaints: number
  numOfRequests: number
  feedbacks: Feedback[]
  services: string[]
}

const mockData: MockData = {
  firstname: 'John',
  lastname: 'Doe',
  nickname: '@starJohn224',
  registeredAt: '2024-11-29',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna nec consectetur maximus. Fusce in euismod tempor inc tempor et just euismod. Fusce in euismod. Fusce in euism. Fusce in euismod.',
  bankLink: { Монобанк: 'https://www.privat24.ua/send/00b59' },
  numOfComplaints: 0,
  numOfRequests: 5,
  feedbacks: [
    {
      authorNickname: 'HappyCustomer01',
      rating: '5',
      text: 'Відмінна співпраця! Все було зроблено вчасно.',
    },
    {
      authorNickname: 'GoodGuy123',
      rating: '4',
      text: 'Хороший результат, але були невеликі затримки.',
    },
    {
      authorNickname: 'TechGuru',
      rating: '5',
      text: 'Професійний підхід та відмінна якість!',
    },
    {
      authorNickname: 'QuickFix',
      rating: '3',
      text: 'Все добре, але очікував трохи кращого виконання.',
    },
    {
      authorNickname: 'FriendlyUser',
      rating: '5',
      text: 'Чудова робота, рекомендую до співпраці!',
    },
    {
      authorNickname: 'HappyCustomer01',
      rating: '5',
      text: 'Відмінна співпраця! Все було зроблено вчасно.',
    },
    {
      authorNickname: 'GoodGuy123',
      rating: '4',
      text: 'Хороший результат, але були невеликі затримки.',
    },
    {
      authorNickname: 'TechGuru',
      rating: '5',
      text: 'Професійний підхід та відмінна якість!',
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
</script>

<template>
  <main class="dark:text-white">
    <div
      class="container mx-auto flex max-w-screen-2xl flex-col gap-5 p-2 md:flex-row"
    >
      <section class="flex basis-1/3 flex-col p-2">
        <div
          class="relative flex h-[150px] w-full items-end rounded-2xl bg-[url('https://picsum.photos/400/400')] bg-cover bg-no-repeat p-4 dark:bg-fiord-900"
        >
          <div class="absolute right-4 top-4 inline-flex gap-1">
            <IconButton variant="danger" icon="ph:hammer" />
            <IconButton icon="ph:pen" />
          </div>
          <Avatar
            size="80px"
            :fallback="mockData.firstname"
            url="https://picsum.photos/80/80"
            class="absolute bottom-[-60px] !size-[120px] border-8 border-fiord-900"
          />
          <Button class="absolute bottom-[-50px] right-4">Зв'язатись</Button>
        </div>
        <div class="flex flex-col gap-5">
          <div class="mt-16 flex flex-col">
            <Heading size="small"
              >{{ mockData.firstname }} {{ mockData.lastname }}</Heading
            >
            <h1 class="text-base font-medium dark:text-fiord-500">
              {{ mockData.nickname }}
            </h1>
          </div>
          <div>
            <Text size="paragraph"> {{ mockData.description }}</Text>
          </div>
          <div class="flex flex-col gap-4 rounded-xl p-4 dark:bg-fiord-900">
            <Heading size="small" class="text-center !text-base !font-medium">
              Статистика
            </Heading>
            <div class="flex flex-col justify-between gap-4">
              <div class="flex flex-col gap-4 lg:flex-row">
                <!-- Reviews Block -->
                <div
                  class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg bg-fiord-800 py-4 transition-transform duration-300 hover:scale-105"
                >
                  <Heading size="small" class="!text-christi-400">{{
                    mockData.feedbacks.length
                  }}</Heading>
                  <Text size="small">Кількість відгуків</Text>
                </div>
                <!-- Complaints Block -->
                <div
                  class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg bg-fiord-800 py-4 transition-transform duration-300 hover:scale-105"
                >
                  <Heading size="small" class="!text-amaranth-400">{{
                    mockData.numOfComplaints
                  }}</Heading>
                  <Text size="small">Кількість скарг</Text>
                </div>
              </div>
              <div>
                <div
                  class="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg bg-fiord-800 py-4 transition-transform duration-300 hover:scale-105"
                >
                  <Heading size="small" class="!text-royal-blue-300">{{
                    mockData.numOfRequests
                  }}</Heading>
                  <Text size="small">Кількість звернень</Text>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-1 rounded-xl p-4 dark:bg-fiord-900">
            <Heading size="small" class="!text-base !font-medium"
              >Послуги</Heading
            >
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="(service, index) in mockData.services"
                :key="index"
                class="cursor-pointer transition-transform duration-300 hover:scale-105"
                >{{ service }}</Badge
              >
            </div>
          </div>
        </div>
      </section>
      <section class="flex basis-2/3 flex-col gap-5 px-5">
        <div class="w-full rounded-2xl p-4 dark:bg-fiord-900">
          <Heading size="small" class="mb-4">Залиште відгук</Heading>
          <TextAreaRoot class="mb-4">
            <TextAreaInput placeholder="Ваш відгук" />
          </TextAreaRoot>
          <div class="flex justify-end">
            <Button class="mt-2">Відправити</Button>
          </div>
        </div>
        <div
          v-for="(feedback, index) in mockData.feedbacks"
          :key="index"
          class="w-full rounded-2xl p-4 transition-transform duration-300 hover:scale-105 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
        >
          <div class="inline-flex items-center gap-2">
            <Avatar
              size="32px"
              fallback="JD"
              url="https://picsum.photos/32/32"
            />
            <Text size="paragraph">{{ feedback.authorNickname }}</Text>
            <TheStar v-model="stars" :max-stars="5" />
          </div>
          <Text size="paragraph">{{ feedback.text }}</Text>
        </div>
      </section>
    </div>
  </main>
</template>
