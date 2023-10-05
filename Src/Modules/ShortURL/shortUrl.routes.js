import { Router } from "express";
import * as SC from "./shortUrl.controller.js";
import * as validators from "./shortUrl.validation.js"
import { validationCoreFunction } from "../../MiddleWares/Validation.js";
import { errorHandling } from "../../Utils/ErrorHandling.js";
const router = Router();

router.get(
    '/',
    errorHandling(SC.getShortUrl),

)
router.post(
    '/shortUrl',
    validationCoreFunction(validators.urlSchema),
    errorHandling(SC.shortUrl),
)

router.get(
    '/:shortUrl',
    errorHandling(SC.activateURL),

)
export default router