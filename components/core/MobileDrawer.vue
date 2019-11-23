<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    light
    temporary
    right
  >
    <v-list       
      align="start"
      class="flex-column fill-height"
      justify="center"
    >
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        @click="menuItemClickHandler(item)"
      >
        <v-list-item-title class="menu-item-text" v-text="sections[item][`${currentLanguageName}_title`]" />
      </v-list-item>
      <v-list-item>
        <v-btn-toggle dark dense mandatory background="transparent">
          <v-btn class="language-option" small @click="setLanguage('english')">{{language_names[currentLanguageName].english}}</v-btn>
          <v-btn class="language-option" small @click="setLanguage('chinese')">{{language_names[currentLanguageName].chinese}}</v-btn>
        </v-btn-toggle>
      </v-list-item>
    </v-list>
    <div class="mt-auto">

    </div>
  </v-navigation-drawer>
</template>
<style scoped>
.menu-item-text {
  text-transform: uppercase;
  font-family: GothamBold, sans-serif;
  color: #919699;
}
.language-option {
  font-family: GothamBold, sans-serif;
}
</style>
<script>
import { mapMutations, mapState } from 'vuex';  
  export default {
    name: 'MobileDrawer',
    components: {
    },
    computed: {
      ...mapState(
        [
          'sections',
          'language_names',
          'currentLanguageName',
          'menuItems'
        ]
      ),
      drawer: {
        get: function() {
          return this.$store.state.drawerIsShow
        },
        set: function(val) {
          if(val == true) {
            this.showDrawer();
          } else {
            this.hideDrawer();
          }
        }
      }
    },

    methods: {
      ...mapMutations([
        'setSection',
        'setLanguage',
        'hideDrawer',
        'showDrawer'
      ]),
      menuItemClickHandler(name) {
        this.setSection(name);
        this.hideDrawer();
      }
    }
  }
</script>
