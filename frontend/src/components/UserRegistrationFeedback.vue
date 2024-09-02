<template>
    <div class="feedback-message">
      <UserRegistrationStepTitle :title="title" />
      <div v-if="data">
        <ul class="feedback-message__list">
          <li class="feedback-message__list-item" v-for="(field, key) in data" :key="key">
            <b>{{ key }}:</b> {{ field }}
          </li>
        </ul>
      </div>
      <button class="button" @click="startRewRegister">Realizar Novo Cadastrao</button>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import UserRegistrationStepTitle from './UserRegistrationStepTitle.vue';
  defineProps({
    title: {
      type: String,
      required: true,      
    },
    data: {
      type: Object
    }
  })

  const startRewRegister = inject('restartRegister');

</script>

<style scoped lang="scss">
.feedback-message {
  padding: 1rem 1.6rem 3rem;
  border: solid 1px var(--primary);

  &__list {
    font-size: 1.6rem;
    list-style: none;
    margin-block-end: 2rem;
    &-item {
      margin-top: 0.5rem;
    }
  }
}
</style>