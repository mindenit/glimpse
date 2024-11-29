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
  Link,
} from '@mindenit/ui'
import TheStar from '~/components/ui/TheStar.vue';

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
  <main
    class="container mx-auto dark:text-white py-2 h-[100dvh] flex md:flex-row flex-col gap-5"
  >
    <section class="flex flex-col basis-1/3 !h-full flex-shrink-0">
      <div
        class="dark:bg-fiord-900 w-full h-[150px] rounded-2xl bg-[url('https://picsum.photos/400/400')] bg-no-repeat bg-cover relative flex items-end p-4"
      >
        <div class="inline-flex gap-1 absolute top-4 right-4">
          <IconButton variant="danger" icon="ph:hammer" />
          <IconButton icon="ph:pen" />
        </div>
        <Avatar
          size="80px"
          :fallback="mockData.firstname"
          url="https://picsum.photos/80/80"
          class="absolute bottom-[-60px] border-8 border-fiord-900 !size-[120px]"
        />
        <Button class="absolute right-4 bottom-[-50px]">Зв'язатись</Button>
      </div>
      <div class="pt-16 flex flex-col gap-4">
        <div class="flex flex-col">
          <Heading size="small"
            >{{ mockData.firstname }} {{ mockData.lastname }}</Heading
          >
          <h1 class="text-base font-medium dark:text-fiord-500">
            {{ mockData.nickname }}
          </h1>
        </div>
        <Text size="paragraph"> {{ mockData.description }}</Text>
        <div class="dark:bg-fiord-900 rounded-xl p-4 flex flex-col gap-4">
          <Heading size="small" class="!text-base !font-medium text-center">
            Статистика
          </Heading>
          <div class="flex flex-col justify-between gap-4">
            <div class="flex gap-4">
              <!-- Reviews Block -->
              <div
                class="flex-1 flex flex-col items-center justify-center bg-fiord-800 rounded-lg py-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Heading size="small" class="!text-christi-400">{{
                  mockData.feedbacks.length
                }}</Heading>
                <Text size="small" class="">Кількість відгуків</Text>
              </div>
              <!-- Complaints Block -->
              <div
                class="flex-1 flex flex-col items-center justify-center bg-fiord-800 rounded-lg py-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Heading size="small" class="!text-amaranth-400">{{
                  mockData.numOfComplaints
                }}</Heading>
                <Text size="small" class="">Кількість скарг</Text>
              </div>
            </div>
            <div>
              <div
                class="flex-1 flex flex-col items-center justify-center bg-fiord-800 rounded-lg py-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Heading size="small" class="!text-royal-blue-300">{{
                  mockData.numOfRequests
                }}</Heading>
                <Text size="small" class="">Кількість звернень</Text>
              </div>
            </div>
          </div>
        </div>

        <div class="dark:bg-fiord-900 rounded-xl p-4 flex flex-col gap-1">
          <Heading size="small" class="!text-base !font-medium"
            >Послуги</Heading
          >
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="(service, index) in mockData.services"
              :key="index"
              class="hover:scale-105 transition-transform duration-300 cursor-pointer"
              >{{ service }}</Badge
            >
          </div>
        </div>

        <div class="dark:bg-fiord-900 rounded-xl p-4 flex flex-col gap-1">
          <Heading size="small" class="!text-base !font-medium"
            >Реквізити</Heading
          >
          <div class="inline-flex items-center justify-between w-full">
            <Text size="small">{{ Object.keys(mockData.bankLink)[0] }}</Text>
            <Link as-child>
              <NuxtLink :to="Object.values(mockData.bankLink)[0]">
                {{ Object.values(mockData.bankLink)[0] }}
              </NuxtLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col !h-full basis-2/3 gap-2 px-5">
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4 mb-2">
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
        class="dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 w-full rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
      >
        <div class="inline-flex gap-2 items-center">
          <Avatar size="32px" fallback="JD" url="https://picsum.photos/32/32" />
          <Text size="paragraph">{{ feedback.authorNickname }}</Text>
          <div class="inline-flex">
            <TheStar v-model="stars" :max-stars="5" />
          </div>
        </div>
        <Text size="paragraph">{{ feedback.text }}</Text>
      </div>
    </section>
  </main>
</template>
