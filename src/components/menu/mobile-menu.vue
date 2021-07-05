<template>
    <div class="mobile-menu"><a href="javascript:;" class="logo-mobile"><img src="../../assets/Logo_blue.png" alt=""></a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><router-link to="/" class="router">Главная 
</router-link></li> 
                         <li class="nav-item"><router-link to="/tariffs" class="router">Тарифы</router-link></li> 
      <li class="nav-item"><router-link to="/services" class="router">Услуги</router-link></li> 
      
       <li class="nav-item"><router-link to="/support" class="router">Поддержка</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="router">Контакты</router-link></li> 
                        
                       
                    </ul>
                </div>
</template>

<script>
export default {
    name:"mobileMenu",
    
}

</script>
<style >

</style>