const express = require('express');
const router = express.Router();
const controller = rquire('../controller/filecontroller');

let routes = (app) => {
    router.post('upload', controller.upload) // looking for method in filecontroller
    router.
}