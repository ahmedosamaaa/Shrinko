import path from 'path'
import { urlModel } from '../../../DB/Models/url.model.js';

//==========getShortUrl=======
export const getShortUrl = async (req,res,next) => {
    let urls = await urlModel.find()
    res.render('index.ejs',{urls})
}

//==========shortUrl=======
export const shortUrl = async (req,res,next) => {
    console.log(req.body);
    await urlModel.create({ full: req.body.url })
    res.redirect('/url/')
}

//==========activateURL=======
export const activateURL = async (req,res,next) => {

    const activeURL = await urlModel.findOne({ short: req.params.shortUrl })
    if(!activeURL){
        res.json({message: 'invalid URL'})
    }
    activeURL.clicks++
    activeURL.save()
    res.redirect(activeURL.full)
}
