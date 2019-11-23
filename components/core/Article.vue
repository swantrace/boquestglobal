<template>
  <v-row>
    <v-col cols="12" sm="4">
      <h3 v-text="post.post_title" />
      <p>
        <v-icon>mdi-calendar</v-icon>
        <span v-text="prettyDate(post.post_date)" class="date" />
      </p>
    </v-col>
    <v-col cols="12" sm="8">
      <p v-text="escapeHTML(post.post_excerpt)" />
      <v-btn color="primary" dark @click.stop="moreDetailsButtonClickHandler">
        Read More...
      </v-btn>
      <v-dialog 
        v-model="modeDetailsOpened" 
        fullscreen 
        hide-overlay 
        transition="dialog-bottom-transition"
      >
        <v-card >
          <v-toolbar dark color="primary" tile>
            <v-btn icon dark @click="closeIconClickHandler">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title v-html="post.post_title" />
          </v-toolbar>
          <v-card-text class="pt-12" v-html="post.post_content" />
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<style scoped>
  .date {
    line-height: 24px;
    vertical-align: middle;
    padding-left: 5px;
  }
</style>
<script>
  import moment from 'moment';
  import html2plaintext from 'html2plaintext';
  import {mapMutations} from 'vuex';
  export default {
    props:['post'],
    data: function(){
      return {
        modeDetailsOpened: false
      }
    },
    methods: {
      prettyDate(value) {
        if(!value) return '';
        const date = moment.utc(value);
        return date.format("MMM DD, YYYY");
      },
      escapeHTML(value) {
        if(!value) return '';
        return html2plaintext(value);
      },
      ...mapMutations([
        "hideFooter",
        "showFooter"
      ]),
      moreDetailsButtonClickHandler() {
        this.modeDetailsOpened=true;
        this.hideFooter();
      },
      closeIconClickHandler() {
        this.modeDetailsOpened=false;
        this.showFooter();
      }
    }
  }
</script>
