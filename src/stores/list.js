import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useListStore = defineStore('list', () => {
  const list = useStorage('list', [], localStorage)

  const addItem = (item) => {
    list.value.push({
      title: item,
      id: Date.now(),
      completed: false,
    })
  }

  const removeItem = (id) => {
    list.value = list.value.filter(i => i.id !== id)
  }

  return {
    list, addItem, removeItem
  }
})