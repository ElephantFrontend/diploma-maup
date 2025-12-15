import Joi from "joi";

export const createAmmunitionSchema = Joi.object({
    name: Joi.string().min(2).required(),
    color: Joi.array(),
    url: Joi.string().min(2).required(),
    img: Joi.string().min(2).required(),
    category: Joi.string().min(2).required(),
    type: Joi.string().min(2).required()
});

export const updateAmmunitionSchema = Joi.object({
    name: Joi.string().min(2),
    color: Joi.array(),
    url: Joi.string().min(2),
    img: Joi.string().min(2),
    category: Joi.string().min(2),
    type: Joi.string().min(2)
}).min(1);
