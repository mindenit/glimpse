<script lang="ts" setup>
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

import {
  Heading,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
  FormLabel,
  Button,
  IconButton,
  Checkbox,
  Form,
  FormField,
  FormItem,
  FormControl,
} from '@mindenit/ui'

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().email('Неправильний формат електронної пошти'),
    password: zod.string().min(6, 'Пароль має містити мінімум 6 символів'),
  })
)

const { handleSubmit, errors, resetForm, values } = useForm({
  validationSchema: validationSchema,
})

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

const isChecked = ref(false)
const isPasswordVisible = ref(false)
const isFormSubmitted = ref(false)

const isDisabled = computed(
  () => !values.email?.trim() || !values.password?.trim()
)

const passwordInputType = computed(() =>
  isPasswordVisible.value ? 'text' : 'password'
)

const passwordToggleIcon = computed(() =>
  isPasswordVisible.value ? 'ph:eye-slash' : 'ph:eye'
)

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const onSubmit = handleSubmit(
  (values) => {
    const formData = { ...values, rememberMe: isChecked.value }
    console.log('Form submitted with values:', formData)
    resetForm()
    isChecked.value = false
    isFormSubmitted.value = false
  },
  (errors) => {
    console.error('Validation errors:', errors)
    isFormSubmitted.value = true
  }
)
</script>

<template>
  <main class="flex w-full h-screen items-center justify-center">
    <Form
      @submit="onSubmit"
      class="flex flex-col items-center justify-center w-[400px] h-fit space-y-4 rounded-xl dark:bg-fiord-900 p-5 border dark:border-fiord-700"
    >
      <Heading size="medium">Логін</Heading>

      <FormField name="email">
        <FormItem class="flex flex-col w-full gap-2">
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
          <FormMessage
            v-if="isFormSubmitted && errors.email"
            name="email"
            class="text-red-400"
            >{{ errors.email }}</FormMessage
          >
        </FormItem>
      </FormField>

      <FormField name="password">
        <FormItem class="flex flex-col w-full gap-2">
          <FormLabel for="password">Пароль</FormLabel>
          <FormControl>
            <TextFieldRoot>
              <TextFieldSlot>
                <Icon name="ph:key" />
              </TextFieldSlot>
              <TextFieldInput
                id="password"
                name="password"
                v-model="password"
                :type="passwordInputType"
                placeholder="Введіть пароль"
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
          <FormMessage
            v-if="isFormSubmitted && errors.password"
            name="password"
            class="text-red-400"
            >{{ errors.password }}</FormMessage
          >
        </FormItem>
      </FormField>

      <div class="flex items-center w-full gap-x-2">
        <FormField name="rememberMe">
          <FormControl>
            <Checkbox
              v-model="isChecked"
              :checked="isChecked"
              @update:checked="isChecked = $event"
            />
          </FormControl>
        </FormField>
        <FormLabel>Залишатись в системі?</FormLabel>
      </div>

      <Button type="submit" class="w-full" :disabled="isDisabled">
        Увійти
      </Button>

      <div>
        <p class="text-white">
          Немає акаунту?
          <router-link
            to="/signup"
            class="text-royal-blue-500 font-bold hover:underline"
          >
            Зареєструватись
          </router-link>
        </p>
      </div>
    </Form>
  </main>
</template>
