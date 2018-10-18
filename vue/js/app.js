import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

import list from "../components/list.vue";
import movie from "../components/movie.vue";

let router = new VueRouter({
	routes: [
		{ path: "/", component: list },
		{ path: "/movie/:id", name: "movie", component: movie }
	]
});

new Vue({
	el: "#app",
	router: router,
	components: {
    	'app-home' : list
    }
})
