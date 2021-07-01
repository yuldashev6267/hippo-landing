<template>
    <services-view />
</template>

<script>
import services from "../components/routerComponents/services.vue"
export default {
    name:"servicesView",
    components:{
        'services-view':services
    }
}
</script>