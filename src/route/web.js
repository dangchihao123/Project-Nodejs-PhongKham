import express from "express";
import homeControler from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeControler.getHomePage);
  router.get("/about", homeControler.getAboutPage);
  router.get("/crud", homeControler.getCRUD);

  router.post("/post-crud", homeControler.postCRUD);
  router.get("/get-crud", homeControler.displayGetCRUD);
  router.get("/edit-crud", homeControler.getEditCRUD);

  router.post("/put-crud", homeControler.putCRUD);
  router.get("/delete-crud", homeControler.deleteCRUD);

  router.post("/api/login", userController.handleLogin);

  return app.use("/", router);
};

module.exports = initWebRouter;
