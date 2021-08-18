import express from 'express';
import homeControler from '../controllers/homeController';
let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeControler.getHomePage);
    router.get('/about', homeControler.getAboutPage);


    return app.use("/", router);
}

module.exports = initWebRouter;