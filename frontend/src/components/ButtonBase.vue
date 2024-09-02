<template>
  <button :type="buttonType" :class="buttonClass"  v-on="$attrs">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'filled', // Valor padrão para o botão preenchido
  },
  buttonType: {
    type: String, 
    default: 'button'
  }
});

const buttonClass = computed(() => {
  return props.variant === 'outlined' ? 'button button--outlined' : 'button';
});

</script>

<style lang="scss" scoped>
.button {
  background: var(--primary);
  color: #fff;
  font-size: 1.6rem;
  padding-block: 0.8rem;
  padding-inline: 1.6rem;
  border-radius: 0.4rem;
  border: solid 2px var(--primary);
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
}

.button--outlined {
  border: solid 2px var(--primary);
  color: var(--primary);
  background: #fff;
  &:hover {
    background: var(--primary);
    color: white;
  }  
} 
</style>