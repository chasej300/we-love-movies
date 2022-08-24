const service = require('./movies.service');

async function validateMovieId(req, res, next) {
    const { movieId } = req.params;
    const movie = await service.read(movieId);

    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({status: 404, message: "Movie cannot be found"});
}

async function list(req, res, next) {
    const { is_showing = false } = req.query;
    const data = await service.list(is_showing);
    res.json({data});
}

function read(req, res, next){
    res.json({data: res.locals.movie});
}

async function readTheaters(req, res, next) {
    const { movieId } = req.params;
    const data = await service.readTheaters(movieId);
    res.json({data});
}

module.exports = {
    list,
    read: [validateMovieId, read],
    readTheaters: [validateMovieId, readTheaters],
}