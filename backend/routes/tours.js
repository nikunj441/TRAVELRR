import express from 'express'
import { createTour } from '../controller/tourController.js'
const router = express.Router()

//create new tour
router.post('/',createTour)

export default router