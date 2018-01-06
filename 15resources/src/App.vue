<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vue resource</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input name="username" id="username" type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input name="email" id="email" type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: []
      }
    },
    methods: {
      submit() {
        this.$http.post('', this.user)
          .then(res => {
            console.log(res)
          },
          error => {
            console.log(error)
          });
      },
      fetchData() {
        this.$http.get('')
          .then(res => {
              return res.json();
          }).then(
            data => {
              let result = [];
              for(let key in data) {
                result.push(data[key]);
              }
              this.users = result;
            }
        );
      }
    }
  }
</script>

<style>

</style>
