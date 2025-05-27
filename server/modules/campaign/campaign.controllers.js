import campaignSchema from "../../schemas/createCampaignSchema.js";
import campaignDal from "./campaign.dal.js";
import { z } from "zod";


class CampaignController {

  //añadir campaña con validaciones
  addCampaign = async(req, res)=>{
    try {

      let data = campaignSchema.parse(req.body)

      const {name, description, start_date, end_date} = req.body

       data={
        name,
        description,
        start_date,
        end_date
      }

      let result = await campaignDal.addCampaign(data)
      res.status(200).json({campaign:result, message:"creado correctamente"});
    } catch (error) {

      if (error instanceof z.ZodError){
        return res.status(400).json({message:"error de validacion", errors: error.errors})
      }

      console.log(error)
      res.status(500).json({message:"ups hay algún problema"})
    }
  }

  //traer todas la campañas
  getAllCampaigns = async(req, res)=>{
    try {
      let campaigns = await campaignDal.getAllCampaigns();
      console.log(campaigns);

      campaigns = campaigns.map((campaign)=>{
        return{
          id:campaign.id,
          name: campaign.name,
          description: campaign.description,
          start_date: campaign.start_date.split(" ")[0],
          end_date: campaign.end_date.split(" ")[0],
        }
      })

      res.status(200).json({message:"todas las campañas", campaigns})
      
    } catch (error) {
      console.log(error);
            
      res.status(500).json({message:"ups hay algún problema"});
    }
  }

  //traer el perfil de una campaña
  getOneCampaign = async(req, res)=>{
    const {id} = req.params;

    try {
      let campaign = await campaignDal.getOneCampaign(id);
      campaign = campaign[0]
      console.log(campaign);

      res.status(200).json({message:"una campaña", campaign})
      
    } catch (error) {
      console.log(error);
            
      res.status(500).json({message:"ups hay algún problema"});
    }
  }

  //añadir un influencer a una campaña
  includeInfluencer = async(req, res)=>{
    
    const {data} = req.body;
    console.log(data)

    try {
      let result = await campaignDal.includeInfluencer(data);
      console.log(result);
      res.status(200).json({message:"asignado correctamente"})

    } catch (error) {
      console.log(error);
            
      res.status(500).json({message:"Este influencer ya participa"});
    }
  }

  //traer todos los influencers de una campaña
  getCampaignInfluencer = async(req, res)=>{
    const {id} = req.params;

    try {
      let campaignInfluencer = await campaignDal.campaignInfluencer(id);
      console.log("influencers encontradossssss",campaignInfluencer);

      res.status(200).json({message:"influencers", influencers:campaignInfluencer})
      
    } catch (error) {
      console.log("*************",error);
            
      res.status(500).json({message:"ups hay algún problema"});
    }
  }

}

export default new CampaignController();