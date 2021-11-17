<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Vue Learning</h1>
    <p>A collection of pages and components to test out <a href="https://v3.vuejs.org/">VueJS patterns</a></p>

    <ul>
      <li v-for="(page, index) in pages" :key="index">
        <a :href="page.path">{{ page.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

    import pages from "../pages";

    export default {
        name: 'Home',
        data() {
            return {
                pages
            }
        }
    }
</script>
