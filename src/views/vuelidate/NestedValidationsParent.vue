<template>
  <p
      v-for="error of v$.$errors"
      :key="error.$uid"
  >
    <strong>{{ error.$validator }}</strong>
    <small> on property</small>
    <strong>{{ error.$property }}</strong>
    <small> says:</small>
    <strong>{{ error.$message }}</strong>
  </p>
  <table>
  <nested-validations-child v-for="(item, index) in form.rows"
         :key="item"
         :index="index"
         :container-number="item.containerNumber"
         :seal-number="item.sealNumber"
         :is-editable="true"
         v-on:handle-change="handleChange($event)"
  ></nested-validations-child>
    <tr class="govuk-table__row" v-for="(item, index) in form.rows" :key="index">
      <td class="govuk-table__cell">{{item.containerNumber}}</td>
      <td class="govuk-table__cell">{{item.sealNumber}}</td>
    </tr>
  </table>
  <a class="govuk-link" id="add-a-new-table-row" href="#" v-on:click="addItem($event)">Add a new row</a>
  <button class="govuk-button"
          v-on:click="submit">
    Save and return to task list
  </button>
</template>

<script>
    import useVuelidate from '@vuelidate/core';
    import NestedValidationsChild from './NestedValidationsChild';

    // TODO: bootstrap styles
    export default {
        name: 'NestedValidationsParent',
        components: { NestedValidationsChild },
        setup () {
            return { v$: useVuelidate() }
        },
        data() {
            return {
                form: {
                    rows: [
                        { containerNumber: "", sealNumber: "" }
                    ]
                },
                validation: {
                    rows: []
                },
                loaded: false
            }
        },
        methods: {
            addItem(e) {
                e.preventDefault();
                this.form.rows.push({
                    containerNumber: "",
                    sealNumber: ""
                });
            },
            removeRow: function (index, e) {
                e.preventDefault();
                this.form.rows.splice(index, 1);
            },
            handleChange(payload) {
                this.form.rows[payload.index][payload.field] = payload.value;
            },

            async submit() {
                const isFormValid = await this.v$.$validate();
                alert(isFormValid);
            }
        }
    }
</script>
