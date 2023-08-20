<template>
  <v-card
    class="col-md-6 my-2 d-flex align-center"
    :class="{'mt-0': index == 0}"
    color="#F5F5F5"
    elevation="0"
  >
    <v-card-actions>
      <v-checkbox
        v-model="item.completed"
        :ripple="false"
        color="#2196f3"
        density="compact"
        hide-details
      ></v-checkbox>
    </v-card-actions>
    <v-card-text
      class="py-0"
      :class="{ 'text-decoration-line-through': item.completed }"
      :style="item.completed ? { color: 'rgba(0, 0, 0, 0.47)' } : null"
    >
      <v-text-field
        :id="`item_input_${index}`"
        :class="{ 'text-decoration-line-through': item.completed }"
        :readonly="!editable"
        v-model="item.title"
        density="compact"
        variant="solo"
        :bg-color="editable ? 'unset': '#F5F5F5'"
        hide-details
        single-line
        flat
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-show="!item.completed"
        @click="edit"
        density="compact"
        :icon="editable ? 'check' : 'edit'"
        color="#757575"
        class="mr-2"
      ></v-btn>
      <v-btn
        @click="removeItem"
        density="compact"
        icon="delete"
        color="#757575"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { computed, ref, watch } from 'vue'

const editable = ref(false)

const edit = () => {
  editable.value = !editable.value
  if (editable.value) {
    document.querySelector(`#item_input_${props.index}`).focus()
  }
}

const props = defineProps({
  itemProp: Object,
  index: Number
})

const item = computed(() => {
  return props.itemProp
})

watch(item, () => {
  if (item.value.completed) {
    editable.value = false
  }
})

const emit = defineEmits(['removeItem'])
const removeItem = () => {
  let itemId = item.value.id

  emit('removeItem', itemId)
}
</script>
<style scoped>
  
</style>