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
const emailError = ref('')
const passwordError = ref('')
const isPasswordVisible = ref(false)
const isSubmitted = ref(false)

const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

const validatePassword = (value: string) => {
  return value.trim().length >= 6
}

const isDisabled = computed(() => {
  return !email.value.trim().length || !password.value.trim().length
})

const handleValidation = () => {
  if (!validateEmail(email.value)) {
    emailError.value = 'Введіть правильну електронну адресу'
  } else {
    emailError.value = ''
  }

  if (!validatePassword(password.value)) {
    passwordError.value = 'Пароль повинен містити не менше 6 символів'
  } else {
    passwordError.value = ''
  }
}

const handleSubmit = (event: Event) => {
  event.preventDefault()
  isSubmitted.value = true
  handleValidation()

  if (!emailError.value && !passwordError.value) {
    console.log({
      email: email.value,
      password: password.value,
      isChecked: isChecked.value,
    })

    email.value = ''
    password.value = ''
    isChecked.value = false
    emailError.value = ''
    passwordError.value = ''
  }
}

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
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
        <div class="flex w-full justify-start">
          <p v-if="isSubmitted && emailError" class="text-amaranth-500 text-sm">
            {{ emailError }}
          </p>
        </div>
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
            :type="isPasswordVisible ? 'text' : 'password'"
          />
          <TextFieldSlot>
            <IconButton
              v-show="password.length"
              type="button"
              variant="ghost"
              size="xs"
              :icon="isPasswordVisible ? 'ph:eye-slash' : 'ph:eye'"
              @click="togglePasswordVisibility"
            />
          </TextFieldSlot>
        </TextFieldRoot>
      </div>
      <div class="flex w-full justify-start">
        <p
          v-if="isSubmitted && passwordError"
          class="text-amaranth-500 text-sm"
        >
          {{ passwordError }}
        </p>
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
