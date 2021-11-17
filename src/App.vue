<template>
  <app-nav></app-nav>
  <router-view/>
</template>

<script>

    import pages from "./pages";
    import AppNav from "./components/AppNav";

    export default {
        name: 'App',
        components: {AppNav},
        data() {
            return {
                pages
            }
        }
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
