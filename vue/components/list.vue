<template>	
	<div class="container-fluid p-4">
		<h1 class="mb-5 text-center">Search movie</h1>

		<form class="mb-5">
			<div class="form-group">
			<input type="text" v-model="search" class="form-control p-4 input-movie" id="movieInput" placeholder="Enter movie name">
			</div>
		</form>

		<div class="d-flex flex-row justify-content-start flex-sm-wrap movie-list-bg">
			<div class="p-2 col-md-3" v-for="movie in filterMovies">
		  		<div class="card">
				  	<img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Card image cap">
				  	<div class="card-body text-center">
				    	<h5 class="card-title">{{ movie.title }}</h5>
				    	<router-link class="btn btn-primary" :to="{name: 'movie', params: {id: movie.id}}">Подробнее</router-link>
				  	</div>
				</div>
			</div>
	
			<div v-if="filterMovies == 0" class="not-found text-center p-4">Not found</div>
		</div>
	</div>
</template>	

<script>

	const APIKEY = "07f6d9e49c58fcfe418f914c5c7d7a9e";
	let url = "https://api.themoviedb.org/3/movie/"; 

	module.exports = {
		data() {
			return {
				search: '',
				movies: []
			}
		},
		computed: {
			filterMovies() {
				return this.movies.filter(movie => {
					return movie.title.toLowerCase().includes(this.search.toLowerCase())
			  })
			}
		},
		created() {
			let arrayMovieLinks = [];
			for (let i = 40; i <= 90; i++) {
				arrayMovieLinks[i] = url + i + "?api_key=" + APIKEY;
				this.$http.get(arrayMovieLinks[i]).then(result => result.json()).then(function(data) {
					this.movies.splice(i, 1, data)

				});
			}
		}
	}
</script>
