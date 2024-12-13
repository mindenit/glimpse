<script lang="ts" setup>
import { SearchField } from '@mindenit/ui'
import { users as mockUsers } from '~/assets/mockDataUsers'

definePageMeta({
  layout: 'main',
})

const searchQuery = ref('')
const itemsPerPage = 10
const currentPage = ref(1)
const displayedUsers = ref(mockUsers.slice(0, itemsPerPage))

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return mockUsers
  }
  const lowerCaseQuery = searchQuery.value.toLowerCase()
  return mockUsers.filter((user) => {
    return (
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.username.toLowerCase().includes(lowerCaseQuery) ||
      user.description.toLowerCase().includes(lowerCaseQuery)
    )
  })
})

watch(filteredUsers, () => {
  currentPage.value = 1
  displayedUsers.value = filteredUsers.value.slice(0, itemsPerPage)
})

const loadMore = () => {
  const nextPageUsers = filteredUsers.value.slice(
    currentPage.value * itemsPerPage,
    (currentPage.value + 1) * itemsPerPage,
  )
  displayedUsers.value = [...displayedUsers.value, ...nextPageUsers]
  currentPage.value++
}

const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadMore()
    }
  })

  const sentinel = document.querySelector('#scroll-sentinel')
  if (sentinel) {
    observer.value.observe(sentinel)
  }
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <main class="container flex h-full w-full flex-col items-center text-center">
    <div class="w-full py-6">
      <SearchField
        v-model:model-value="searchQuery"
        placeholder="Пошук працює за іменем, юзернеймом або описом профіля..."
      />
    </div>
    <div
      class="grid w-full gap-4 pb-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      <UserCard
        v-for="user in displayedUsers"
        :key="user.id"
        :name="user.name"
        :username="user.username"
        :avatar-url="user.avatar"
        :description="user.description"
        :stars="user.stars"
      />
    </div>
    <div id="scroll-sentinel" class="h-4 w-full"></div>
  </main>
</template>
