<template>
  <div class="star-rating">
    <div
      v-for="i in maxStars"
      :key="i"
      :class="['star', i <= (isHovered ? hoverValue : value) ? 'filled' : '']"
      @click="updateRating(i)"
      @mouseover="hoverRating(i)"
      @mouseleave="resetHover"
    >
      ★
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = ref(props.modelValue)
    const isHovered = ref(false)
    const hoverValue = ref(0)

    // Watch for external updates to the modelValue
    watch(
      () => props.modelValue,
      (newVal) => {
        value.value = newVal
      }
    )

    const updateRating = (newRating) => {
      value.value = newRating
      emit('update:modelValue', newRating)
    }

    const hoverRating = (hoverVal) => {
      isHovered.value = true
      hoverValue.value = hoverVal
    }

    const resetHover = () => {
      isHovered.value = false
      hoverValue.value = 0
    }

    return {
      value,
      isHovered,
      hoverValue,
      updateRating,
      hoverRating,
      resetHover,
    }
  },
}
</script>

<style scoped>
.star-rating {
  display: flex;
  gap: 4px;
}

.star {
  font-size: 24px;
  cursor: pointer;
  color: #ddd;
}

.filled {
  color: gold;
}
</style>
