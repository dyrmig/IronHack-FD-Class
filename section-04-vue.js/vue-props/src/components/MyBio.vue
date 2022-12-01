<template>
    <div>
        <h1>{{name}}</h1>
        <h4>{{age}}</h4>
        <!-- <h4>{{birthLocation}}</h4> -->
        <h4>{{currentLocation}}</h4>

        <BirthLocationContainer :birthLocation="birthLocation" />
    </div>
</template>
<script setup>
import {ref, reactive} from "vue";
import BirthLocationContainer from '../components/BirthLocationContainer.vue';
defineProps ({
    name: {
        type: String,
        required: false,
        default: "Some random name",
    },
    age: {
        type: Number,
        required: false,
        default: 0,
    },
    birthLocation: {
        type: String,
        required: false,
        default: "Some random date",
    },
    currentLocation: {
        type: String,
        required: false,
        default: "Some random place",
    },
});
</script>
<style lang="">
    
</style>