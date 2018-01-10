<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
    <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
  </ul>
</template>

<script>
  export default { }
</script>
