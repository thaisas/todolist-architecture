<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.checked" @change="updateTodo(todo)">
      <span :class="{ done: todo.checked }">{{ todo.description }}</span> 
      <input type="button" @click="removeTodo(todo)" value="Remover">
    </li>
    <li><input v-model="currentTodo" placeholder="So what?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentTodo: ''
    }
  },
  computed: {
    todos() {
      console.log('oi--')
      return this.$store.getters['todos/TODOS']
    }
  },
  mounted(){
    this.$store.dispatch('todos/feachTodos')
  },
  methods: {
    addTodo () {
        this.$store.dispatch("todos/addTodo", this.currentTodo)
        this.currentTodo = ''
    },
    removeTodo (todo) {
      this.$store.dispatch("todos/removeTodo", todo)
    },
    updateTodo (todo) {
      this.$store.dispatch("todos/updateTodo", todo)
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
