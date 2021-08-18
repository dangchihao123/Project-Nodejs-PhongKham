import express from 'express';
import bodyParser from 'body-parser'; // Lấy các tham số từ user gọi lên server như param, body
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./route/web.js";
// Sử dụng được biến môi trường trong .env thì ta cấu hình như sau
require('dotenv').config();

// config app
let app = express();

// cấu hình các tham số mà client gửi lên
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app); // app là một instand của express
initWebRouter(app); // app là một instand của express

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("sever run port " + port);
});