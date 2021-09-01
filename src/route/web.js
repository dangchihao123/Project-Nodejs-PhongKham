import express from 'express';
import homeControler from '../controllers/homeController';
let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeControler.getHomePage);
    router.get('/about', homeControler.getAboutPage);
    router.get('/crud', homeControler.getCRUD);

    router.get('/get-crud', homeControler.displayGetCRUD);
    router.post('/post-crud', homeControler.postCRUD);


    return app.use("/", router);
}

module.exports = initWebRouter;