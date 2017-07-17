<template>
  <div class="container">
    <h2>Users</h2>
    <ul class="users">
      <li v-for="user in users">
        <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return { users: res.data }
    })
  }
}
</script>
