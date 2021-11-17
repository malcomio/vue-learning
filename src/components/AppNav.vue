<template>
    <div class="app-nav">
        <router-link class="app-nav-link" v-for="(page, index) in pages" :key="index" :to="page.path">{{ page.name }}</router-link>
    </div>
</template>

<script>
    import pages from "../pages";
    export default {
        name: 'AppNav',
        data() {
            return {
                pages
            }
        }
    }
</script>

<style lang="scss">
    .app-nav {
        padding: 30px;

    }

    .app-nav-link {
        font-weight: bold;
        color: #2c3e50;
        margin: .5rem;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
</style>
