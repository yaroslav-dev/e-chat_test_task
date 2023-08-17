<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <div class="text-h3">To-Do List</div>
    <v-responsive>
      <transition-group name="fade">
        <ListItem
          v-for="(item, index) in list.list"
          :itemProp="item"
          :key="index"
          :index="index"
          @remove-item="removeItem" />
      </transition-group>
    </v-responsive>
    <v-responsive class="d-flex align-end">
      <ListInput @add-item="addItem" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/stores/list.js'
import ListInput from './components/ListInput.vue';
import ListItem from './components/ListItem.vue';

const list = useListStore()

const addItem = (item) => {
  list.addItem(item)
}

const removeItem = (id) => {
  list.removeItem(id)
}

</script>

<style scoped>
.container {
  margin-bottom: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #757575;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
