<template>
<div>
    <main-menu/>
    <main-component />
    <footer-1 />
</div>
</template>


<script>
import mainComponent from "../components/mainComponent.vue"
import footer1 from "../components/footer.vue"
export default {
name:"mainView",
components:{
    'main-component':mainComponent,
    'footer-1':footer1,


}    
}
</script>