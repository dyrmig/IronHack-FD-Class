<template>
  <h1>iterating elements</h1>
  <div id="v-for-directive">
    <div id="iterating-arrays">
        <h3>Lista de equipos de futbol del mundial</h3>
        <ul>
            <li v-for="team in worldCupTeams" v-bind:key="team">
                {{team}}
            </li>
        </ul>
        <!-- usando el index del array -->
        <ul>
            <li v-for="(team, index) in worldCupTeams" :key="index">
                {{team}}
            </li>
        </ul>

        <ul>
            <li v-for="(value, key, index) in myInfo" :key="value">
                {{index}} - {{key}} - {{value}}
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";

const worldCupTeams = reactive(["Argentina","Brasil","España","Francia","Serbia"]);

const myInfo = reactive({
    name: 'Dmitri',
    school: 'Ironhack',
    course: 'Front End Development Vue'
});

</script>

<style>

</style>