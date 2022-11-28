<template>
<div>
    <h1>Using a atribute binding</h1>
    <div id="binding-attributes">
        <div id="binding-id">
            <!-- let's bind and ID with long sintax-->
            <h2 v-bind:id="headingID">Heading con un ID bindead dinamicamente desde el scrip tag</h2>
            <!-- let's bind a Class with short sintax-->
            <h2 :class="headingClass">Heading con una Clase bindead dinamicamente desde el scrip tag</h2>
            <h2 class="underline" :class="headingClass">Heading con una clase ya seteada</h2>
        </div>
    </div>
</div>
</template>


<script setup>
    import {ref, reactive} from "vue";
    const headingID = ref('nuestraID');

    const headingClass = ref('nuestraClase');

</script>


<style>
    #nuestraID {
        color: brown;
    }
    .nuestraClase {
        color: green;
    }
    .underline {
        text-decoration: underline;
    }
</style>