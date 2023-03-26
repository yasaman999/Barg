import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, reffer } from "../../../../mod.ts";
export const addRefferFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
            number,
            delivered,
            // actions :
            type,
            created_at,
            updated_at,
            deadline,
            isMoving,
            description ,
            reply ,
        },
        get,
        
    } = body.details;

    const createdReffer = await reffer.insertOne({
        number,
        delivered,
        // actions :
        type,
        created_at,
        updated_at,
        deadline,
        isMoving,
        description ,
        reply ,
    });

    return Object.keys(get).length != 0
    ? await reffer.findOne({ _id: new ObjectId(createdReffer) }, get)
    : { _id: createdReffer };
     
};
