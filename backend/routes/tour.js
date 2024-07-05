import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturetour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controls/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router()

//create new tour
router.post('/',verifyAdmin,createTour);

//create update new tour
router.put('/:id',verifyAdmin,updateTour);
//create delete tour
router.delete('/:id',verifyAdmin,deleteTour);
//create get single tour
router.get('/:id',getSingleTour);
//get all tour
router.get('/',getAllTour);
//get search tour
router.get('/search/getTourBySearch',getTourBySearch);
//get featured tour
router.get('/search/getFeaturetour',getFeaturetour);
router.get('/search/getTourCount',getTourCount);
export default router