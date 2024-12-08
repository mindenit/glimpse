<script lang="ts" setup>
import { Text } from '@mindenit/ui'
</script>

<template>
  <NuxtLink to="/">
    <div class="flex items-center gap-2">
      <div class="overflow-hidden size-8 rounded-md">
        <img src="/mindenit.jpg" alt="Logo" />
      </div>
      <Text size="large" class="select-none">Glimpse</Text>
    </div>
  </NuxtLink>
</template>
