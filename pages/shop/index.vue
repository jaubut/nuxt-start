<template lang="pug">
  .container
    h2 Users from shop
    ul.users
      li(v-for='user in users')
        nuxt-link(:to="'/shop/users/'+user.id") {{ user.name }}
</template>

<script>
import axios from 'axios'

export default {
  asyncData () {
    return axios.get('https://api.myjson.com/bins/1dvnsf')
    .then((res) => {
      return { users: res.data }
    })
  }
}
</script>
