<script lang="ts" setup>
import {
  Heading,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
  FormLabel,
  Button,
  IconButton,
  Checkbox,
} from '@mindenit/ui'

const email = ref('')
const password = ref('')
const isChecked = ref(false)
const isPasswordVisible = ref(false)

const isDisabled = computed(() => {
  return !email.value.trim().length || !password.value.trim().length
})

const passwordInputType = computed(() => {
  return isPasswordVisible.value ? 'text' : 'password'
})

const passwordToggleIcon = computed(() => {
  return isPasswordVisible.value ? 'ph:eye-slash' : 'ph:eye'
})

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const handleSubmit = (event: Event) => {
  event.preventDefault()

  console.log({
    email: email.value,
    password: password.value,
    isChecked: isChecked.value,
  })

  email.value = ''
  password.value = ''
  isChecked.value = false
}
</script>

<template>
  <main class="flex w-full h-screen items-center justify-center">
    <form
      @submit="handleSubmit"
      class="flex flex-col items-center justify-center w-[400px] h-fit space-y-4 rounded-xl dark:bg-fiord-900 p-5 border dark:border-fiord-700"
    >
      <Heading size="medium">Логін</Heading>
      <div class="flex flex-col w-full gap-2">
        <FormLabel for="email">Електронна пошта</FormLabel>
        <TextFieldRoot>
          <TextFieldSlot>
            <Icon name="ph:envelope-simple" />
          </TextFieldSlot>
          <TextFieldInput
            v-model="email"
            name="email"
            id="email"
            type="email"
            placeholder="Введіть пошту"
            autofocus
          />
        </TextFieldRoot>
      </div>
      <div class="flex flex-col w-full gap-2">
        <FormLabel for="password">Пароль</FormLabel>
        <TextFieldRoot>
          <TextFieldSlot>
            <Icon name="ph:key" />
          </TextFieldSlot>
          <TextFieldInput
            v-model="password"
            name="password"
            id="password"
            placeholder="Введіть пароль"
            :type="passwordInputType"
          />
          <TextFieldSlot>
            <IconButton
              v-show="password.length"
              type="button"
              variant="ghost"
              size="xs"
              :icon="passwordToggleIcon"
              @click="togglePasswordVisibility"
            />
          </TextFieldSlot>
        </TextFieldRoot>
      </div>
      <div class="flex items-center w-full gap-x-2">
        <Checkbox :checked="isChecked" @update:checked="isChecked = $event" />
        <FormLabel>Залишатись в системі?</FormLabel>
      </div>
      <Button type="submit" class="w-full" :disabled="isDisabled"
        >Увійти</Button
      >
      <div>
        <p class="text-white">
          Немає акаунту?
          <router-link
            to="/signup"
            class="text-[#808EF9] font-bold hover:underline"
          >
            Зареєструватись
          </router-link>
        </p>
      </div>
    </form>
  </main>
</template>
