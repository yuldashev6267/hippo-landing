<template>
<div>
    <div class="landing-page">
    <main-menu />
    </div>
    <tariffs />
</div>
</template>


<script>
import MainMenu from '../components/menu/main-menu.vue'
import tariffs from "../components/routerComponents/tariffs.vue"
export default {
    name:"tariffs-view",
    components:{
        tariffs,
        'main-menu':MainMenu
    }
}
</script>