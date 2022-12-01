<template>
  <input v-model="num1" type="text">
  <span> + </span>
  <input v-model="num2" type="text">
  <span> = </span>
  <span v-text="resultado"></span>

  <div :class="red ? 'rojo' : 'verde'">
    <h2>Elemento a togglear</h2>
    <button @click="toggleColor()">Toggle Color</button>
</div>

<SlotExample>Hola esto es un texto pasado por slot</SlotExample>
</template>

<script setup>
    import SlotExample from '../components/basicComponents/SlotExample.vue'
    import {ref, computed} from "vue";
    const num1 = ref(0);
    const num2 = ref(0);

    const resultado = computed(()=> {
        return parseInt(num1.value) + parseInt(num2.value);
    });

    const red = ref(true);
    const toggleColor = () => {
        if (red.value){
            red.value = false;
        } else {
            red.value = true;
        }
    }
</script>

<style scoped>
    .rojo{
        background-color: red;
        color: white;
        width: 200px;
        height: 120px;
    }
    .verde{
        background-color: green;
        color: white;
        width: 200px;
        height: 120px;
    }
</style>