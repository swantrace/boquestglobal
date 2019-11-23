<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mdAndUp"
    app
    floating
    class="text-center"
    color="transparent"
    permanent
  >
    <v-row
      align="center"
      class="flex-column"
      justify="center"
    >
      <v-card flat v-on:click.native="changeSectionNameTo('hero')">
        <v-img :src="require(`@/assets/imgs/logo${currentLocale}.jpg`)" width="auto"></v-img>
      </v-card>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Drawer',

    components: {
    },

    data: vm => ({
      items: [
        {
          text: 'About Me',
          to: '#who-i-am'
        },
        {
          text: 'Services',
          to: '#what-i-can-do-for-you'
        },
        {
          text: 'Experience',
          to: '#where-ive-been'
        },
        {
          text: 'Skills & Education',
          to: '#what-i-know'
        },
        {
          text: 'Portfolio',
          to: '#what-ive-done'
        },
        {
          text: 'Clients',
          to: '#what-my-clients-say'
        },
        {
          text: 'Contact',
          to: '#lets-talk'
        }
      ]
    }),

    methods: {
      ...mapMutations([
        'changeSectionNameTo'
      ])
    },
    computed: {
      currentLocale: function() {
        return this.$root.$i18n.locale;
      }
    }    
  }
</script>