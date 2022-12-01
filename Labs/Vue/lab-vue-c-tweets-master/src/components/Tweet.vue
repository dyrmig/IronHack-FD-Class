<template>
  <div class="tweet">
    <ProfileImage :image="image"/>

    <div class="body">
      <div class="top">
        <User :name="name" :handle="handle" />

        <Timestamp :timestamp="timestamp" />
      </div>

      <Message :message="message" />

      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import ProfileImage from '../components/ProfileImage.vue';
import User from '../components/User.vue';
import Timestamp from '../components/Timestamp.vue';
import Message from '../components/Message.vue';
import Actions from '../components/Actions.vue';

defineProps ({
    name: {
        type: String,
        required: false,
        default: "default name",
    },
    image: {
        type: String,
        required: false,
        default: "default image",
    },
    handle: {
        type: String,
        required: false,
        default: "default handle",
    },
    timestamp: {
        type: String,
        required: false,
        default: "default timestamp",
    },
    message: {
        type: String,
        required: false,
        default: "default message",
    },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
