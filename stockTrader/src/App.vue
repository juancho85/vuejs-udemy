<template>
    <div class="container">
      <app-header></app-header>
      <div class="row">
        <div class="col-xs-12">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <!--<app-footer></app-footer>-->
    </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
    }
  }
</script>

<style>
  body {
    padding: 30px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    /*opacity: 1; //not needed cause it is implied */
  }

  .fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }



</style>
