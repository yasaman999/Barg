import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, unit } from "../../../../mod.ts";
export const addUnitFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
            name,
            categories
        },
        get,
        
    } = body.details;

    const createdUnit = await unit.insertOne({
        name,
        categories,
    });

    return Object.keys(get).length != 0
    ? await unit.findOne({ _id: new ObjectId(createdUnit) }, get)
    : { _id: createdUnit };
     
};
