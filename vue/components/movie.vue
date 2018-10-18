<template>	
	<div class="container-fluid p-4" v-if="movie">
		<h1 class="mb-5 text-center">{{ movie.title }}</h1>
		<img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="" class="float-left mr-4">
		<p>{{ movie.overview }}</p>
		<a href="/" class="btn btn-primary">На главную</a>
	</div>
</template>

<script>
	const APIKEY = "07f6d9e49c58fcfe418f914c5c7d7a9e";
	let url = "https://api.themoviedb.org/3/movie/"; 

	module.exports = {
		data() {
			return {
				movie: null
			}
		},
		created() {
			this.$http.get(url + this.$route.params.id + "?api_key=" + APIKEY).then(result => result.json()).then(function(data) {
					console.log(data);
					this.movie = data;
			});
		}
	}
</script>