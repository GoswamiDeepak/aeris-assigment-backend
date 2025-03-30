import express from 'express';
import { VehicleController } from '../controllers/vehical.controller.js';

const router = express.Router();

const vehicalController = new VehicleController();

// Get all vehicals
router.get('/vehicals', vehicalController.getAllEvents);


export default router;
