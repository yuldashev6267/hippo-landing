<template>
   <div class="landing-page-nav">
        <div style="height: initial;">
            <div class="headroom--not-top headroom--not-bottom headroom--unpinned headroom" style="position: relative; top: 0px; left: 0px; right: 0px; z-index: 9999; transform: translate3d(0px, 0px, 0px);">
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
                                           
                                        </ul> <span class="mobile-menu-button"><i @click="handleOpen" class="logo fas fa-bars"></i></span>
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
         methods: {
        handleScroll: function (event) {
            // your code here
        }
    },

    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
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