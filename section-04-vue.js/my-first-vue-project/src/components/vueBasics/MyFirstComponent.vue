
<template>
    <p>Hola mi nombre es {{myInfo.name}} tengo {{myInfo.edad}} y me gusta: {{myInfo.hobbies[0]}} {{myInfo.hobbies[1]}} {{myInfo.hobbies[2]}} {{myInfo.hobbies[3]}} my pelicula favorita es {{pelicula}} y la he visto {{vecesVistoPelicula}} veces, my comida favorita es: {{comida}}</p>

    <div>
        <button @click="restarVar">-</button>
        <h2>{{count}}</h2>
        <button @click="sumarVar">+</button>
    </div>
</template>


<script setup>

    //si queremos trabajar con datos primitivos o no, dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de una manera reactiva.
    //un metodo ref()
    //un metodo reactive()

    //pasos:
    //primero importamos los metodos desde la libreria de vue
    import {ref, reactive} from "vue";
    //vamos a declarar variables que contengan el metodo dentro para poder trabjar conrrectamente datos reactivos
    const cityOfBirth = ref('Vologda');
    const age = ref(36);
    const dmitri = "Mi nombre es DmitriS y me gusta programar";

    //non primitive Data Types
    const myInfo = reactive({
        name: 'Dmitri',
        edad: 36,
        fechaNacimiento: '26/10/1986',
        hobbies: ['senderismo', 'vino', 'cocinar', 'cerveza artesanal']
    });

    const pelicula = ref('Wake in Fright');
    const comida = ref('Borsch');
    let vecesVistoPelicula = ref(7);

    let count = ref(1);
    const restarVar = () => {
        count.value--
    }
    const sumarVar = () => {
        count.value++
    }
</script>


<style>

</style>