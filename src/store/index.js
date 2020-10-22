import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export  const store = new Vuex.Store({
    state:{
        todos:[
            {id:1, content: 'learn about vuex', done:false},
            {id:2, content: 'content2', done:false},
            {id:3, content: 'content3', done:false},
        ]
    },
    getters:{
        allTodo: (state) =>{
            state.todos
        }
    },
    mutations:{
        add_todo(state, todo){
            state.todos.push(todo)
           
        }
    },
    actions:{
        addTodo({commit}, todo){
            commit("add_todo", todo)
        }
    },
    modules:{

    }
});