import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const validateLink = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const schema = Joi.object({
            original_url: Joi.string().uri().required(),
        });

        const { error } = schema.validate(req.body);
        console.log("error: ", error);
        if (error) return res.status(400).send(error.message);

        next();
    } catch (error) {
        console.log("error: ", error);
        res.status(501).send(error);
    }
};
