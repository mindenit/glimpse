<script lang="ts" setup>
import { AccordionRoot, AccordionItem, Heading, Text } from '@mindenit/ui'

definePageMeta({
  layout: 'main',
})
</script>

<template>
  <main
    class="container flex h-full w-full flex-col items-center px-6 py-12 text-center"
  >
    <div class="space-y-4 pb-16">
      <Text size="subtitle">ACTIVECAMPAIGH COMMON FAQS</Text>
      <Heading size="large">Frequently Asked Questions</Heading>
    </div>
    <AccordionRoot type="single">
      <AccordionItem value="item-1">
        <template #title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
          voluptatum quis, est possimus ad aperiam. Veritatis ipsa dolorem,
          beatae quis alias officiis deleniti sunt provident vel reprehenderit
          itaque hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae quia voluptatum quis, est possimus ad aperiam. Veritatis ipsa
          dolorem, beatae quis alias officiis deleniti sunt provident vel
          reprehenderit itaque hic.
        </template>
      </AccordionItem>
      <AccordionItem value="item-2">
        <template #title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
          voluptatum quis, est possimus ad aperiam. Veritatis ipsa dolorem,
          beatae quis alias officiis deleniti sunt provident vel reprehenderit
          itaque hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae quia voluptatum quis, est possimus ad aperiam. Veritatis ipsa
          dolorem, beatae quis alias officiis deleniti sunt provident vel
          reprehenderit itaque hic.
        </template>
      </AccordionItem>
      <AccordionItem value="item-3">
        <template #title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
          voluptatum quis, est possimus ad aperiam. Veritatis ipsa dolorem,
          beatae quis alias officiis deleniti sunt provident vel reprehenderit
          itaque hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae quia voluptatum quis, est possimus ad aperiam. Veritatis ipsa
          dolorem, beatae quis alias officiis deleniti sunt provident vel
          reprehenderit itaque hic.
        </template>
      </AccordionItem>
      <AccordionItem value="item-4">
        <template #title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
          voluptatum quis, est possimus ad aperiam. Veritatis ipsa dolorem,
          beatae quis alias officiis deleniti sunt provident vel reprehenderit
          itaque hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae quia voluptatum quis, est possimus ad aperiam. Veritatis ipsa
          dolorem, beatae quis alias officiis deleniti sunt provident vel
          reprehenderit itaque hic.
        </template>
      </AccordionItem>
    </AccordionRoot>
  </main>
</template>
