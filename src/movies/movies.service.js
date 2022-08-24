const knex = require("../db/connection")

function list(active = false) {
    if (active) {
        return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .distinct("m.*")
        .where({"mt.is_showing": true});
    }
    else {
        return knex("movies")
        .select("*");
    }
}

function read(movieId) {
    return knex("movies")
    .select("*")
    .where({"movies.movie_id": movieId}).first();
}

function readTheaters(movieId) {
    return knex("theaters as t")
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .select("t.*")
    .where({"mt.movie_id": movieId});
}

function readReviews(movieId) {

}

module.exports = {
    list,
    read,
    readTheaters,
    readReviews,
}