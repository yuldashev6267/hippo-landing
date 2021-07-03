<template>
    <div class="h-100">
        <div class="homepage">
            <div :class="isOpen == true ? 'landing-page show-mobile-menu': 'landing-page'" >
                 <mobile-menu :isOpen="isOpen" />
                 <div class="main-container">
                     <main-menu :handleOpen="handleOpen"  :showNavbar="showNavbar" :lastScrollPosition="lastScrollPosition" />
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

const OFFSET = 60

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
        showNavbar: true,
        lastScrollPosition: 0,
        scrollValue: 0,
        }
    },
     mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
    methods:{
        handleOpen(){
            this.isOpen = !this.isOpen
        },
     handleScroll(e) {
     if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
     this.isOpen = false
}
    },
    created() {
    window.addEventListener('scroll', this.handleScroll);
  },
   beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },     
}
</script>
<style>
@import '../assets/css/style.css';
</style>