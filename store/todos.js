export const state = () => ({
    todos: []
})

export const actions = {
    addTodo({ commit }, todo) {
        let data = this.$axios.$post('/items',{ description: todo.description })
        .then(
            commit("ADD_TODO", data)
        )
        .catch(error => {
            console.log(`Error at ADD_TODO - console error: ${error}`)
        })
     },
     removeTodo({ commit }, todo) {
        this.$axios.$delete(`items/${todo._id}`)
        .then(response => {
            commit('REMOVE_TODO', todo)
        })
        .catch(error => {
            console.log(`Error at REMOVE_TODO - console error: ${error}`)
        })
    },
    updateTodo({ commit }, todo) {
        this.$axios.$put(`/items/${todo._id}`, {description: todo.description, checked: !todo.checked})
        .then(response => {
            commit("UPDATE_TODO", response)
        })
        .catch(error => {
            console.log(`Error at UPDATE_TODO - console error: ${error}`)
        })
    },
    feachTodos({ commit }) {
        this.$axios.$get('/items')
        .then(response => {
            commit("GET_TODOS", response)
        })
        .catch(error => {
            console.log(`Error at GET_TODOS - console error: ${error}`)
        })
    }
}

export const getters =  {
    TODOS : state => {
      return state.todos;
    },
}

export const mutations = {
    UPDATE_TODO (state, todo) {
        todo.done = !todo.done
    },  
    GET_TODOS(state, todos) {
        state.todos = todos
    },
    ADD_TODO(state, todo) {
        state.todos.push(todo)
    },
    REMOVE_TODO(state, todo) {
        state.todos.splice(state.list.indexOf(todo), 1)
    }
}