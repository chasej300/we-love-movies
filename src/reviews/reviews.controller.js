const service = require('./reviews.service');
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);

    if (review) {
        res.locals.review = review;
        return next();
    }
    return next({status: 404, message: "review cannot be found."});
}

async function list(req, res, next) {
    const data = await service.list(req.params.movieId);
    const dataArr = Object.values(data);
    dataArr.forEach((val) => {
        let critic = {};
        critic.preferred_name = val.preferred_name;
        critic.surname = val.surname;
        critic.organization_name = val.organization_name;
        delete val.preferred_name;
        delete val.surname;
        delete val.organization_name;
        val.critic = critic;
    })
    res.send({data: dataArr});
}

async function update(req, res, next) {

    const updatedReview = {
        ...req.body.data,
        review_id: res.locals.review.review_id,
    }
    //console.log(updatedReview);
    await service.update(updatedReview);
    const data = await service.read(res.locals.review.review_id);
    data.updated_at = Date().toString();

    res.json({data})
}

async function destroy(req, res) {
    await service.delete(res.locals.review.review_id);
    res.sendStatus(204);
}

module.exports = {
    list,
    update: [reviewExists, update],
    delete: [reviewExists, asyncErrorBoundary(destroy)],
}