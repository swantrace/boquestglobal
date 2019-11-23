<template>
  <v-footer
    class="justify-space-between footer"
    dark
    height="auto"
    v-if="footerIsShow"
  >
    <v-row
      align="center"
      justify="space-between"
    >
      <v-col
        class="text-center text-md-left"
        cols="12"
        md="4"
      >
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="text-capitalize text-right"
          text
          @click="setSection('privacy_policy')"
        >
          <span v-text="link.name" class="privacy-policy-text" />
        </v-btn>
      </v-col>
      <v-col
        class="pb-3 text-center"
        cols="12"
        md="4"
        order="1"
        order-sm="0"
      >
        &copy; {{ (new Date()).getFullYear() }} BoQuest Global. All rights reserved.
      </v-col>
      <v-col
        class="text-center text-md-right"
        cols="12"
        md="4"
      >
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          class="ma-0 text-capitalize"
          text
          small
          @click.stop="social.link?redirect_to(social.link):wechatQRCodeOpened=true"
        >
          <v-icon
            class="mr-1"
            v-text="social.icon"
          />
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
      v-model="wechatQRCodeOpened"
      max-width="200"
    >
      <v-card>
        <v-img
            height="200"
            width="200"
            :src="require(`@/assets/imgs/wechat.jpg`)"
        ></v-img>
      </v-card>
    </v-dialog>
  </v-footer>
</template>
<style scoped>
  .footer {
    z-index: 99999;
  }
    .privacy-policy-text {
    text-transform: uppercase;
    font-family: GothamBold, sans-serif;
  }
</style>
<script>

  import { mapMutations, mapState } from 'vuex';
  export default {
    data: () => ({
      links: [
        { 
          name: 'Privacy Policy', 
          path: '/privacy-policy' 
        },
      ],
      socials: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com",
          icon: "mdi-linkedin"
        },
        {
          name: "twitter",
          link: "https://www.twitter.com",
          icon: "mdi-twitter"
        },
        {
          name: "facebook",
          link: "https://www.facebook.com",
          icon: "mdi-facebook"
        },
        {
          name: "instagram",
          link: "https://www.instagrm.com",
          icon: "mdi-instagram"
        },
        { 
          name: "wechat", 
          link: "", 
          icon: "mdi-wechat",
          modal: "wechatQRCodeOpened" 
        }
      ],
      wechatQRCodeOpened: false
    }),
    computed: {
      ...mapState(["footerIsShow"])
    },
    methods: {
      redirect_to: function(url) {
        location.href=url;
      },
      ...mapMutations([
        'setSection'
      ])
    }
  }
</script>
