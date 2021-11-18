<template>
  <input v-model="message" />
  <button @click="submit">Submit</button>
</template>

<script>
    export default {
        name: 'WorkboxTest',
        data() {
            return {
                message: ''
            }
        },
        methods: {
            async submit() {
                const postData = {
                    message: this.message + ' at ' + new Date().toISOString()
                };
                console.log('trying to post', postData.message);
                fetch('../api/test.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                }).then(response => {
                    console.log(response.json());
                }).catch(error => {
                    console.log(error);
                });
            }
        }

    }
</script>
