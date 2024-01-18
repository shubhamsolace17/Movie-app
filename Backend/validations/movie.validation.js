const { Joi } = require('express-validation');
const { commonValidations } = require('./common.validation');

module.exports = {
    createMovie: {
        body: Joi.object({
            title: commonValidations.stringRequired,
            publishingYear: commonValidations.dateRequired,
            poster: commonValidations.fileOptional
        }).required(),
        params: Joi.object({}).optional(),
        query: Joi.object({}).optional(),
        headers: Joi.object({
            'Authorization': commonValidations.stringRequired
        }).required()
    },
    updateMovie: {
        body: Joi.object({
            title: commonValidations.stringRequired,
            publishingYear: commonValidations.dateRequired,
            poster: commonValidations.fileOptional
        }).required(),
        params: Joi.object({}).optional(),
        query: Joi.object({}).optional(),
        headers: Joi.object({
            'Authorization': commonValidations.stringRequired
        }).required()
    },
    deleteMovie: {
        body: Joi.optional({}).optional(),
        params: Joi.object({ id: commonValidations.objectIdRequired }).optional(),
        query: Joi.object({}).optional(),
        headers: Joi.object({
            'Authorization': commonValidations.stringRequired
        }).required()
    },
    movieList: {
        body: Joi.required({
            pagination: commonValidations.booleanOptional,
            page: commonValidations.numberOptional,
            limit: commonValidations.numberOptional,
        }).required(),
        params: Joi.object({}).optional(),
        query: Joi.object({}).optional(),
        headers: Joi.object({
            'Authorization': commonValidations.stringRequired
        }).required()
    },
    getMovie: {
        body: Joi.required({}).optional(),
        params: Joi.object({ id: commonValidations.objectIdRequired }).required(),
        query: Joi.object({}).optional(),
        headers: Joi.object({
            'Authorization': commonValidations.stringRequired
        }).required()
    }
};