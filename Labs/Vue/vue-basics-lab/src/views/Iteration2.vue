<template>
  <h2>Iteration 2</h2>
  <h2>The result is:</h2>
  <p v-text="calcular(2,2)"></p>
</template>

<script setup>
    import {ref, reactive} from "vue";
    const calcular = (number1, number2) => {
        return number1 + number2;
    };

</script>

<style>

</style>