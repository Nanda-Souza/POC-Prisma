import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import { Anime } from '../protocols/anime.js';
import httpStatus from 'http-status';
import err from "../errors/index.js";

export function validateSchema(schema: ObjectSchema<Anime>) {
  return (req: Request, res: Response, next: NextFunction) => {    
    const body = req.body as Anime
    const { error } = schema.validate(body, { abortEarly: false });
    
    if (!error) {
      next();
    }else{      
      res.status(httpStatus.BAD_REQUEST).send(err.invalidDataError(error.details.map((d) => d.message)));
    }

    
  };
}

