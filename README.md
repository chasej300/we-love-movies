# we-love-movies
delpoyed app using heroku: https://lovers-of-movies.herokuapp.com

### movies
GET /movies - list of all movies  
GET /movies?is_showing=true - list of all movies that are showing  
GET /movies/movieId - a specific movie  
GET /movies/movieId/theaters - list of theaters a movie is showing at  
GET /movies/movieId/reviews - a movies reviews

### theaters
GET /theater - list of all theaters  

### reviews
PUT /reviews/reviewId - update a review  
DELETE /reviews/reviewId - deletes a review
