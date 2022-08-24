const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties")

const addCritic = mapProperties({
    organization_name: "critic.organization_name",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname"
})

function list(movieId) {
    return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select("r.*", "c.*")
    .where({"r.movie_id": movieId})
    .then(addCritic);
}

function update(updatedReview) {
    return knex("reviews")
      .select("*")
      .where({ review_id: updatedReview.review_id })
      .update(updatedReview, "*");
}

function read(reviewId) {
    return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select("r.*", "c.*")
    .where({"r.review_id": reviewId})
    .first()
    .then(addCritic);
}

function destroy(reviewId) {
    return knex("reviews")
    .where({review_id: reviewId})
    .del();
}

module.exports = {
    list,
    read,
    update,
    delete: destroy
}