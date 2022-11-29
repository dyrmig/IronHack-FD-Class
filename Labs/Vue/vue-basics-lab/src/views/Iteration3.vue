<template>
  <h2>Iteration 3</h2>
  <h2>The element to show or not:</h2>
  <p v-if="showOrNot">The variable showOrNot is true</p>
</template>

<script setup>
    import {ref, reactive} from "vue";
  const showOrNot = ref(true);

</script>

<style>

</style>