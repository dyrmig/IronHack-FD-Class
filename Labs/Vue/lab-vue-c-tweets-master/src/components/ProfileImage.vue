<template>
    <img
      :src="image"
      class="profile"
      alt="profile"
    />
</template>
<script setup>
    defineProps ({
    image: {
        type: String,
        required: false,
        default: "default image",
    },
});
</script>
