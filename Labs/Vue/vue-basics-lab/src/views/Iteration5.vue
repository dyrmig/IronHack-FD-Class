<template>
  <div>
    <h2>Iteration 5</h2>
    <button @click="changeBackgroundColor">Change Background Color</button>
  <div class="bg-color" :class="newClass"></div>
  </div>
</template>

<script setup>
    import {ref, reactive} from "vue";
    let newClass = ref('');
    const changeBackgroundColor =()=> {
      newClass.value = 'green-bg-color';
    }
</script>

<style scoped>
  .bg-color {
   
    border: solid 1px;
    height: 120px;
    width: 120px;
  }
  .green-bg-color {
    background-color: green;
  }
</style>