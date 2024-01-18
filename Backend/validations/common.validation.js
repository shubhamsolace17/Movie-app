const { Joi } = require("express-validation");
const {
    DATE_REGEX,
    ERROR_MESSAGES,
    URL_REGEX,
    VALIDATE_STRING_REGEX,
    OBJECTID_REGEX
} = require("../common/constants");

const commonValidations = {
    objectRequired: Joi.object().required(),
    objectOptional: Joi.object().optional(),
    stringRequired: Joi.string().required(),
    stringRequiredWithValidatation: Joi.string()
        .regex(VALIDATE_STRING_REGEX)
        .required(),
    stringOptional: Joi.string().allow("", null).empty("").optional(),
    numberRequired: Joi.number().required(),
    numberOptional: Joi.number().allow(null).optional(),
    booleanRequired: Joi.boolean().required(),
    booleanOptional: Joi.boolean().optional(),
    arrayRequired: Joi.array().required(),
    arrayOptional: Joi.array().optional(),
    dateRequired: Joi.string()
        .regex(DATE_REGEX)
        .required()
        .error(() => ERROR_MESSAGES.INVALID_DATE),
    dateOptional: Joi.alternatives().try(
        Joi.string()
            .regex(DATE_REGEX)
            .error(() => ERROR_MESSAGES.INVALID_DATE),
        Joi.allow(null),
        Joi.optional()
    ),
    minRequired: (value) => Joi.number().min(value).required(),
    minOptional: (value) => Joi.number().min(value).optional(),
    emailRequired: Joi.string().email().required(),
    emailOptional: Joi.string().email().optional(),
    fileOptional: Joi.array()
        .items(
            Joi.object().keys({
                encoding: Joi.string().optional(),
                fieldname: Joi.string().optional(),
                mimetype: Joi.string().optional(),
                originalname: Joi.string().optional(),
                size: Joi.number().optional()
            })
        )
        .optional(),
    fileRequired: Joi.array()
        .items(
            Joi.object().keys({
                encoding: Joi.string().required(),
                fieldname: Joi.string().required(),
                mimetype: Joi.string().required(),
                originalname: Joi.string().required(),
                size: Joi.number().required()
            })
        )
        .required(),
    UrlRequired: Joi.string()
        .regex(URL_REGEX)
        .required()
        .error(() => ERROR_MESSAGES.INVALID_URL),
    UrlOptional: Joi.string()
        .regex(URL_REGEX)
        .allow("", null)
        .optional()
        .error(() => ERROR_MESSAGES.INVALID_URL),
    objectIdRequired: Joi.string()
        .regex(OBJECTID_REGEX)
        .required(),
    objectIdOptional: Joi.string()
        .regex(OBJECTID_REGEX)
        .allow(null)
        .optional(),
};

module.exports = {
    commonValidations,
};
