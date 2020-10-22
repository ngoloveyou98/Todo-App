<template>
  <div id="app">
      <ToDoInput />
      <ToDoList />
      <ToDoItem />
  </div>
</template>

<script>
import ToDoInput from './components/TodoInput'
import ToDoList from './components/TodoList'
import ToDoItem from './components/TodoItem'
export default {
  name: 'App',
  components: {
    ToDoInput,
    ToDoList,
    ToDoItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: white;
      max-width: 500px;
      margin-left: 600px ;
      border: 50px;
}

</style>
