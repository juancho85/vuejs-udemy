<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-server-list></app-server-list>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import ServerList from './components/ServerList.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      appHeader: Header,
      appServerList: ServerList,
      appFooter: Footer,
    }
  }
</script>
