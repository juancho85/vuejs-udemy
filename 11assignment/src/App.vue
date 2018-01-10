<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-full-name v-model="fullname"></app-full-name>
                    <div class="input-group">
                      <label for="email">Mail:</label>
                      <input type="text" id="email" name="email" v-model="email">
                    </div>
                    <div class="input-group">
                      <label for="password">Password:</label>
                      <input type="password" id="password" name="password" v-model="password">
                    </div>
                    <div class="input-group">
                      <label>Store in Database?:</label>
                      <input type="radio" id="store_y" name="store" value="Yes" v-model="store">
                      <label for="store_y">Yes</label>
                      <input type="radio" id="store_n" name="store" value="No" v-model="store">
                      <label for="store_n">No</label>
                    </div>
                    <button class="btn btn-primary" @click.prevent="submitted = true">Save</button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row"  v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div  class="panel panel-default">
                  <div class="panel-heading">
                    <h4>Your Data</h4>
                  </div>
                  <div class="panel-body">
                    <p>Full Name: {{ fullname }}</p>
                    <p>Mail: {{ email }}</p>
                    <p>Password: {{ password }}</p>
                    <p>Store in Database?: {{ store }}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Fullname from './FullName.vue';
    export default {
      data() {
        return {
          fullname: 'Juancho Sánchez',
          email: '',
          password: '',
          store: 'Yes',
          submitted: false
        }
      },
      components: {
        appFullName: Fullname
      }
    }
</script>

<style>
</style>
