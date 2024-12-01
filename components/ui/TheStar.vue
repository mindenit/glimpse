<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);
const isHovered = ref(false);
const hoverValue = ref(0);

const displayedValue = computed(() => (isHovered.value ? hoverValue.value : value.value));

watch(
  () => props.modelValue,
  (newVal) => {
    value.value = newVal;
  },
);

const updateRating = (newRating) => {
  value.value = newRating;
  emit('update:modelValue', newRating);
};

const hoverRating = (hoverVal) => {
  isHovered.value = true;
  hoverValue.value = hoverVal;
};

const resetHover = () => {
  isHovered.value = false;
  hoverValue.value = 0;
};
</script>

<template>
  <div class="star-rating">
    <div
      v-for="i in maxStars"
      :key="i"
      :class="['star', { filled: i <= displayedValue }]"
      @click="updateRating(i)"
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
  transition: transform 0.2s ease, color 0.2s ease;
}

.star:hover {
  transform: scale(1.2);
}

.filled {
  color: gold;
}
</style>
