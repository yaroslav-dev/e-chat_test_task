<template>
  <v-text-field
    @update:focused="focus($event)"
    @keydown.enter="addItem()"
    v-model="newItemTitle"
    label="New item"
    variant="outlined"
    bg-color="#fff"
    class="px-4"
    style="bottom: 0; right: 0; left: 0; margin: 0 auto; margin-bottom: 10px; position: fixed; max-width: 900px;"
    hide-details
  >
    <template #append-inner>
      <transition name="fade">
        <v-btn
          v-if="inputFocus"
          @click="addItem"
          variant="tonal"
          color="#4CAF50"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </transition>
    </template>
  </v-text-field>
</template>
<script setup>
import { ref } from 'vue'

const newItemTitle = ref('')

const inputFocus = ref(false)

const focus = (event) => {
  inputFocus.value = event
}

const scroll = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  })
}

const emit = defineEmits(['addItem'])
const addItem = () => {
  if (newItemTitle.value) {
    let title = newItemTitle.value
    emit('addItem', title)
    newItemTitle.value = ''
    setTimeout(() => {
      scroll()
    }, 0);
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>