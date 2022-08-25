# we-love-movies
delpoyed app using heroku: https://lovers-of-movies.herokuapp.com

#movies
you can access the list of movies with /movies
you can access a list of showing movies with /movies?is_showing=true
and with /movies/movieId you can get specific movies by their ids
you can access the theaters a movie is playing at, with /movies/movieId/theaters
you can access a movies reviews with /movies/movieId/reviews

#theaters
you can access the list of theaters at /theaters
and at /theaters/theaterId you can get specific movies by their ids


#theaters
you can update reviews with a put request to /reviews/reviewId
or delete a review with the same address
