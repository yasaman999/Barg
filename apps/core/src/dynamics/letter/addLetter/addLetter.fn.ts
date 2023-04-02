import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, letter } from "../../../../mod.ts";
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

    const createdLetter = await letter.insertOne({
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
    ? await letter.findOne({ _id: new ObjectId(createdLetter) }, get)
    : { _id: createdLetter };
     
};

   