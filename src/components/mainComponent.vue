<template>
    <div class="h-100">
        <div class="homepage">
            <div :class="isOpen == true ? 'landing-page show-mobile-menu': 'landing-page'" >
                 <mobile-menu :isOpen="isOpen" />
                 <div class="main-container">
                     <main-menu :handleOpen="handleOpen"   />
                     <div class="content-container">
                         <section-home />
                         <div class="section">
                             <div class="container">
                                 <row-1 />
                                 <row-2 />
                                 <row-3 />
                                 <row-4/>
                                 <row-5 />
                                 <row-6/>
                             </div>
                         </div>
                         <section-back/>
                     </div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import MobileMenu from './menu/mobile-menu.vue'
import MainMenu from './menu/main-menu.vue'
import sectionHome from "./section-home.vue"
import Row1 from './rows/row-1.vue'
import Row2 from './rows/row-2.vue'
import Row3 from './rows/row-3.vue'
import Row4 from './rows/row-4.vue'
import Row5 from './rows/row-5.vue'
import Row6 from './rows/row-6.vue'
import SectionBack from './section-back.vue'
import Footer from './footer.vue'
export default {
    name:"mainComponent",
    components:{
        'mobile-menu':MobileMenu,
        'main-menu':MainMenu,
        'section-home':sectionHome,
        'row-1':Row1,
        'row-2':Row2,
        'row-3':Row3,
        'row-4':Row4,
        'row-5':Row5,
        'row-6':Row6,
        'section-back':SectionBack,
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
<style>
@import '../assets/css/style.css';
</style>