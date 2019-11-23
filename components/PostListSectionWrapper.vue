<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="background-color: rgba(256, 256, 256, 0.8);">
        <SectionHeader>{{pageTitle}}</SectionHeader>
        <Article v-for="post in posts" :key="post.id" :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Article from '../components/core/Article';
  import SectionHeader from './core/SectionHeader';

  import { mapMutations, mapState } from 'vuex';
  export default {
    props:['pageTitle', 'posts'],
    components: {
      Article,
      SectionHeader
    },
    computed: {
      ...mapState(['sections']),
    }
  }
</script>