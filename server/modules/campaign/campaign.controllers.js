import campaignSchema from "../../schemas/createCampaignSchema.js";
import campaignDal from "./campaign.dal.js";
import { z } from "zod";


class CampaignController {

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

}

export default new CampaignController();