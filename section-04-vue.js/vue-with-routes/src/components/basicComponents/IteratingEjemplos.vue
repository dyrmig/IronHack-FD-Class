<template>
  <h2>Iteracion de elementos ejercicio</h2>
  <h3>Mis peliculas favoritas</h3>
  <ol>
    <li v-for="(pelicula, index) in peliculas" :key="index">
        {{pelicula}}
    </li>
  </ol>
  <h3>Cosas favoritas</h3>
  <ul>
    <li v-for="(thing, key, index) in favoriteThings" :key="index">
        {{key}}: {{thing}}
    </li>
  </ul>
  <h3>Compañeros</h3>
  <ul>
    <li v-for="student, index in students" :key="index">
       <p v-if="student.age >= 18">I can go for a few drinks with {{student.name}} after class</p>
       <p v-else>{{student.name}} is still too young, they'll have to go home tonight</p>
       <ul><li v-for="language in student.favoriteLanguages">{{language}}</li></ul>
    </li>
  </ul>
</template>

<script setup>
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.

// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").

// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.
import {ref, reactive} from "vue";
const peliculas = reactive(['Wake in Fright','Truman Show','Metropolis','Stalker','Memento']);
const favoriteThings = reactive({
    favoriteFood: 'Tortilla de Patatas',
    favoriteDrink: 'Vino',
    favoriteSport: 'Chess',
    favoriteCountry: '',
    favoriteArrayMethod: 'pop'
    });
const students = reactive([
    {name: 'Norman', age: 30, favoriteLanguages: ['js','html','css']},
    {name: 'Berta', age: 17, favoriteLanguages: ['js','java','css']},
    {name: 'Alexis', age: 34, favoriteLanguages: ['js','python','css']}
])
</script>

<style>

</style>