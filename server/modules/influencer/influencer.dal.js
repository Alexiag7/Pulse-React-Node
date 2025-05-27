import executeQuery from "../../config/db.js";

class InfluencerDal {


  getAllInfluencers = async()=>{
    try {
      let sql = "SELECT * FROM influencers"
      let result = await executeQuery(sql);
      return result;

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}

export default new InfluencerDal();