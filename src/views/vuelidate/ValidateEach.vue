<template>
  <h1>Vuelidate: ValidateEach</h1>

  <a href="https://vuelidate-next.netlify.app/advanced_usage.html#using-the-validateeach-component">Documentation</a>

  <table>
    <ValidateEach
        v-for="(item, index) in collection"
        :key="index"
        :state="item"
        :rules="rules"
    >
      <template #default="{ v }">
        <tr>
          <td>
            <input
                v-model="v.name.$model"
                type="text"
            >
          </td>
          <td><input v-model="v.elephants.$model" type="number" /></td>
          <td
              v-for="(error, errorIndex) in v.$errors"
              :key="errorIndex"
          >
            {{ error.$message }}
          </td>
        </tr>
      </template>
    </ValidateEach>
  </table>
</template>

<script>
    import {reactive} from 'vue'
    import useVuelidate from '@vuelidate/core'
    import {ValidateEach} from '@vuelidate/components'
    import {minLength, required} from '@vuelidate/validators'

    export default {
        name: 'ValidateEachPage',
        components: {ValidateEach},
        setup() {
            const rules = {
                name: {
                    required,
                    minLength: minLength(10)
                },
                elephants: {
                    required
                }
            };
            const collection = reactive([]);

            const v = useVuelidate();

            return {rules, collection, v}
        },
        created() {
            console.log(this);

            this.collection = [
                {name: 'foo', elephants: 15},
                {name: 'bar', elephants: 12}
            ];
        }
    }
</script>
