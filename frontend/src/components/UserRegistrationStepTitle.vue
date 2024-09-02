<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>

.title {
  font-weight: 700;
  font-size: 2.4rem;
  margin-block-start: 1rem;
  margin-block-end: 2rem;
}

</style>