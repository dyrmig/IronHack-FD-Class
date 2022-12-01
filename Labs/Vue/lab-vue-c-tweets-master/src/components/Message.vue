<template>
    <p class="message">
    {{message}}
    </p>
</template>
<script setup>
    defineProps ({
    message: {
        type: String,
        required: false,
        default: "default image",
    },
});
</script>