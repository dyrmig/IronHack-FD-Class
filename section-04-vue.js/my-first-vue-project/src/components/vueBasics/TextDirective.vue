<template>
    <div id="using-v-text-directive">
        <h1>Using a v-text directive</h1>

        <h3 v-text="favoriteBand"></h3>
    </div>
</template>


<script setup>
    import {ref, reactive} from "vue";

    let favoriteBand = ref('my banda favorita es Joy Division');
</script>


<style>

</style>