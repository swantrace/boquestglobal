<template>
  <v-navigation-drawer id="drawer"
    v-if="$vuetify.breakpoint.mdAndUp"
    app
    floating
    class="text-center"
    color="transparent"
    permanent
  >
    <v-list       
      align="center"
      class="flex-column fill-height"
    >
      <v-list-item class="justify-center">
        <v-card flat v-on:click.native="setSection('home')">
          <v-img :src="require(`@/assets/imgs/${currentLanguageName}_logo.jpg`)" width="auto"></v-img>
        </v-card>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        @click="menuItemClickHandler(item)"
      >
        <v-list-item-title class="menu-item-text" v-text="sections[item][`${currentLanguageName}_title`]" />
      </v-list-item>
      <v-list-item class="justify-center">
        <v-btn-toggle dark dense mandatory background="transparent">
          <v-btn class="language-option" small @click="setLanguage('english')">{{language_names[currentLanguageName].english}}</v-btn>
          <v-btn class="language-option" small @click="setLanguage('chinese')">{{language_names[currentLanguageName].chinese}}</v-btn>
        </v-btn-toggle>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.menu-item-text {
  text-transform: uppercase;
  font-family: GothamBold, sans-serif;
  color: #919699;
  font-size: 11px;
}
.language-option {
  font-family: GothamBold, sans-serif;
}
</style>
<script>
import Logo from './Logo';
import { mapMutations, mapState } from 'vuex';
  
  export default {
    name: 'Drawer',

    components: {
    },

    data: vm => ({}),
    computed: {
      ...mapState([
        'menuItems', 
        'currentLanguageName', 
        'currentSectionName', 
        'language_names',
        'sections'
      ])
    },

    methods: {
      ...mapMutations([
        'setSection',
        'setLanguage'
      ]),
      menuItemClickHandler(name) {
        this.setSection(name);
      }
    }
  }
</script>
