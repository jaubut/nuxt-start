<template lang="pug">
	div
		h2 Je suis le first post.
		ul(v-for="name in names")
			p {{ name.name }}, {{ name.id}}
		.container-1.center
			.col
				h1 un element
		.container-4.center
			.col
				p allo 1
			.col
				p allo 2
			.col
				p allo 3
			.col
				p allo 4
</template>

<script>
import axios from 'axios'

export default {
	asyncData () {
		return axios.get('https://api.myjson.com/bins/yxoi7')
		.then((res) => {
			return { names: res.data }
		})
	}
}
</script>

<style lang="stylus">

</style>
