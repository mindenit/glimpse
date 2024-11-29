<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'

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

const schema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(6)),
  rememberMe: v.boolean(),
})

const formSchema = toTypedSchema(schema)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const formData = ref({
  email: '',
  password: '',
  rememberMe: false,
})

const isPasswordVisible = ref(false)

const isDisabled = computed(
  () => !formData.value.email.trim() || !formData.value.password.trim()
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

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted', values)
})
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
              v-model="formData.email"
              name="email"
              id="email"
              type="email"
              placeholder="Введіть пошту"
              autofocus
            />
          </TextFieldRoot>
          <FormMessage name="email" />
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
                v-model="formData.password"
                :type="passwordInputType"
                placeholder="Введіть пароль"
              />
              <TextFieldSlot>
                <IconButton
                  v-show="formData.password"
                  type="button"
                  variant="ghost"
                  size="xs"
                  :icon="passwordToggleIcon"
                  @click="togglePasswordVisibility"
                />
              </TextFieldSlot>
            </TextFieldRoot>
          </FormControl>
          <FormMessage name="password" />
        </FormItem>
      </FormField>

      <div class="flex items-center w-full gap-x-2">
        <FormField name="rememberMe">
          <FormControl>
            <Checkbox v-model="formData.rememberMe" />
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
            class="text-[#808EF9] font-bold hover:underline"
          >
            Зареєструватись
          </router-link>
        </p>
      </div>
    </Form>
  </main>
</template>
