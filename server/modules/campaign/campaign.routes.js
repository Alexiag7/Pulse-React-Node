import express from 'express';
import campaignControllers from './campaign.controllers.js';

const router = express.Router();

router.post("/addCampaign", campaignControllers.addCampaign);
router.get("/getAllCampaigns", campaignControllers.getAllCampaigns);

export default router;