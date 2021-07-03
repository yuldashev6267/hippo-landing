<template>
    <div :class="isOpen == true ? 'landing-page show-mobile-menu': 'landing-page'">
 <div class="mobile-menu"><a href="javascript:;" class="logo-mobile"><img src="../assets/Hippo_size_2.png" alt=""></a>
                    <ul class="navbar-nav">
                          <li class="nav-item"><router-link to="/tariffs" class="router">Тарифы</router-link></li> 
      <li class="nav-item"><router-link to="/services" class="router">Услуги</router-link></li> 
      
       <li class="nav-item"><router-link to="/support" class="router">Поддержка</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="router">Контакты</router-link></li> 
                        <li class="nav-item">
                            <div class="separator"></div>
                        </li>
                       
                    </ul>
                </div>    <div class="main-container">
   <div class="landing-page-nav" style="background-color:#3a3a3a;position:relative">
        <div style="height: initial;">
            <div class="headroom--not-top headroom--not-bottom headroom--unpinned headroom" style="position: relative; top: 0px; left: 0px; right: 0px; z-index: 9999; transform: translate3d(0px, 0px, 0px);">
                <nav>
                    <div class="container d-flex align-items-center justify-content-between">
                        <a href="javascript:;" class="navbar-logo pull-left">
                            <img src="../assets/Hippo_size_2.png" alt="" style="width:150px" >
                        </a>
                            <ul class="navbar-nav d-none d-lg-flex flex-row">
                                            <li class="nav-item"><router-link to="/tariffs" class="router">Тарифы</router-link></li> 
      <li class="nav-item"><router-link to="/services" class="router">Услуги</router-link></li> 
      
       <li class="nav-item"><router-link to="/support" class="router">Поддержка</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="router">Контакты</router-link></li> 
                                           
                                        </ul> <span class="mobile-menu-button"><i @click="handleOpen" class="logo fas fa-bars"></i></span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div> 
    </div>
    <services-view />
</div>
</template>

<script>
import services from "../components/routerComponents/services.vue"
export default {
    name:"servicesView",
    components:{
        'services-view':services
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