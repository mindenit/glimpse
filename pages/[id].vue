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

const route = useRoute()
console.log(route.params.id)

const stars = ref(3)
</script>

<template>
  <div
    class="container mx-auto dark:text-white py-2 h-[100dvh] flex md:flex-row flex-col gap-2"
  >
    <div class="flex flex-col !w-[400px] !h-full flex-shrink-0">
      <div
        class="dark:bg-fiord-900 w-full h-[150px] rounded-2xl bg-[url('https://picsum.photos/400/400')] bg-no-repeat bg-cover relative flex items-end p-4"
      >
        <div class="inline-flex gap-1 absolute top-4 right-4">
          <IconButton variant="danger" icon="ph:hammer" />
          <IconButton icon="ph:pen" />
        </div>
        <Avatar
          size="80px"
          fallback="FB"
          url="https://picsum.photos/80/80"
          class="absolute bottom-[-60px] border-8 border-fiord-900 !size-[120px]"
        />
        <Button class="absolute right-4 bottom-[-50px]">Зв'язатись</Button>
      </div>
      <div class="pt-16 flex flex-col gap-4">
        <div class="flex flex-col">
          <Heading size="small">John Doe</Heading>
          <h1 class="text-base font-medium dark:text-fiord-500">@johndoe</h1>
        </div>
        <Text size="paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente at
          sequi, tempora perspiciatis, consectetur ipsam aut voluptatem atque
          rerum id eius ullam! Incidunt magnam dolore nemo ducimus! Quis, quidem
          rem!</Text
        >
        <!-- <div class="dark:bg-fiord-900 rounded-xl p-4 flex flex-col gap-1">
          <Heading size="small" class="!text-base !font-medium"
            >Статистика</Heading
          >
          <div class="inline-flex items-center justify-between w-full">
            <Text size="small">Відгуки</Text>
            <Text size="small">15</Text>
          </div>
          <div class="inline-flex items-center justify-between w-full">
            <Text size="small">Скарки</Text>
            <Text size="small">2</Text>
          </div>
        </div> -->

        <div class="dark:bg-fiord-900 rounded-xl p-4 flex flex-col gap-1">
          <Heading size="small" class="!text-base !font-medium"
            >Послуги</Heading
          >
          <div class="flex flex-wrap gap-2">
            <Badge>ООП</Badge>
            <Badge>СПро</Badge>
            <Badge>МЗЦОІ</Badge>
            <Badge>ОБД</Badge>
            <Badge>Про</Badge>
            <Badge>КЛог</Badge>
          </div>
        </div>

        <div class="dark:bg-fiord-900 rounded-xl p-4 flex flex-col gap-1">
          <Heading size="small" class="!text-base !font-medium"
            >Реквізити</Heading
          >
          <div class="inline-flex items-center justify-between w-full">
            <Text size="small">Монобанк</Text>
            <Text size="small">123456789123456</Text>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col !h-full w-full gap-2">
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4 mb-2">
        <Heading size="small">Залиште відгук</Heading>
        <TextAreaRoot>
          <TextAreaInput placeholder="Ваш відгук" />
        </TextAreaRoot>
        <Button class="mt-2">Відправити</Button>
      </div>
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4">
        <div class="inline-flex gap-2 items-center">
          <Avatar size="32px" fallback="JD" url="https://picsum.photos/32/32" />
          <Text size="paragraph">John Doe @johndoe</Text>
          <div class="inline-flex">
            <TheStar v-model="stars" :max-stars="5" />
          </div>
        </div>
        <Text size="paragraph"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          numquam accusamus rerum excepturi iste, beatae facere voluptatibus ad,
          quis aliquid possimus ipsa quidem at odio similique nisi, vel deleniti
          iure.</Text
        >
      </div>
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4">
        <div class="inline-flex gap-2 items-center">
          <Avatar size="32px" fallback="JD" url="https://picsum.photos/32/32" />
          <Text size="paragraph">John Doe @johndoe</Text>
          <div class="inline-flex">
            <TheStar v-model="stars" :max-stars="5" />
          </div>
        </div>
        <Text size="paragraph"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          numquam accusamus rerum excepturi iste, beatae facere voluptatibus ad,
          quis aliquid possimus ipsa quidem at odio similique nisi, vel deleniti
          iure.</Text
        >
      </div>
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4">
        <div class="inline-flex gap-2 items-center">
          <Avatar size="32px" fallback="JD" url="https://picsum.photos/32/32" />
          <Text size="paragraph">John Doe @johndoe</Text>
          <div class="inline-flex">
            <TheStar v-model="stars" :max-stars="5" />
          </div>
        </div>
        <Text size="paragraph"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          numquam accusamus rerum excepturi iste, beatae facere voluptatibus ad,
          quis aliquid possimus ipsa quidem at odio similique nisi, vel deleniti
          iure.</Text
        >
      </div>
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4">
        <div class="inline-flex gap-2 items-center">
          <Avatar size="32px" fallback="JD" url="https://picsum.photos/32/32" />
          <Text size="paragraph">John Doe @johndoe</Text>
          <div class="inline-flex">
            <TheStar v-model="stars" :max-stars="5" />
          </div>
        </div>
        <Text size="paragraph"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          numquam accusamus rerum excepturi iste, beatae facere voluptatibus ad,
          quis aliquid possimus ipsa quidem at odio similique nisi, vel deleniti
          iure.</Text
        >
      </div>
      <div class="dark:bg-fiord-900 w-full rounded-2xl p-4">
        <div class="inline-flex gap-2 items-center">
          <Avatar size="32px" fallback="JD" url="https://picsum.photos/32/32" />
          <Text size="paragraph">John Doe @johndoe</Text>
          <div class="inline-flex">
            <TheStar v-model="stars" :max-stars="5" />
          </div>
        </div>
        <Text size="paragraph"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          numquam accusamus rerum excepturi iste, beatae facere voluptatibus ad,
          quis aliquid possimus ipsa quidem at odio similique nisi, vel deleniti
          iure.</Text
        >
      </div>
    </div>
  </div>
</template>
