<script lang="ts" setup>
import { AccordionRoot, AccordionItem, Heading } from '@mindenit/ui'
</script>

<template>
  <main
    class="container flex h-full w-full flex-col items-center px-6 py-12 text-center"
  >
    <div class="space-y-4 pb-16">
      <Heading size="medium">Frequently Asked Questions</Heading>
    </div>
    <AccordionRoot type="multiple">
      <AccordionItem value="item-1">
        <template #title>
          Чи можу я залишатися анонімним на платформі?
        </template>
        <template #content>
          <div class="text-left">
            Так, наша платформа підтримує максимальну анонімність. Ви можете
            працювати, не розкриваючи своїх персональних даних. Однак для
            забезпечення безпеки угод ми пропонуємо систему верифікації, яка
            гарантує довіру між виконавцями та клієнтами. Ваші дані зберігаються
            в надійному цифровому сховищі та ніколи не передаються третім
            сторонам.
          </div>
        </template>
      </AccordionItem>
      <AccordionItem value="item-2">
        <template #title> Як зареєструватися на платформі? </template>
        <template #content>
          <div class="text-left">
            Щоб зареєструватися, вам потрібно лише вказати електронну пошту або
            увійти через Google. Процес займає не більше однієї хвилини!
          </div>
        </template>
      </AccordionItem>
      <AccordionItem value="item-3">
        <template #title> Що таке "мініпрофіль"? </template>
        <template #content>
          <div class="text-lef">
            Мініпрофіль — це ваш персональний профіль, де ви описуєте свої
            послуги, досвід та навички. Він створюється максимально швидко та
            дозволяє клієнтам одразу бачити, чим ви можете допомогти.
          </div>
        </template>
      </AccordionItem>
      <AccordionItem value="item-4">
        <template #title> Скільки коштує використання платформи? </template>
        <template #content>
          <div class="text-left">
            Реєстрація на платформі та створення мініпрофілю — абсолютно
            безкоштовні. Ми стягуємо невеликий відсоток з кожної успішної угоди
            між вами та клієнтом.
          </div>
        </template>
      </AccordionItem>
      <AccordionItem value="item-5">
        <template #title>
          Чи потрібно заповнювати багато інформації для початку роботи?
        </template>
        <template #content>
          <div class="text-left">
            Ні, ми цінуємо ваш час! Вкажіть лише ключову інформацію про ваші
            послуги, і ви готові приймати замовлення.
          </div>
        </template>
      </AccordionItem>
    </AccordionRoot>
  </main>
</template>
