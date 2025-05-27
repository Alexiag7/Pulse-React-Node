import express from 'express';
import influencerControllers from './influencer.controllers.js';

const router = express.Router();

router.get("/getAllInfluencers", influencerControllers.getAllInfluencers);

export default router;