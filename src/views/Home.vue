<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Vue Learning</h1>
    <p>A collection of pages and components to test out <a href="https://v3.vuejs.org/">VueJS patterns</a></p>

    <app-nav></app-nav>
  </div>
</template>

<script>

    import AppNav from "../components/AppNav";

    export default {
        name: 'Home',
        components: { AppNav }
    }
</script>
