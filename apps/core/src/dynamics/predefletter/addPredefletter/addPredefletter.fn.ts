import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, preDefLetter } from "../../../../mod.ts";
export const addPredefletterFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
            title ,
            description,
            number
        },
        get,
        
    } = body.details;

    const createdPredefletter = await preDefLetter.insertOne({
        title ,
        description,
        number
    });

    return Object.keys(get).length != 0
    ? await preDefLetter.findOne({ _id: new ObjectId(createdPredefletter) }, get)
    : { _id: createdPredefletter };
     
};
