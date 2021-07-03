<template>    
    <div>
      <transition name="fade" mode="out-in"  @beforeLeave="beforeLeave"
      @enter="enter"      @afterEnter="afterEnter">
    <router-view/>
      </transition>
    </div>
</template>

<script>
export default {
  name:"App",
   data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>


<style>
@import './assets/css/style.css';
.fade-enter-active,
.fade-leave-active {
  transition-property: height, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
