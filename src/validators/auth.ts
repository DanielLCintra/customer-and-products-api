import { Joi } from 'celebrate';

export const signUpSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
});

export const authSchema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
});