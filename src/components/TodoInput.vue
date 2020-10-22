<template>
    <div class="">
        <h1>List Work</h1>
        <div class="todo-add">
            <input type="text" class="todo-input" 
            placeholder="What needs to be done" 
            v-model="newTodo"
            @keyup.enter="addTodo(newTodo)"
            >
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {v1} from 'uuids'
export default {
  data () {
    return {
        newTodo:''
    }
  },
  methods: {
      ...mapActions(["addTodo"]),
      addTodo(newtodo){
          this.addTodo
      }
      
  },
    name:'comp-input'
}
</script>

<style>
.todo-input{
    width: 85%;
    border: 1px solid blue; 
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 20px;
    padding: 8px 18px;
    
  }
  
</style>