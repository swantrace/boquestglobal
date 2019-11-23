<template>
  <v-app style="background: white;">
    <MobileHeader />
    <MobileDrawer />        
    <drawer />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>
<style scoped>

</style>
<script>
import MobileHeader from '../components/core/MobileHeader';
import MobileDrawer from '../components/core/MobileDrawer';
import Footer from '../components/core/Footer';
import Drawer from "../components/core/Drawer";

export default {
  components: {
    MobileHeader,
    MobileDrawer,
    Drawer,
    Footer
  }
};
</script>