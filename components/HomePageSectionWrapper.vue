<template>
  <v-container>
    <v-row>
      <v-col md="9" style="background-color: rgba(256, 256, 256, 0.8);">
        <SectionHeader><vue-typer text='Explores Potential'></vue-typer></SectionHeader>
        <main n v-html="pageContent" />
      </v-col>
    </v-row>
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