import { listAmmunition, getAmmunitionById, addAmmunition, removeAmmunition, updateAmmunition } from "../services/ammunitionServices.js";
import { createAmmunitionSchema, updateAmmunitionSchema } from "../schemas/ammunitionSchemas.js";
import HttpError from "../helpers/HttpError.js";

export const getAllAmmunition = async (req, res, next) => {
    try {
        const ammunition = await listAmmunition();
        res.status(200).json(ammunition);
    } catch (error) {
        next(error);
    }
};

export const getOneAmmunition = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ammunition = await getAmmunitionById(id);
        if (!ammunition) {
            throw new HttpError(404, "Not found");
        }
        res.status(200).json(ammunition);
    } catch (error) {
        next(error);
    }
};

export const deleteAmmunition = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await removeAmmunition(id);
        if (!deleted) {
            throw new HttpError(404, "Not found");
        }
        res.status(200).json(deleted);
    } catch (error) {
        next(error);
    }
};

export const createAmmunition = async (req, res, next) => {
    try {
        const { error } = createAmmunitionSchema.validate(req.body);
        if (error) {
            throw new HttpError(400, error.message);
        }

        const { name, email, phone } = req.body;
        const newAmmunition = await addAmmunition(name, email, phone);
        res.status(201).json(newAmmunition);
    } catch (error) {
        next(error);
    }
};

export const updateAmmunitionController = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!req.body || Object.keys(req.body).length === 0) {
            throw new HttpError(400, "Body must have at least one field");
        }

        const { error } = updateAmmunitionSchema.validate(req.body);
        if (error) {
            throw new HttpError(400, error.message);
        }

        const updatedAmmunition = await updateAmmunition(id, req.body);
        if (!updatedAmmunition) {
            throw new HttpError(404, "Not found");
        }

        res.status(200).json(updatedAmmunition);
    } catch (error) {
        next(error);
    }
};
