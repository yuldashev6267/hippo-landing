<template>
<div :class="isOpen == true ? 'landing-page show-mobile-menu': 'landing-page'">
    <mobile-menu :isOpen="isOpen" />
    <div class="main-container">

    <main-menu :handleOpen="handleOpen" style="background-color:#3a3a3a;position:relative"/>
    </div>
    <contact-view />
</div>
</template>

<script>
import MainMenu from '../components/menu/main-menu.vue'
import MobileMenu from '../components/menu/mobile-menu.vue'
import contact from "../components/routerComponents/contact.vue"
export default {
    name:"contactView",
    components:{
        'contact-view':contact,
        'main-menu':MainMenu,
        'mobile-menu':MobileMenu
    },
     data(){
        return {
          isOpen:false,
        }
    },
    methods:{
      handleOpen(){
        this.isOpen = !this.isOpen;
      },
    
    },
}
</script>