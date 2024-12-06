<template>
  <div class="flex flex-col w-full dark:text-white">
    <div class="flex flex-col pt-5 container mx-auto px-4 h-dvh gap-5">
      <Navbar />
      <div class="flex flex-col pb-[100px] h-full md:pb-0 gap-5">
        <slot />
      </div>
    </div>
  </div>
</template>
