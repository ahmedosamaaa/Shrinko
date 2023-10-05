import joi from "joi";
import { Types } from "mongoose";

const reqMethods = ["body", "query", "params", "headers", "file", "files"];

const validationObjectId = ( value, helper ) => {
  return Types.ObjectId.isValid( value ) ? true : helper.message('invalid id') 
}  


export const validationCoreFunction = (Schema) => {
  return (req, res, next) => {
    let validationErrorArr = [];
    for (const key of reqMethods) {
      if (Schema[key]) {
        const validationResult = Schema[key].validate(req[key], {
          abortEarly: false,
        });
        if (validationResult.error) {
          validationErrorArr.push(validationResult.error.details);
        }
      }
    }
    if (validationErrorArr.length) {
      req.validationErrors = validationErrorArr
      return next(new Error('', { cause: 400 }))
    }
    next()
  };
};
