<template>
  <div class="user">
    <h3>{{ name }}</h3>
    <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p><nuxt-link to="/">List of users</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData ({ params, error }) {
    return axios.get(`https://api.myjson.com/bins/1dvnsf/${+params.id}`)
    .then((res) => res.data)
    .catch(() => {
      error({ message: 'User not found', statusCode: 404 })
    })
  }
}
</script>
