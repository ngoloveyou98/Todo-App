
<template>
    <div>
        <button class="btn btn-primary" @click="handleClickInput()">
            Upload
        </button>
        <input type="file" ref="inputFile" style="display: none">
    </div>
</template>

<script>
export default {
  methods: {
      handleClickInput(){
          console.log(this.$refs.inputFile.click())
      }
  },
    
}
</script>

<style>

</style>