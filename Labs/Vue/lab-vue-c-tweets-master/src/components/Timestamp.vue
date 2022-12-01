<template>
    <span class="timestamp">{{timestamp}}</span>
</template>
<script setup>
    defineProps ({
    timestamp: {
        type: String,
        required: false,
        default: "default image",
    },
});
</script>