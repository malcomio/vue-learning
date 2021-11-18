<template>
  <button @click="submit">Submit</button>
</template>

<script>
    export default {
        name: 'WorkboxTest',
        methods: {
            submit() {
                alert('hello');
                fetch('https://example.com/api/test', {
                    method: 'POST',
                    body: 'hello from post'
                })
            }
        }

    }
</script>
