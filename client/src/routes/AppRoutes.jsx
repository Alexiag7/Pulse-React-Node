import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';

import { CampaignProfile } from '../pages/campaignProfile/CampaignProfile';
import { Influencers } from '../pages/influencers/Influencers';
import { Campaigns } from '../pages/campaigns/Campaigns';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/campaign" element={<Campaigns/>} />
        <Route path="/campaign/:id" element={<CampaignProfile/>} />
        <Route path="/influencer" element={<Influencers/>} />
      </Routes>
    </BrowserRouter>
  );
};
