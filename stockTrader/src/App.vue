<template>
    <div class="container">
      <app-header></app-header>
      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>
      <app-footer></app-footer>
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
</style>
