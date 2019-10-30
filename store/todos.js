export const state = () => ({
    todos: []
})

export const actions = {
    async addTodo({ commit }, description) {
        try {
            let data  = await this.$axios.$post('http://localhost:3333/items',{ description: description })
            if(data){
                commit("ADD_TODO", data)
            }
        } catch (error) {
            console.log(`addTodo -> ${error}`)
        }
     },
     async removeTodo({ commit }, todo) {
        try {
          await this.$axios.$delete(`http://localhost:3333/items/${todo._id}`)
          commit('REMOVE_TODO', todo)
        } catch (error) {
            console.log(`removeTodo -> ${error}`)
        }
    },
    async updateTodo({ commit }, { params, todo }) {
        try {
          let data = await this.$axios.$patch(`http://localhost:3333/items/${todo._id}`, params)
          if (data) commit('UPDATE_TODO', data)
        } catch (error) {
            console.log(`updateTodo -> ${error}`)
        }
    },
    async getTodos({ commit }) {
        try {
          let data = await this.$axios.$get('http://localhost:3333/items')
          console.log(data)
          if (data) commit('GET_TODOS', data)
        } catch (error) {
            console.log(`getTodos -> ${error}`)
        }
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