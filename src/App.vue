<template>
  <div id="app">
      <ToDoInput />
      <SlotDemo>
        <div class="app-slot">
            <p>this is slot</p>
        </div>
      </SlotDemo>
  </div>
</template>

<script>
import ToDoInput from './components/inputRef'
import SlotDemo from './components/Slot'
export default {
  name: 'App',
  components: {
    ToDoInput,
    SlotDemo
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
      margin-left: 300px ;
      border: 1px solid black;
      padding: 100px;
}

</style>
