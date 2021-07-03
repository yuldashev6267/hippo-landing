<template>
   <div class="landing-page-nav" >
        <div style="height: initial;">
            <div :class="showNavbar && lastScrollPosition < 60 ? 'headroom--top headroom--not-bottom headroom--pinned headroom':'headroom--not-top headroom--not-bottom headroom--pinned headroom'" :style="showNavbar ? 'position: relative; top: 0px; left: 0px; right: 0px; z-index: 9999; transform: translate3d(0px, 0px, 0px)':'position: fixed; top: 0px; left: 0px; right: 0px; z-index: 9999; transform: translate3d(0px, -100%, 0px); transition: all 250ms ease-in-out 0s;'">
                <nav>
                    <div class="container d-flex align-items-center justify-content-between">
                        <a href="javascript:;" class="navbar-logo pull-left">
                            <img src="../../assets/Hippo_size_2.png" alt="" style="width:150px" >
                        </a>
                            <ul class="navbar-nav d-none d-lg-flex flex-row">
                                            <li class="nav-item"><router-link to="/tariffs" class="router">Тарифы</router-link></li> 
      <li class="nav-item"><router-link to="/services" class="router">Услуги</router-link></li> 
      
       <li class="nav-item"><router-link to="/support" class="router">Поддержка</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="router">Контакты</router-link></li> 
                                           
                                        </ul> <span class="mobile-menu-button"><i @click="handleOpen" class="logo fas fa-bars" :style="lastScrollPosition > 60?'color:#3a3a3a':''"></i></span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>  
</template>
<script> 

export default { 
    name:"mainMenu",
     props:{
        handleOpen:{
            type:Function
        },
    showNavbar:{
      type:Boolean  
    },
   lastScrollPosition:{
       type:Number
   }
     }
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css);

.logo {
    font-size: 1.5rem;
    color: #fff;
}
</style>
