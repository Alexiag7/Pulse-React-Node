import express from 'express';
import campaignControllers from './campaign.controllers.js';

const router = express.Router();

router.post("/addCampaign", campaignControllers.addCampaign);
router.get("/getAllCampaigns", campaignControllers.getAllCampaigns);
router.get("/getOneCampaign/:id", campaignControllers.getOneCampaign);
router.get("/getInfluencers/:id", campaignControllers.getCampaignInfluencer);
router.post("/includeInfluencer", campaignControllers.includeInfluencer);


export default router;