import executeQuery from "../../config/db.js";

class CampaignDal {

  addCampaign = async(data)=>{

    try {
      const {name, description, start_date, end_date} = data;
    let values = [name, description, start_date, end_date]

    let sql = "INSERT INTO campaigns (name, description, start_date, end_date) VALUES (?,?,?,?)"

    const result = await executeQuery(sql,values);
    return result;
    } catch (error) {
      console.log(error)
      throw {message: "error de bd"}
    }
    
  } 

  getAllCampaigns = async()=>{
    try {
      let sql = "SELECT * FROM campaigns WHERE campaign_is_deleted = 0"
      let result = await executeQuery(sql);
      return result;

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}

export default new CampaignDal();