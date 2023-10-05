import joi from "joi"
export const urlSchema = {
    body: joi.object({
        url:joi.string().required()
    })
}