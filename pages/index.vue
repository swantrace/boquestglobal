<template>
  <v-container fluid :style="{
      paddingTop: $vuetify.breakpoint.mdAndUp ? '93px' : '',
      backgroundImage: 'url(' + `${sections[currentSectionName].background_image_url}` + ')',
      backgroundRepeat:'repeat',
      minHeight: 'calc(100vh - 72px)',
      backgroundSize:'cover',
      backgroundPosition: 'center'
    }" :class="`${currentSectionName}_container`">
    <v-row align-center>
      <v-col>
        <v-card flat v-on:click.native="setSection('home')" v-if="!$vuetify.breakpoint.mdAndUp">
          <v-img v-if="currentLanguageName == 'english'" :src="english_social_banner" width="auto"></v-img>
          <v-img v-if="currentLanguageName == 'chinese'" :src="chinese_social_banner" width="auto"></v-img>
        </v-card>
        <v-slide-x-transition hide-on-leave>
          <HomePageSectionWrapper 
            v-if="currentSectionName==='home'"
            :page-title="sections.home[`${currentLanguageName}_title`]"  
            :page-content="sections.home[`${currentLanguageName}_content`]"  
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <NormalPageSectionWrapper 
            v-if="currentSectionName==='about_us'" 
            :page-title="sections.about_us[`${currentLanguageName}_title`]"  
            :page-content="sections.about_us[`${currentLanguageName}_content`]"  
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <NormalPageSectionWrapper 
            v-if="currentSectionName==='services'" 
            :page-title="sections.services[`${currentLanguageName}_title`]"  
            :page-content="sections.services[`${currentLanguageName}_content`]" 
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <NormalPageSectionWrapper 
            v-if="currentSectionName==='clients'" 
            :page-title="sections.clients[`${currentLanguageName}_title`]"  
            :page-content="sections.clients[`${currentLanguageName}_content`]" 
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <NormalPageSectionWrapper 
            v-if="currentSectionName==='candidates'" 
            :page-title="sections.candidates[`${currentLanguageName}_title`]"  
            :page-content="sections.candidates[`${currentLanguageName}_content`]"   
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <PostListSectionWrapper 
            v-if="currentSectionName==='blog'" 
            :page-title="sections.blog[`${currentLanguageName}_title`]"  
            :posts="sections.blog.list"
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <NormalPageSectionWrapper 
            v-if="currentSectionName==='contact_us'" 
            :page-title="sections.contact_us[`${currentLanguageName}_title`]"  
            :page-content="sections.contact_us[`${currentLanguageName}_content`]"    
          />
        </v-slide-x-transition>
        <v-slide-x-transition hide-on-leave>
          <PrivacyPolicySectionWrapper 
            v-if="currentSectionName==='privacy_policy'" 
            :page-title="sections.privacy_policy[`${currentLanguageName}_title`]"  
            :page-content="sections.privacy_policy[`${currentLanguageName}_content`]"    
          />
        </v-slide-x-transition>
      </v-col>
    </v-row>   
  </v-container>
</template>
<style scoped>

</style>
<script>
  import { mapState, mapMutations } from 'vuex';
  import HomePageSectionWrapper from '../components/HomePageSectionWrapper';
  import NormalPageSectionWrapper from '../components/NormalPageSectionWrapper';
  import PostListSectionWrapper from '../components/PostListSectionWrapper';
  import PrivacyPolicySectionWrapper from '../components/PrivacyPolicySectionWrapper';
  import Footer from '../components/core/Footer';

  export default {
    components: {
      HomePageSectionWrapper,
      NormalPageSectionWrapper,
      PostListSectionWrapper,
      PrivacyPolicySectionWrapper,
      Footer
    },
    async fetch ({$axios, store}) {
      return $axios.$get('http://wp.boquestglobal.com/wp-json/acf/v3/pages/5461')
      // return Promise.resolve(data)
      .then(function(result) {
        return result.acf;
      })
      .then(function(data){
        [
          ['Home', 'home'], 
          ['AboutUs', 'about_us'], 
          ['Services', 'services'], 
          ['Clients', 'clients'], 
          ['Candidates', 'candidates'], 
          ['Blog', 'blog'], 
          ['ContactUs', 'contact_us'], 
          ['PrivacyPolicy', 'privacy_policy']
        ].forEach(function fillData(sectionNamePairs){
          store.commit(`set${sectionNamePairs[0]}`, sectionNamePairs[1] === 'blog'?({
              list: data[sectionNamePairs[1]],
              background_image_url: data[`${sectionNamePairs[1]}_background_image`]
          }):sectionNamePairs[1] === 'privacy_policy'?({
            english_content: data[sectionNamePairs[1]].post_content,
            chinese_content: data[sectionNamePairs[1]].post_content,
            background_image_url: data[`${sectionNamePairs[1]}_background_image`]
          }):({
              english_title: data[`${sectionNamePairs[1]}_english`].post_title,
              chinese_title: data[`${sectionNamePairs[1]}_chinese`].post_title,
              english_content: data[`${sectionNamePairs[1]}_english`].post_content,
              chinese_content: data[`${sectionNamePairs[1]}_chinese`].post_content,
              background_image_url: data[`${sectionNamePairs[1]}_background_image`]
          }))
        })
      })
      .catch(function(error){
        console.log(error);
      })

    },

    metaInfo () {
      return {
        title: 'BoQuest Global'
      }
    },

    data: () => ({
      //
    }),

    computed: {
      ...mapState([
        'sections',
        'currentSectionName',
        'language_names',
        'currentLanguageName',
        'footerIsShow',
        'english_social_banner',
        'chinese_social_banner'
      ])
    },

     methods: {
      ...mapMutations([
        'setSection',
        'setHome',
        'setAboutUs', 
        'setServices',
        'setClients',
        'setCandidates',
        'setBlog',
        'setContactUs',
        'setPrivacyPolicy',    
        'setLanguage',
        'showFooter',
        'hideFooter',
        'showDrawer',
        'hideDrawer'
      ])
     }

  }
</script>
