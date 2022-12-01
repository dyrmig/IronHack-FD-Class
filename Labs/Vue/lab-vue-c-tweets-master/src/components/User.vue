<template>
    <span class="user">
        <span class="name">{{name}}</span>
        <span class="handle">{{handle}}</span>
    </span>
</template>
<script setup>
    defineProps ({
    name: {
        type: String,
        required: false,
        default: "default image",
    },
    handle: {
        type: String,
        required: false,
        default: "default image",
    },
});
</script>