<template>
  <v-app id="add-publications" class="bx--content">
    <v-card class="maincard elevation-24">
      <add-form
        :instance="instance"
        add_or_edit="Add"
        method="POST"
      ></add-form>
    </v-card>
  </v-app>
</template>

<script>

import PublicationsForm from '../components/PublicationsForm.vue';

export default {
  name: 'add-publications',
  components: {
    'add-form': PublicationsForm,
  },
  data() {
    return {
      instance: {
        title: '',
        description: '',
        link: '',
      },
    };
  },
};
</script>
