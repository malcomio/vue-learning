<template>
  <tr class="govuk-table__row">
    <td class="govuk-table__cell">
      <input class="govuk-input"
             v-if="isEditable" :value="containerNumber" type="text" name="containerNumber"
             @input="handleChange"/>
    </td>
    <td class="govuk-table__cell">
      <input class="govuk-input"
             v-if="isEditable" :value="sealNumber" @input="handleChange" type="text"
             name="sealNumber"/>
    </td>
    <td class="govuk-table__cell" v-if="isEditable">
      <button class="govuk-button govuk-button--secondary" @click="$parent.removeRow(index, $event)"
              v-if="$parent.form.rows.length > 1">
        <span class="fas fa-trash-alt"></span>
      </button>
    </td>
  </tr>
</template>

<script>
    import useVuelidate from '@vuelidate/core';
    import {helpers, alphaNum } from '@vuelidate/validators';

    const containerNumberFormat = helpers.regex(/^[a-zA-Z]{3}[U,J,Z,u,j,z]{1}\d{7}$/g);

    const eitherField = (value, siblings) => {
        return siblings.containerNumber.length > 0 || siblings.sealNumber.length > 0;
    };

    export default {
        name: 'NestedValidationsChild',
        setup() {
            return { v$: useVuelidate() };
        },
        data() {
            return {
                row: {
                    containerNumber: '',
                    sealNumber: '',
                    rowState: ''
                }
            }
        },
        validations() {
            return {
                row: {
                    containerNumber: {
                        containerNumberFormat: helpers.withMessage('The container number must be in the correct format', containerNumberFormat),
                        $autoDirty: true
                    },
                    sealNumber: {
                        alphaNum: helpers.withMessage('The seal number must only contain letters and numbers', alphaNum),
                        $autoDirty: true
                    },
                    rowState: {
                        eitherField: helpers.withMessage('Please enter either the container number or seal number', eitherField),
                        $autoDirty: true
                    }
                }
            }
        },
        methods: {
            handleChange(e) {
                const field = e.target.name;
                const value = e.target.value;

                this.row[field] = value;

                this.v$.row.rowState.$touch();

                this.$emit('handle-change', {
                    value,
                    field,
                    index: this.index
                })
            }
        },
        props: {
            containerNumber: String,
            sealNumber: String,
            isEditable: Boolean,
            index: Number
        },
        emits: ['handle-change']
    }
</script>
