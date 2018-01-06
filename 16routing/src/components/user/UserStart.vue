<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" class="list-group-item" to="user/1">User 1</router-link>
            <router-link tag="li" class="list-group-item" to="user/2">User 2</router-link>
            <router-link tag="li" class="list-group-item" to="user/3">User 3</router-link>
        </ul>
    </div>
</template>

<style scoped>
  li.list-group-item {
    cursor: pointer;
  }
</style>
