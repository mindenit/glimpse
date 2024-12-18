<script lang="ts" setup>
interface StarRatingProps {
  modelValue?: number
  maxStars?: number
}

const props = withDefaults(defineProps<StarRatingProps>(), {
  maxStars: 5,
})

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: number): void
}>()

const model = useVModel(props, 'modelValue', emit, {
  defaultValue: 0,
})

const isHovered = ref(false)
const hoverValue = ref(0)

const displayedValue = computed(() =>
  isHovered.value ? hoverValue.value : model.value,
)

const hoverRating = (hoverVal: number) => {
  isHovered.value = true
  hoverValue.value = hoverVal
}

const resetHover = () => {
  isHovered.value = false
  hoverValue.value = 0
}
</script>

<template>
  <div class="star-rating">
    <div
      v-for="i in maxStars"
      :key="i"
      :class="['star', { filled: i <= displayedValue }]"
      @click="emit('update:modelValue', i)"
      @mouseover="hoverRating(i)"
      @mouseleave="resetHover"
    >
      ★
    </div>
  </div>
</template>

<style scoped>
.star-rating {
  display: flex;
  gap: 4px;
}

.star {
  font-size: 24px;
  cursor: pointer;
  color: #ddd;
  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.star:hover {
  transform: scale(1.2);
}

.filled {
  color: gold;
}
</style>
