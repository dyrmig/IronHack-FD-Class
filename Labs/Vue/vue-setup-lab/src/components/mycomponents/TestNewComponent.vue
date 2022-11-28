<template>
    <h1>Esto es el compoente 'TestNewComponent.vue'</h1>
    <h2 v-text="nombre"></h2>
    <button @click="holaMundo">Click me!</button>
</template>


<script setup>
import {ref, reactive} from "vue";
let nombre = ref('Mi nombre es Dmitri');

const holaMundo = () => {
    nombre.value = 'Hola Mundo!';
}
</script>


<style>

</style>