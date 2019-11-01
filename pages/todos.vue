<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.checked" @change="updateTodo(todo)">
      <span :class="{ done: todo.checked }">{{ todo.description }}</span> 
      <input type="button" @click="removeTodo(todo)" value="Remover">
    </li>
    <li><input placeholder="So what?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      todos: 'todos/TODOS'
    })
  },
  mounted(){
    this.$store.dispatch('todos/feachTodos')
  },
  methods: {
    addTodo (todo) {
        this.$store.dispatch("todos/addTodo", todo)
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
