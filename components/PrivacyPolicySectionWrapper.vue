<template>
  <v-container>
    <v-col md="12" style="background-color: rgba(256, 256, 256, 0.8);">
      <SectionHeader>{{pageTitle}}</SectionHeader>
      <main v-html="pageContent" />
    </v-col>
  </v-container>
</template>
<script>
  import SectionHeader from './core/SectionHeader';

  export default {
    props: ['pageTitle','pageContent'],
    components:{
      SectionHeader
    }
  }
</script>