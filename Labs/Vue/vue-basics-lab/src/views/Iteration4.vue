<template>
  <h2>Iteration 4</h2>
  <h2>The list of elements of an array:</h2>
  <ul>
    <li v-for="post, index in posts" :key="index">
      <h3>{{post.title}}</h3>
      <h4>{{post.description}}</h4>
      <h5>{{post.content}}</h5>
    </li>
  </ul>
</template>

<script setup>
    import {ref, reactive} from "vue";
  const posts = reactive([
    {title: 'Post 1', description: 'Bla bla bla 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta ut delectus voluptate architecto facilis natus placeat quisquam aspernatur repudiandae nulla amet, eius eaque sit? Quis neque ad soluta iure!'},
    {title: 'Post 2', description: 'Bla bla bla 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta ut delectus voluptate architecto facilis natus placeat quisquam aspernatur repudiandae nulla amet, eius eaque sit? Quis neque ad soluta iure!'},
    {title: 'Post 2', description: 'Bla bla bla 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta ut delectus voluptate architecto facilis natus placeat quisquam aspernatur repudiandae nulla amet, eius eaque sit? Quis neque ad soluta iure!'}
  ]);

</script>

<style>

</style>