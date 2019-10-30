<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="updateTodo(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span> 
      {{ todo }}
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
    this.$store.dispatch('todos/getTodos')
  },
  methods: {
    addTodo (todo) {
        this.$store.dispatch("todos/addTodo",todo.checked)
    },
    removeTodo (e) {
      this.$store.dispatch("todos/removeTodo",e.target.value)
    },
    updateTodo (e) {
      this.$store.dispatch("todos/updateTodo",e.target.value)
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
