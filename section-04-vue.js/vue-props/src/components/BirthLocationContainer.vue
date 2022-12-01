<template lang="">
    <h2>El lugar de nacimiento es: {{birthLocation}}</h2>
</template>
<script setup>
defineProps ({
    birthLocation: {
        type: String,
    }
});
</script>
