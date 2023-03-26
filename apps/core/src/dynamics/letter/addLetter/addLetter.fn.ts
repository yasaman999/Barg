import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, org } from "../../../../mod.ts";
export const addLetterFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
            number,
            subject,
            created_at,
            updated_at,
            delivered ,
            is_end ,
            tags,
            lid
        },
        get,
        
    } = body.details;

    const createdLetter = await org.insertOne({
        number,
        subject,
        created_at,
        updated_at,
        delivered ,
        is_end ,
        tags,
        lid
    });

    return Object.keys(get).length != 0
    ? await org.findOne({ _id: new ObjectId(createdLetter) }, get)
    : { _id: createdLetter };
     
};

   