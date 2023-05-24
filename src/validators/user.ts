import { Joi } from 'celebrate';

export const updateUserBodySchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    address: Joi.object().keys({
        street: Joi.string(),
        number: Joi.number(),
        city: Joi.string(),
        state: Joi.string(),
        zipcode: Joi.string()
    }),
});

export const defaultUserPathSchema = { id: Joi.string().required() };