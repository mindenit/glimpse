<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Heading,
  IconButton,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
} from '@mindenit/ui'

const validationSchema = toTypedSchema(
  z
    .object({
      login: z
        .string()
        .min(3, 'Логін має містити мінімум 3 символи')
        .max(20, 'Логін не може містити більше 20 символів')
        .regex(
          /^[a-zA-Z0-9_]+$/,
          'Логін може містити тільки літери, цифри і _'
        ),
      email: z.string().email('Неправильний формат електронної пошти'),
      password: z.string().min(6, 'Пароль має містити мінімум 6 символів'),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Паролі не співпадають',
      path: ['confirmPassword'],
    })
)

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: validationSchema,
})

const passwordVisibility = ref({
  password: false,
  confirmPassword: false,
})

const isDisabled = computed(
  () =>
    !values.login?.trim() ||
    !values.email?.trim() ||
    !values.password?.trim() ||
    !values.confirmPassword
)

const inputType = computed(() => ({
  password: passwordVisibility.value.password ? 'text' : 'password',
  confirmPassword: passwordVisibility.value.confirmPassword
    ? 'text'
    : 'password',
}))

const toggleIcon = computed(() => ({
  password: passwordVisibility.value.password ? 'ph:eye-slash' : 'ph:eye',
  confirmPassword: passwordVisibility.value.confirmPassword
    ? 'ph:eye-slash'
    : 'ph:eye',
}))

const toggleVisibility = (field: 'password' | 'confirmPassword') => {
  passwordVisibility.value[field] = !passwordVisibility.value[field]
}

const onSubmit = handleSubmit(
  (values) => {
    console.log('Form submitted with values:', values)
    resetForm()
  },
  (errors) => {
    console.error('Validation errors:', errors)
  }
)
</script>

<template>
  <main class="flex w-full h-screen items-center justify-center">
    <form
      class="flex flex-col items-center justify-center w-[400px] h-fit space-y-4 rounded-xl dark:bg-fiord-900 p-5 border dark:border-fiord-700"
      @submit="onSubmit"
    >
      <Heading size="medium">Реєстрація</Heading>

      <FormField v-slot="{ componentField }" name="login">
        <FormItem class="w-full space-y-1">
          <FormLabel for="login">Логін</FormLabel>
          <FormControl>
            <TextFieldRoot>
              <TextFieldSlot>
                <Icon name="i-ph:at" />
              </TextFieldSlot>
              <TextFieldInput
                type="text"
                placeholder="Введіть Ваш логін"
                v-bind="componentField"
                autofocus
              />
            </TextFieldRoot>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="email">
        <FormItem class="w-full space-y-1">
          <FormLabel for="email">Електронна пошта</FormLabel>
          <FormControl>
            <TextFieldRoot>
              <TextFieldSlot>
                <Icon name="ph:envelope-simple" />
              </TextFieldSlot>
              <TextFieldInput
                type="email"
                placeholder="Введіть пошту"
                v-bind="componentField"
              />
            </TextFieldRoot>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem class="w-full space-y-1">
          <FormLabel for="password">Пароль</FormLabel>
          <FormControl>
            <TextFieldRoot>
              <TextFieldSlot>
                <Icon name="ph:key" />
              </TextFieldSlot>
              <TextFieldInput
                :type="inputType.password"
                placeholder="Введіть пароль"
                v-bind="componentField"
              />
              <TextFieldSlot>
                <IconButton
                  v-show="values.password"
                  type="button"
                  variant="ghost"
                  size="xs"
                  :icon="toggleIcon.password"
                  @click="toggleVisibility('password')"
                />
              </TextFieldSlot>
            </TextFieldRoot>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="confirmPassword">
        <FormItem class="w-full space-y-1">
          <FormLabel for="confirmPassword">Підтвердження пароля</FormLabel>
          <FormControl>
            <TextFieldRoot>
              <TextFieldSlot>
                <Icon name="ph:key" />
              </TextFieldSlot>
              <TextFieldInput
                :type="inputType.confirmPassword"
                placeholder="Введіть пароль"
                v-bind="componentField"
              />
              <TextFieldSlot>
                <IconButton
                  v-show="values.confirmPassword"
                  type="button"
                  variant="ghost"
                  size="xs"
                  :icon="toggleIcon.confirmPassword"
                  @click="toggleVisibility('confirmPassword')"
                />
              </TextFieldSlot>
            </TextFieldRoot>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full" :disabled="isDisabled">
        Зареєструватись
      </Button>

      <div>
        <p class="text-white">
          Вже є акаунт?
          <NuxtLink to="/login" class="text-royal-blue-500 hover:underline">
            Авторизуватись
          </NuxtLink>
        </p>
      </div>
    </form>
  </main>
</template>
