<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <!-- <input type="checkbox" :checked="todo.done" @change="toggle(todo)"> -->
      <!-- <span :class="{ done: todo.done }">{{ todo.text }}</span> -->
      {{ todo }}
    </li>
    <li><input placeholder="So what?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>

export default {
  computed: {
    todos () {
      console.log(this.$store.getters.TODOS)
      return this.$store.getters.TODOS
    }
  },
  mounted(){
    this.$store.dispatch('todos/getTodos')
  },
  methods: {
    addTodo (e) {
        this.$store.dispatch("todos/addTodo",e.target.value)
        e.target.value = ''
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
