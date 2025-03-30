import express from 'express';
import { VehicleController } from '../controllers/vehical.controller.js';

const router = express.Router();

const vehicalController = new VehicleController();

// Get all vehicals
router.get('/vehicals', vehicalController.getAllEvents);

// Get events by type
// router.get('/vehical/filter', vehicalController.getEventByType);

// Get events by time range
// router.get('/range', );

// Get vehicle statistics
// router.get('/stats/:vehicleId', );

export default router;
