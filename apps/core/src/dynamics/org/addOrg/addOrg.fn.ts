import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, org } from "../../../../mod.ts";
export const addOrgFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
            name,
            address,
        },
        get,
        
    } = body.details;

    const createdOrg = await org.insertOne({
        name,
        address,
    });

    return Object.keys(get).length != 0
    ? await org.findOne({ _id: new ObjectId(createdOrg) }, get)
    : { _id: createdOrg };
     
};
