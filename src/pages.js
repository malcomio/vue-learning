const pages = [
    {
      name: 'Home',
      path: '/'
    },
    {
        name: 'ValidateEach',
        path: '/vuelidate/validate-each',
        component: '../views/vuelidate/ValidateEach.vue'
    },
    {
        path: '/vuelidate/nested-validations',
        name: 'Nested Validations',
        component: '@/src/views/vuelidate/NestedValidationsParent.vue'
    }
];

export default pages;
