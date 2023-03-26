import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, position } from "../../../../mod.ts";
export const addPositionFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
            name
         },
        get,
        
    } = body.details;

    const createdPosition = await position.insertOne({
        name
    });

    return Object.keys(get).length != 0
    ? await position.findOne({ _id: new ObjectId(createdPosition) }, get)
    : { _id: createdPosition };
     
};
