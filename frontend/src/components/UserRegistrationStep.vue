<template>
  <legend class="legend">
    Etapa <span class="highlight">{{ step }}</span> de {{ total }}
  </legend>
</template>

<script setup>
  defineProps({
    step: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  })
</script>

<style lang="scss" scoped>

.legend {
  font-size: 1.4rem;
  font-weight: 500;
  .highlight {
    color: var(--primary);
  }
}

</style>
