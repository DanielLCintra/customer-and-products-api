import { Joi } from 'celebrate';

export const createProductBodySchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
});
