import influencerDal from "./influencer.dal.js";


class InfluencerController {

  getAllInfluencers = async(req, res)=>{
    try {
      let influencers = await influencerDal.getAllInfluencers();
      console.log(influencers);

      influencers = influencers.map((influencer)=>{
        return{
          id:influencer.id,
          influencer_name: influencer.influencer_name,
          email: influencer.email,
          followers_count: influencer.followers_count
        }
      })

      res.status(200).json({message:"todas los influencer", influencers})
      
    } catch (error) {
      console.log(error);
            
      res.status(500).json({message:"ups hay algún problema"});
    }
  }

}

export default new InfluencerController();