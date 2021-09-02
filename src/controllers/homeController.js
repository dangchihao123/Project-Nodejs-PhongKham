import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (error) {
        console.log(error);
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async(req, res) => {
    let data = await CRUDService.createNewUser(req.body);
    console.log(data);
    return res.render('displayCRUD.ejs', {datatable : data})
}

let displayGetCRUD = async(req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('----------------');
    console.log(data);
    console.log('----------------');
    return res.render('displayCRUD.ejs', {datatable : data});
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        console.log(userData);
        return res.render('editCRUD.ejs',{user: userData});
    } else {
        return res.send('User not found'); 
    }
    console.log(req.query.id);
}

let putCRUD =async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {datatable : allUser});
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let data = await CRUDService.deleteUserById(id);
       return res.render('displayCRUD.ejs', {datatable : data})
    } else {
        return res.send('delete not found!');
    }
}
module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD
}