import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties

export const GET = async (request) => {
  try {
    await connectDB();
    let properties = Property.find({});
    let result = properties
    
    return Response.json(result);
  } catch (error) { 
    console.log(error); 
    return new Response("something went wrong", {
      status: 500,
    });
  }
};
