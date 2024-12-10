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
  z.object({
    email: z.string().email('Неправильний формат електронної пошти'),
    password: z.string().min(6, 'Пароль має містити мінімум 6 символів'),
  }),
)

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: validationSchema,
})

const isPasswordVisible = ref(false)

const isDisabled = computed(
  () => !values.email?.trim() || !values.password?.trim(),
)

const passwordInputType = computed(() =>
  isPasswordVisible.value ? 'text' : 'password',
)

const passwordToggleIcon = computed(() =>
  isPasswordVisible.value ? 'ph:eye-slash' : 'ph:eye',
)

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const onSubmit = handleSubmit(
  (values) => {
    console.log('Form submitted with values:', values)
    resetForm()
  },
  (errors) => {
    console.error('Validation errors:', errors)
  },
)
</script>

<template>
  <main class="flex h-screen w-full items-center justify-center">
    <form
      class="flex h-fit w-[400px] flex-col items-center justify-center space-y-4 rounded-xl border p-5 dark:border-fiord-700 dark:bg-fiord-900"
      @submit="onSubmit"
    >
      <Heading size="medium">Логін</Heading>

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
                autofocus
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
                :type="passwordInputType"
                placeholder="Введіть пароль"
                v-bind="componentField"
              />
              <TextFieldSlot>
                <IconButton
                  v-show="values.password"
                  type="button"
                  variant="ghost"
                  size="xs"
                  :icon="passwordToggleIcon"
                  @click="togglePasswordVisibility"
                />
              </TextFieldSlot>
            </TextFieldRoot>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full" :disabled="isDisabled">
        Увійти
      </Button>

      <div>
        <p class="text-black dark:text-white">
          Немає акаунту?
          <NuxtLink to="/signup" class="text-royal-blue-500 hover:underline">
            Зареєструватись
          </NuxtLink>
        </p>
      </div>
    </form>
  </main>
</template>
