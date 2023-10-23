import express from "express";
const profileController = require('../controllers/profile').default
// import "../controllers/profile"

const router = express.Router();

router.post('/profile', profileController.newProfile)
router.get('/profile', profileController.getProfile)

module.exports=router 
