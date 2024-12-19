<script lang="ts" setup>
import { AccordionRoot, AccordionItem, Heading } from '@mindenit/ui'
</script>

<template>
  <main
    class="container flex h-full w-full flex-col items-center px-6 py-12 text-center"
  >
    <div class="space-y-4 pb-16">
      <Heading size="large">Frequently Asked Questions</Heading>
    </div>
    <AccordionRoot type="multiple">
      <AccordionItem value="item-1">
        <template #title
          >Can I ask questions after receiving my homework help?</template
        >
        <template #content>
          Yes, you can contact your tutor after receiving your completed
          homework to ask questions or for clarification. We encourage
          communication to ensure you fully understand the work provided.
        </template>
      </AccordionItem>
      <AccordionItem value="item-2">
        <template #title
          >What types of homework assignments can I get help with?</template
        >
        <template #content>
          We provide help with a wide variety of homework assignments, including
          problem-solving tasks, essays, lab reports, programming assignments,
          and much more. No matter the subject, we have experts ready to assist
          you.
        </template>
      </AccordionItem>
      <AccordionItem value="item-3">
        <template #title> Is the help provided confidential?</template>
        <template #content>
          Yes, we take your privacy and security very seriously. All personal
          and payment information is encrypted, and we ensure that your homework
          and communications with tutors remain confidential. Our tutors are
          vetted to ensure a secure and reliable experience.
        </template>
      </AccordionItem>
      <AccordionItem value="item-4">
        <template #title>
          Can I get help with a specific part of my homework?
        </template>
        <template #content>
          Yes, you can request assistance with specific parts of your homework.
          Whether it's a particular question or section, you can submit the
          details and our tutors will help with that part of your assignment.
        </template>
      </AccordionItem>
    </AccordionRoot>
  </main>
</template>
