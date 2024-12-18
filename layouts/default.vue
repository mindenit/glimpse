<template>
  <div class="flex w-full flex-col dark:text-white">
    <div class="container mx-auto flex h-dvh flex-col gap-5 px-4 pt-5">
      <TheNavbar />
      <div class="flex h-full animate-fadeIn flex-col gap-5 pb-[100px] md:pb-0">
        <slot />
      </div>
    </div>
  </div>
</template>
