<template>
	<div class="ui secondary pointing menu">
		<router-link to='/' class="active item">Image storage</router-link>
		<div class="right menu">

			<!-- <div v-if="isLoggedIn"  class="horizontal"> -->
			<div  class="horizontal">
			<router-link  to="/" class="item" href="">Galleries </router-link>
			<router-link to="/upload" class="item" href="">upload</router-link>
			<a class="item" @click="logout" href="">logout</a>
			</div>
				<!-- <a v-else href="#" class="ui item" @click="login">Login</a> -->
			<a  href="#" class="ui item" @click="login">Login</a>
			{{isLoggedIn}}
		</div>
		</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: "AppHeader",
	methods: mapActions(['login', 'logout']),
	computed: mapGetters(['isLoggedIn']),
}
</script>

<style scoped>
.horizontal{
	display: flex;
	flex-direction: row;
}
</style>